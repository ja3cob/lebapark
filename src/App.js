import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Attractions from './components/Attractions/Attractions';
import News from './components/News/News';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import PlanYourVisit from './components/PlanYourVisit/PlanYourVisit';
import Contact from './components/Contact/Contact';
import { Controller } from 'react-scrollmagic';
// function which limits resize event occurrence
function debounce(fn, ms) {
	let timer;
	return _ => {
		clearTimeout(timer);
		timer = setTimeout(_ => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}
const App = () => {
	//cookies
	const [cookies, setCookie] = useCookies(['CookiesParkLeba']);
	const handleCookie = () => {
		setCookie('CookiesParkLeba', 'CookiesAccepted', { path: '/' });
	};

	// handling resize to put good components on mobile or desktop devices

	const [width, setWidth] = useState(window.innerWidth);
	const [isMobile, setIsMobile] = useState(null);
	useEffect(() => {
		const debouncedHandleResize = debounce(function handleResize() {
			setWidth(window.innerWidth);
		}, 100);
		window.addEventListener('resize', debouncedHandleResize);
		if (width > 1000) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
		return () => window.removeEventListener('resize', debouncedHandleResize);
	}, [width]);

	// cookies
	useEffect(() => {
		if (!cookies.CookiesParkLeba) {
			const cookiesBtn = document.querySelector('.cookies button');
			cookiesBtn.addEventListener('click', () => {
				cookiesBtn.parentElement.style.display = 'none';
			});
		}
	});

	// references - scroll to section after navbar clicked
	const HeroRef = useRef();
	const AttractionsRef = useRef();
	const NewsRef = useRef();
	const OffersRef = useRef();
	const VisitRef = useRef();
	const ContactRef = useRef();
	const refs = [
		HeroRef,
		AttractionsRef,
		NewsRef,
		OffersRef,
		VisitRef,
		ContactRef,
	];
	return (
		<Controller>
			<Navbar isMobile={isMobile} refs={refs} />
			{!cookies.CookiesParkLeba && (
				<div className='cookies'>
					<p>Ta strona wykorzystuje pliki cookies.</p>{' '}
					<button onClick={handleCookie}>X</button>
				</div>
			)}
			<div className='content'>
				<Hero HeroRef={HeroRef} />
				<Attractions isMobile={isMobile} AttractionsRef={AttractionsRef} />
				<News NewsRef={NewsRef} />
				<SpecialOffers OffersRef={OffersRef} />
				<PlanYourVisit VisitRef={VisitRef} AttractionsRef={AttractionsRef} />
				<Contact ContactRef={ContactRef} />
			</div>
			<footer>
				<a href='standardy_ochrony_malotenich.pdf'>Standardy Ochrony Małoletnich</a>
				<p>Wszystkie prawa zastrzeżone.</p>
				<p>Copyright by Łeba Park © 2008-2025.</p>
			</footer>
		</Controller>
	);
};

export default App;
