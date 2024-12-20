import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import TechEventLanding from "./pages/TechEventLanding";
import PackDetailsPageFR from "./pages/PackDetailsPageFR";
import PackDetailsPageEN from "./pages/PackDetailsPageEN";
import MerchandisingGuide from "./pages/MerchandisingGuide";
import PersonalizationGuide from "./pages/PersonalizationGuide";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import DigitalSolutions from "./pages/DigitalSolutions";
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyPolicy from "./pages/privacy-policy";
import CGV from "./pages/cgv";
import Cookies from "./pages/cookies";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<TechEventLanding />} />
				<Route path="/packs" element={<PackDetailsPageFR />} />
				<Route path="/packs/en" element={<PackDetailsPageEN />} />
				<Route path="/terms" element={<TermsAndConditions />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/cgv" element={<CGV />} />
				<Route path="/cookies" element={<Cookies />} />
				<Route path="/merchandising" element={<MerchandisingGuide />} />
				<Route path="/personnalisation" element={<PersonalizationGuide />} />
				<Route path="/ecommerce" element={<EcommerceSolutions />} />
				<Route path="/solutions" element={<DigitalSolutions />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
