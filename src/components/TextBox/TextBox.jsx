import "./TextBox.css";

const TextBox = ({ className, caption, name, type, rich, min }) => {
  const id = "textBox-" + name;
  return (
    <div className={"textBox-container " + (className ? className : "")}>
      <label htmlFor={id}>{caption}</label>
      {rich ? (
        <textarea
          id={id}
          className="textBox"
          name={name}
          placeholder={caption}
          rows={5}
        />
      ) : (
        <input
          id={id}
          className="textBox"
          name={name}
          type={type ?? "text"}
          placeholder={caption}
          min={min}
        />
      )}
    </div>
  );
};

export default TextBox;
