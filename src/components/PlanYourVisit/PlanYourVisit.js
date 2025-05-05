import VisitHeader1 from '../../assets/visit-header1.png';
import VisitHeader2 from '../../assets/visit-header2.png';
import VisitHeader3 from '../../assets/visit-header3.png';
import VisitLink1 from '../../assets/visit-link1.png';
import VisitLink2 from '../../assets/visit-link2.png';
import Separator1 from '../../assets/attractions-separator1.png';
import Separator2 from '../../assets/attractions-separator2.png';
import { Scene } from 'react-scrollmagic';
const PlanYourVisit = ({ VisitRef, AttractionsRef }) => {
	return (
		<div className='visit-container' ref={VisitRef}>
			<div className='visit-separator'>
				<img src={Separator1} alt='Początek sekcji Zaplanuj wizytę' />
			</div>
			<div className='visit-section'>
				<Scene duration={1726} classToggle={['.nav-5', 'active']}>
					<div className='visit-header'>
						<img src={VisitHeader1} alt='Zaplanuj swoją wizytę.' />
					</div>
				</Scene>
				<p className='visit-text'>
					Park Dinozaurów w Łebie to świat zabawy dla całej rodziny, wspaniałe
					trasy pełne przygód i atrakcji, mnóstwo świetnej rozrywki.
					<br />
					<br />
					Naturalne walory Parku i bliskość morza czynią dzień, przeznaczony na
					poznanie Łeba Parku, niezapomnianym. Wyjątkowy nacisk położyliśmy na
					przyjemność, zabawę i edukację najmłodszych.
					<br />
					<br />
					W czasie zwiedzania każdy z rodziców będzie miał niepowtarzalną
					możliwość obserwowania swojej pociechy w sytuacjach nowych, nie
					odkrytych, pełnych żywiołowych reakcji.
					<br />
					<br />
					Zaplanuj czas na nowe atrakcje: autodrom, profesjonalny park trampolin,
					mega duży zadaszony plac zabaw o powierzchni 1200m<sup>2</sup>,
					gigantyczne zjeżdżalnie wodne,
					pole do mini golfa.
					<br />
					<br />
					Czas zwiedzania Parku to ok 4 – 6 godzin… nie oznacza to, że w tym
					czasie zwiedzicie wszystko … czasu i tak będzie mało ...
					<br />
					<br />
					Nasze <span>elektryczne pojazdy</span> dowiozą Państwa do naszego
					parku za darmo. Parkujemy w centrum Łeby – ulica Wojska Polskiego
					(obok pizzerii Lider). Pierwszy przejazd wykonujemy o godzinie{' '}
					<span>9:00</span>, busy odjeżdżają <span>co 10 minut</span> (wg.
					zajętości pojazdów).
					<br />
					<br />
					Busy Łeba Parku kursują w terminach:
					<br />
					01.05 - 04.05
					<br />
					30.05 - 31.08
				</p>
			</div>
			<div className='visit-items'>
				<div className='visit-item'>
					<div className='visit-header'>
						<img src={VisitHeader2} alt='Kalendarz' />
					</div>
					<h4>od 26 kwietnia do 30 kwietnia: 9:00 – 16:00</h4>
					<p>park należy opuścić do 17:30</p>
					<h4>od 1 maja do 4 maja: 9:00 – 17:00</h4>
					<p>park należy opuścić do 18:30</p>
					<h4>od 5 maja do 18 czerwca: 9:00 – 16:00</h4>
					<p>park należy opuścić do 17:30</p>
					<h4>od 19 czerwca do 27 czerwca: 9:00 – 17:00</h4>
					<p>park należy opuścić do 18:30</p>
					<h4>od 28 czerwca do 24 sierpnia: 9:00 – 18:30</h4>
					<p>park należy opuścić do 19:30</p>
					<h4>od 25 sierpnia do 7 września: 9:00 – 16:00</h4>
					<p>park należy opuścić do 17:30</p>
					<h4>od 8 września do 28 września: 9:00 – 15:30</h4>
					<p>park należy opuścić do 16:30</p>

					<h4>od 29 września park jest nieczynny</h4>
				</div>
				<div className='visit-item'>
					<div className='visit-header'>
						<img src={VisitHeader3} alt='Kalendarz' />
					</div>
					<h4>bilet normalny: 95 zł</h4>
					<h4>bilet ulgowy: 75 zł</h4>
					<p>
						dla dzieci i młodzieży do 15 roku życia tylko za okazaniem
						legitymacji szkolnej
					</p>
					<h4>bilet grupowy: 45 zł</h4>
					<p>
						dla grup szkolnych powyżej 20 dzieci, 1 osoba (opiekun/organizator)
						na 15 dzieci z danej grupy wstęp wolny,
					</p>
					<h4>dzieci do lat 4: wstęp wolny*</h4>
					<p>* nie dotyczy grup zorganizowanych</p>
					<h4>
						<span>WSZYSTKIE** atrakcje w cenie biletu!</span>
					</h4>
					<p>
						+ bezpłatnie przejazd z Łeby DINO BUSEM! (w terminach 01.05-04.05 i 30.05-31.08)
						<br />
						+ niestrzeżony parking (dla zwiedzających, otwarty w godzinach
						pracy parku) GRATIS!
					</p>
				</div>
			</div>

			<div className='visit-links'>
				<button
					className='visit-link'
					onClick={() => {
						window.scrollTo({
							top: AttractionsRef.current.offsetTop - 65,
							behavior: 'smooth',
						});
					}}
				>
					<img src={VisitLink1} alt='Sprawdź listę atrakcji!' />
				</button>
				<button className='visit-link open-modal'>
					<img src={VisitLink2} alt='Kup bilety online!' />
				</button>
			</div>

			<div className='visit-item visit-item-additional'>
				<h3 className='visit-additional'>Informacje dodatkowe</h3>
				{/* <div className='visit-header'> */}
				{/* <img src={VisitHeader4} alt='Dodatkowe informacj, mapa parku' /> */}
				{/* </dnpm iv> */}
				<ul>
					<li>
						pracownicy Łeba Parku służą w każdej chwili informacją i pomocą,
						dbamy również o bezpieczeństwo wszystkich zwiedzających, dlatego
						każda osoba obsługi wyposażona jest w znakowany logo parku ubiór.
					</li>
					<li>
						na terenie Łeba Parku istnieje możliwość płatności kartą
					</li>
					<li>
						Łeba Park posiada wszelkie udogodnienia dla osób niepełnosprawnych,
					</li>
					<li>
						przed Łeba Parkiem czeka na Państwa parking,
					</li>
					<li>na terenie Łeba Parku obowiązuje zakaz wstępu ze zwierzętami.</li>
				</ul>
				{/* <a href={ParkMap} download='Mapa Parku Dinozaurów Łeba'> */}
				{/* Pobierz <span>mapę parku</span> */}
				{/* </a> */}
			</div>
			<div className='visit-separator'>
				<img src={Separator2} alt='Koniec sekcji Zaplanuj wizytę' />
			</div>
		</div>
	);
};

export default PlanYourVisit;
