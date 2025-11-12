<?php

header("Access-Control-Allow-Origin: https://lebapark.pl");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["errors" => array("Method Not Allowed")]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

$date = htmlspecialchars(trim($input["date"]));
$institutionType = htmlspecialchars(trim($input["institutionType"]));
$name = htmlspecialchars(trim($input["name"]));
$email = htmlspecialchars(trim($input["email"]));
$street = htmlspecialchars(trim($input["street"]));
$city = htmlspecialchars(trim($input["city"]));
$nip = preg_replace('/\s+/', '', htmlspecialchars($input["nip"]));
$phone = preg_replace('/\s+/', '', htmlspecialchars(trim($input["phone"])));
$voivodeShip = htmlspecialchars(trim($input["voivodeShip"]));
$zip = htmlspecialchars(trim($input["zip"]));
$teacherName = htmlspecialchars(trim($input["zip"]));
$teacherEmail = htmlspecialchars(trim($input["teacherEmail"]));
$childrenQuantity = htmlspecialchars(trim($input["childrenQuantity"]));
$teacherPhone = preg_replace('/\s+/', '', htmlspecialchars(trim($input["teacherPhone"])));
$teachersQuantity = htmlspecialchars(trim($input["teachersQuantity"]));
$foodType = htmlspecialchars(trim($input["foodType"]));
$additionalInfo = htmlspecialchars(trim($input["additionalInfo"]));

$errors = array();
if (
    empty($date) ||
    empty($institutionType) ||
    empty($name) ||
    empty($email) ||
    empty($street) ||
    empty($city) ||
    empty($phone) ||
    empty($voivodeShip) ||
    empty($zip) ||
    empty($teacherName) ||
    empty($teacherEmail) ||
    empty($childrenQuantity) ||
    empty($teacherPhone) ||
    empty($teachersQuantity) ||
    empty($foodType)
) {
    array_push($errors, "Wypełnij wszystkie wymagane pola");
}
if (
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    !filter_var($teacherEmail, FILTER_VALIDATE_EMAIL)
) {
    array_push($errors, "Niepoprawny email");
}
if (!empty($nip) && !preg_match('/^\d{10}$/', $nip)) {
    array_push($errors, "Niepoprawny NIP");
}
if (
    !preg_match('/^\+\d{2}\d{9}$/', $phone) ||
    !preg_match('/^\+\d{2}\d{9}$/', $teacherPhone)
) {
    array_push($errors, "Numer telefonu musi być w formacie +XX XXX XXX XXX");
}
if (!preg_match('/^\d{2}\-\d{3}$/', $zip)) {
    array_push($errors, "Kod pocztowy musi być w formacie XX-XXX");
}
if (
    !is_numeric($childrenQuantity) || floatval($childrenQuantity) < 1 ||
    !is_numeric($teachersQuantity) || floatval($teachersQuantity) < 1
) {
    array_push($errors, "Niepoprawna ilość dzieci lub opiekunów");
}

if (count($errors) > 0) {
    http_response_code(400);
    echo json_encode(["errors" => $errors]);
    exit;
}

$to = "lebapark@lebapark.pl";
$subject = "Nowa rezerwacja od: $name";

$body = "
Data przyjazdu: $date
Informacje o: $institutionType
Nazwa: $name
Email: $email
Numer telefonu: $phone
Adres: $street, $zip $city, $voivodeShip
NIP: $nip

Opiekun:
Imię i nazwisko: $teacherName
Email: $teacherEmail
Numer telefonu: $teacherPhone
Ilość dzieci: $childrenQuantity
Ilość opiekunów: $teachersQuantity

Posiłek: $foodType
Dodatkowe informacje: $additionalInfo
";

$headers = "From: lebapark@lebapark.pl\r\n";
$headers .= "Reply-To: $teacherEmail\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => array("Wysłano!")]);
} else {
    http_response_code(500);
    echo json_encode(["errors" => array("Błąd wysyłania formularza")]);
}
?>
