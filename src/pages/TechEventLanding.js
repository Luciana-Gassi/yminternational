// PARTE 1: Imports e inizio del componente fino alla fine della Hero Section
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";

// Array delle immagini del carousel
const carouselImages = [
	{
		url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
		alt: "Tech event hall",
	},
	{
		url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
		alt: "Tech conference",
	},
	{
		url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
		alt: "Tech exhibition",
	},
];

function TechEventLanding() {
	const { t, i18n } = useTranslation();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const [currentLanguage, setCurrentLanguage] = useState(
		localStorage.getItem("language") || "fr"
	);

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		setCurrentLanguage(lang);
		localStorage.setItem("language", lang);
	};

	const testimonials_more = [
		{
			quote: t("testimonials_more.0.quote"),
			author: t("testimonials_more.0.author"),
			company: t("testimonials_more.0.company"),
		},
		{
			quote: t("testimonials_more.1.quote"),
			author: t("testimonials_more.1.author"),
			company: t("testimonials_more.1.company"),
		},
		{
			quote: t("testimonials_more.2.quote"),
			author: t("testimonials_more.2.author"),
			company: t("testimonials_more.2.company"),
		},
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 2500);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
				<div className="container-ym py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<div className="flex items-center">
							<Link
								to="#"
								onClick={(e) => {
									e.preventDefault();
									const heroSection = document.getElementById("hero");
									heroSection.scrollIntoView({ behavior: "smooth" });
								}}
							>
								<img
									src="/yminternational/images/logo-fullBluRed-rembg.png"
									alt="YourMerchandising Logo"
									className="h-20 w-27"
								/>
							</Link>
						</div>
						<nav className="hidden md:flex items-center space-x-8">
							<Link
								to="#a_propos"
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("a_propos")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className="text-ym-blue hover:text-ym-burgundy transition-colors"
							>
								{t("header_menu_about")}
							</Link>

							<Link
								to="#offres"
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("offres")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className="text-ym-blue hover:text-ym-burgundy transition-colors"
							>
								{t("header_menu_offers")}
							</Link>

							<Link
								to="#solutions"
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("solutions")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className="text-ym-blue hover:text-ym-burgundy transition-colors"
							>
								{t("header_menu_solutions")}
							</Link>

							<Link
								to="#contact"
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("contact")
										.scrollIntoView({ behavior: "smooth" });
								}}
								className="btn-primary"
							>
								{t("header_menu_contact")}
							</Link>

							<div className="flex items-center space-x-4">
								<div className="relative">
									<button
										onClick={() => handleLanguageChange("en")}
										className={`flex items-center space-x-2 transition-colors duration-200 ${
											i18n.language === "en"
												? "text-ym-burgundy font-semibold"
												: "text-ym-blue hover:text-ym-burgundy"
										}`}
									>
										<img
											src="/yminternational/images/en-flag.png"
											alt="English"
											className={`w-5 h-5 transition-opacity duration-200 ${
												i18n.language === "en"
													? "opacity-100"
													: "opacity-70 hover:opacity-100"
											}`}
										/>
										<span>En</span>
									</button>
									{i18n.language === "en" && (
										<motion.div
											layoutId="activeLanguage"
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ym-burgundy rounded-full"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.2 }}
										/>
									)}
								</div>

								<div className="relative">
									<button
										onClick={() => handleLanguageChange("fr")}
										className={`flex items-center space-x-2 transition-colors duration-200 ${
											i18n.language === "fr"
												? "text-ym-burgundy font-semibold"
												: "text-ym-blue hover:text-ym-burgundy"
										}`}
									>
										<img
											src="/yminternational/images/fr-flag.png"
											alt="Français"
											className={`w-5 h-5 transition-opacity duration-200 ${
												i18n.language === "fr"
													? "opacity-100"
													: "opacity-70 hover:opacity-100"
											}`}
										/>
										<span>Fr</span>
									</button>
									{i18n.language === "fr" && (
										<motion.div
											layoutId="activeLanguage"
											className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ym-burgundy rounded-full"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.2 }}
										/>
									)}
								</div>
							</div>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section
				id="hero"
				className="pt-24 relative overflow-hidden bg-gradient-to-b from-ym-blue to-ym-blue/90 text-white h-[90vh]"
			>
				{/* Background Carousel */}
				<AnimatePresence mode="wait">
					<motion.div
						key={currentImageIndex}
						className="absolute inset-0 z-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<div className="relative h-full w-full">
							{/* Overlay gradient */}
							<div className="absolute inset-0 bg-gradient-to-b from-ym-blue/80 to-ym-blue/90 z-10"></div>

							{/* Background image */}
							<motion.img
								src={`${carouselImages[currentImageIndex].url}?auto=format&fit=crop&w=2000`}
								alt={carouselImages[currentImageIndex].alt}
								className="object-cover w-full h-full"
								initial={{ scale: 1.1 }}
								animate={{ scale: 1 }}
								transition={{ duration: 6 }}
							/>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* Carousel Indicators */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
					{carouselImages.map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
							}`}
							onClick={() => setCurrentImageIndex(index)}
						/>
					))}
				</div>

				{/* Content */}
				<div className="container-ym py-20 relative z-10 h-full flex items-center">
					<motion.div
						className="max-w-3xl mx-auto text-center"
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						<h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
							{t("hero_title")}
						</h1>
						<p className="text-xl md:text-2xl font-proximanova mb-8 text-white/90">
							{t("hero_description")}
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<motion.button
								className="btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									const offresSection = document.getElementById("offres");
									offresSection.scrollIntoView({ behavior: "smooth" });
								}}
							>
								{t("hero_cta_discover")}
							</motion.button>
							<motion.button
								className="btn-primary bg-white/10 hover:bg-white/20"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									const contactSection = document.getElementById("contact");
									contactSection.scrollIntoView({ behavior: "smooth" });
								}}
							>
								{t("hero_cta_demo")}
							</motion.button>
						</div>
					</motion.div>
				</div>

				{/* Decorative bottom gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
			</section>
			<div id="a_propos" className="py-5 bg-gray-20"></div>
			{/* Value Proposition Section */}
			<section className="py-24 bg-white">
				<div className="container-ym">
					{/* Main Value Prop */}
					<motion.div
						className="text-center mb-16"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-ym-blue mb-6">
							{t("about_title")}
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
							{t("about_description")}
						</p>
					</motion.div>

					{/* Value Props Grid */}
					<div className="grid md:grid-cols-3 gap-8 mb-16">
						<motion.div
							className="relative overflow-hidden rounded-xl"
							initial={{ x: -20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
						>
							<div className="absolute inset-0">
								<img
									src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
									alt="Service Excellence"
									className="object-cover w-full h-full opacity-10"
								/>
							</div>
							{/* Service Excellence */}
							<div className="bg-gray-50 rounded-xl p-8 transition-all hover:shadow-lg">
								<div className="w-16 h-16 bg-ym-lightred/30 rounded-full flex items-center justify-center mb-6 mx-auto">
									<svg
										className="w-8 h-8 text-ym-blue"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-ym-blue mb-4 text-center">
									{t("about_service_excellence_title")}
								</h3>
								<ul className="space-y-3 text-gray-600">
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_service_excellence_items.0")}
									</li>
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_service_excellence_items.1")}
									</li>
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_service_excellence_items.2")}
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Innovation */}
						<motion.div
							className="relative overflow-hidden rounded-xl"
							initial={{ x: -20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
						>
							<div className="absolute inset-0">
								<img
									src="https://images.pexels.com/photos/19746343/pexels-photo-19746343/free-photo-of-pink-light-over-3d-printer.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="Service Excellence"
									className="object-cover w-full h-full opacity-10"
								/>
							</div>
							<div className="bg-gray-50 rounded-xl p-8 transition-all hover:shadow-lg">
								<div className="w-16 h-16 bg-ym-lightred/30 rounded-full flex items-center justify-center mb-6 mx-auto">
									<svg
										className="w-8 h-8 text-ym-blue"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-ym-blue mb-4 text-center">
									{t("about_innovation_title")}
								</h3>
								<ul className="space-y-3 text-gray-600">
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_innovation_items.0")}
									</li>
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_innovation_items.1")}
									</li>
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_innovation_items.2")}
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Sustainability */}
						<motion.div
							className="relative overflow-hidden rounded-xl"
							initial={{ x: -20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
						>
							<div className="absolute inset-0">
								<img
									src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="Service Excellence"
									className="object-cover w-full h-full opacity-10"
								/>
							</div>
							<div className="bg-gray-50 rounded-xl p-8 transition-all hover:shadow-lg">
								<div className="w-16 h-16 bg-ym-lightred/30 rounded-full flex items-center justify-center mb-6 mx-auto">
									<svg
										className="w-8 h-8 text-ym-blue"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-ym-blue mb-4 text-center">
									{t("about_sustainability_title")}
								</h3>
								<ul className="space-y-3 text-gray-600">
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_sustainability_items.0")}
									</li>
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_sustainability_items.1")}
									</li>
									<li className="flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
										{t("about_sustainability_items.2")}
									</li>
								</ul>
							</div>
						</motion.div>

						{/* Key Benefits */}
						<div className="text-center">
							<div className="inline-flex items-center gap-2 text-ym-blue border-2 border-ym-blue/20 rounded-full px-6 py-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span className="font-semibold">
									{t("about_fast_delivery")}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-24 bg-gray-50">
				<div className="container-ym">
					<motion.div
						className="max-w-4xl mx-auto"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						<h3 className="text-3xl font-bold text-ym-blue mb-12 text-center">
							{t("why_choose_us_title")}
						</h3>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="space-y-8">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-ym-blue"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold text-ym-blue mb-2">
											{t("why_choose_us_quality_title")}
										</h4>
										<p className="text-gray-600">
											{t("why_choose_us_quality_description")}
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-ym-blue"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold text-ym-blue mb-2">
											{t("why_choose_us_service_title")}
										</h4>
										<p className="text-gray-600">
											{t("why_choose_us_service_description")}
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-8">
								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-ym-blue"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold text-ym-blue mb-2">
											{t("why_choose_us_production_title")}
										</h4>
										<p className="text-gray-600">
											{t("why_choose_us_production_description")}
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="w-12 h-12 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-ym-blue"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-bold text-ym-blue mb-2">
											{t("why_choose_us_analytics_title")}
										</h4>
										<p className="text-gray-600">
											{t("why_choose_us_analytics_description")}
										</p>
									</div>
								</div>
							</div>
						</div>

						<motion.div
							className="mt-12 text-center"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
						>
							<p className="text-lg text-ym-blue font-semibold">
								{t("why_choose_us_experience")}
							</p>
						</motion.div>
					</motion.div>
					{/* Sezione Certificazioni */}
					<motion.div
						className="mt-16 text-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<div className="max-w-3xl mx-auto">
							<p className="text-lg text-gray-700 mb-8">
								{t("why_choose_us_certifications_text")}
							</p>
						</div>

						<div className="mt-6">
							{/* Prima riga con 4 certificazioni */}
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/Gots_Cert.jpg"
										alt="GOTS Certification"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">GOTS Certified</p>
								</div>
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/FSC_Cert.jpg"
										alt="FSC Certification"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">FSC Certified</p>
								</div>
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/Ecovadis_Cert.jpg"
										alt="Ecovadis Certification"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">
										Ecovadis Certified
									</p>
								</div>
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/Grs_Cert.jpg"
										alt="Global Recycled Standard"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">
										Global Recycled Standard
									</p>
								</div>
							</div>

							{/* Seconda riga centrata */}
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-4 mt-4">
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/UNglobal_Cert.jpg"
										alt="UN Global Compact"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">
										UN Global Compact
									</p>
								</div>
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/Ocean_Cert.jpg"
										alt="Ocean Bound"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">
										Ocean Bound Plastic
									</p>
								</div>
								<div className="flex flex-col items-center justify-center p-2">
									<img
										src="/yminternational/images/Smeta_Cert.jpg"
										alt="SMETA"
										className="h-16 w-auto object-contain transition-all duration-300"
									/>
									<p className="text-sm text-gray-600 mt-1">SMETA</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
			<div id="offres" className="py-5 bg-gray-50"></div>

			{/* Offres Section - Header */}
			<section className="py-20 bg-gray-50">
				<div className="container-ym">
					{/* Section Header */}
					<div className="text-center mb-6">
						<h2 className="text-4xl font-bold text-ym-blue mb-4">
							{t("offers_section_title")}
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							{t("offers_section_description")}
						</p>
					</div>
				</div>
			</section>

			{/* Offres Section - Pricing Cards */}
			<section className="py-6 bg-gray-50">
				<div className="container-ym">
					{/* Pricing Cards */}
					<div className="grid md:grid-cols-3 gap-8">
						{/* Essential Pack */}
						<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
							<div className="p-8">
								<h3 className="text-2xl font-bold text-ym-blue mb-4">
									{t("essential_pack_title")}
								</h3>
								<p className="text-gray-600 mb-6">
									{t("essential_pack_description")}
								</p>
								<div className="text-3xl font-bold text-ym-burgundy mb-6">
									{t("essential_pack_price")}
								</div>
								<ul className="space-y-4 mb-8">
									{[
										"essential_pack_features.0",
										"essential_pack_features.1",
										"essential_pack_features.2",
										"essential_pack_features.3",
										"essential_pack_features.4",
										"essential_pack_features.5",
									].map((feature, index) => (
										<li key={index} className="flex items-center gap-2">
											<svg
												className="w-5 h-5 text-ym-blue"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											{t(feature)}
										</li>
									))}
								</ul>

								<Link
									to={
										currentLanguage === "fr"
											? "/packs#pack-essential"
											: "/packs/en#pack-essential"
									}
									href={
										currentLanguage === "fr"
											? "/packs#pack-essential"
											: "/packs/en#pack-essential"
									}
									className="w-full btn-primary"
								>
									{t("essential_pack_button")}
								</Link>
							</div>
						</div>

						{/* Premium Pack */}
						<div className="bg-white rounded-xl shadow-lg overflow-hidden transform scale-105 border-2 border-ym-burgundy relative">
							<div className="absolute top-0 right-0 bg-ym-burgundy text-white py-1 px-4 text-sm">
								{t("premium_pack_recommend")}
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-bold text-ym-blue mb-4">
									{t("premium_pack_title")}
								</h3>
								<p className="text-gray-600 mb-6">
									{t("premium_pack_description")}
								</p>
								<div className="text-3xl font-bold text-ym-burgundy mb-6">
									{t("premium_pack_price")}
								</div>
								<ul className="space-y-4 mb-8">
									{[
										"premium_pack_features.0",
										"premium_pack_features.1",
										"premium_pack_features.2",
										"premium_pack_features.3",
										"premium_pack_features.4",
										"premium_pack_features.5",
									].map((feature, index) => (
										<li key={index} className="flex items-center gap-2">
											<svg
												className="w-5 h-5 text-ym-blue"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											{t(feature)}
										</li>
									))}
								</ul>

								<Link
									to={
										currentLanguage === "fr"
											? "/packs#pack-premium"
											: "/packs/en#pack-premium"
									}
									href={
										currentLanguage === "fr"
											? "/packs#pack-premium"
											: "/packs/en#pack-premium"
									}
									className="w-full btn-primary"
								>
									{t("premium_pack_button")}
								</Link>
							</div>
						</div>

						{/* Digital Plus Pack */}
						<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
							<div className="p-8">
								<h3 className="text-2xl font-bold text-ym-blue mb-4">
									{t("digital_plus_pack_title")}
								</h3>
								<p className="text-gray-600 mb-6">
									{t("digital_plus_pack_description")}
								</p>
								<div className="text-3xl font-bold text-ym-burgundy mb-6">
									{t("digital_plus_pack_price")}
								</div>
								<ul className="space-y-4 mb-8">
									{[
										"digital_plus_pack_features.0",
										"digital_plus_pack_features.1",
										"digital_plus_pack_features.2",
										"digital_plus_pack_features.3",
										"digital_plus_pack_features.4",
										"digital_plus_pack_features.5",
									].map((feature, index) => (
										<li key={index} className="flex items-center gap-2">
											<svg
												className="w-5 h-5 text-ym-blue"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											{t(feature)}
										</li>
									))}
								</ul>

								<Link
									to={
										currentLanguage === "fr"
											? "/packs#pack-digital"
											: "/packs/en#pack-digital"
									}
									href={
										currentLanguage === "fr"
											? "/packs#pack-digital"
											: "/packs/en#pack-digital"
									}
									className="w-full btn-primary"
								>
									{t("digital_plus_pack_button")}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Offres Section - Startup Pack */}
			<section className="py-18 bg-gray-50">
				<div className="container-ym">
					<div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
						<div className="max-w-4xl mx-auto text-center mb-8">
							{/* Startup Pack Section */}
							<h3 className="text-2xl md:text-3xl font-bold text-ym-blue mb-4">
								{t("startup_pack_section_title")}
							</h3>
							<p className="text-lg text-gray-600">
								{t("startup_pack_section_description")}
							</p>
						</div>

						<div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
							<div className="grid md:grid-cols-2 gap-8">
								{/* Colonna sinistra con dettagli e features */}
								<div>
									<h4 className="text-xl font-bold text-ym-blue mb-2">
										{t("startup_pack_title")}
									</h4>
									<p className="text-gray-600 mb-4">
										{t("startup_pack_description")}
									</p>
									<div className="text-2xl font-bold text-ym-burgundy mb-6">
										{t("startup_pack_price")}
									</div>
									<ul className="space-y-3">
										{[
											"startup_pack_features.0",
											"startup_pack_features.1",
											"startup_pack_features.2",
										].map((feature, index) => (
											<li key={index} className="flex items-center gap-2">
												<svg
													className="w-5 h-5 text-ym-blue"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{t(feature)}
											</li>
										))}
									</ul>
								</div>

								{/* Colonna destra con ideal for e button */}
								<div className="flex flex-col justify-between">
									<div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg mb-6">
										<p className="font-semibold text-ym-blue mb-2">
											{t("startup_pack_ideal_title")}
										</p>
										<ul className="space-y-2">
											<li>• {t("startup_pack_ideal_for.0")}</li>
											<li>• {t("startup_pack_ideal_for.1")}</li>
											<li>• {t("startup_pack_ideal_for.2")}</li>
										</ul>
									</div>

									<Link
										to={
											currentLanguage === "fr"
												? "/packs#pack-startup"
												: "/packs/en#pack-startup"
										}
										href={
											currentLanguage === "fr"
												? "/packs#pack-startup"
												: "/packs/en#pack-startup"
										}
										className="w-full btn-primary mt-4 text-center flex items-center justify-center"
									>
										{t("startup_pack_button")}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div id="solutions" className="py-5 bg-gray-50"></div>
			{/* Complete Solutions Section */}
			<section id="solutions" className="py-24 bg-white">
				<div className="container-ym">
					<motion.div
						className="max-w-4xl mx-auto"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						<h3 className="text-3xl font-bold text-ym-blue mb-12 text-center">
							{t("solutions_title")}
						</h3>

						<div className="grid md:grid-cols-2 gap-12">
							{/* Left column with text */}
							<div className="space-y-6">
								<p className="text-lg text-gray-700 leading-relaxed">
									{t("solutions_description")}
								</p>
								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 rounded-full bg-ym-burgundy/10 flex items-center justify-center flex-shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-ym-burgundy"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<p className="text-gray-600">
											<span className="font-semibold text-ym-blue">
												{t("solutions_all_in_one_title")}
											</span>{" "}
											{t("solutions_all_in_one")}
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 rounded-full bg-ym-burgundy/10 flex items-center justify-center flex-shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-ym-burgundy"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<p className="text-gray-600">
											<span className="font-semibold text-ym-blue">
												{t("solutions_customizable_kits_title")}
											</span>{" "}
											{t("solutions_customizable_kits")}
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="w-6 h-6 rounded-full bg-ym-burgundy/10 flex items-center justify-center flex-shrink-0 mt-1">
											<svg
												className="w-4 h-4 text-ym-burgundy"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<p className="text-gray-600">
											<span className="font-semibold text-ym-blue">
												{t("solutions_hassle_free_title")}
											</span>{" "}
											{t("solutions_hassle_free")}
										</p>
									</div>
								</div>
							</div>

							{/* Right column with image */}
							<div className="relative h-[400px]">
								<motion.div
									className="relative w-full h-full rounded-lg overflow-hidden shadow-xl"
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.3 }}
								>
									<img
										src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
										alt="Event Setup"
										className="w-full h-full object-cover"
									/>
									<div
										className="absolute inset-0 bg-gradient-to-t from-ym-blue/50 to-transparent pointer-events-none"
										style={{ mixBlendMode: "multiply" }}
									/>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section with Stats */}
			<section className="py-24 relative overflow-hidden">
				{/* Background with overlay */}
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000"
						alt="Background Tech Event"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-ym-blue/95 to-ym-blue/90"></div>
				</div>

				{/* Content */}
				<div className="container-ym relative z-10">
					<motion.div
						className="max-w-4xl mx-auto text-center"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						{/* Stats Grid */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
							<motion.div
								className="text-white"
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
							>
								<div className="text-4xl font-bold text-white mb-2">1000+</div>
								<div className="text-sm text-white/80">{t("stats_events")}</div>
							</motion.div>

							<motion.div
								className="text-white"
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
							>
								<div className="text-4xl font-bold text-white mb-2">10K+</div>
								<div className="text-sm text-white/80">
									{t("stats_products")}
								</div>
							</motion.div>

							<motion.div
								className="text-white"
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
							>
								<div className="text-4xl font-bold text-white mb-2">48h</div>
								<div className="text-sm text-white/80">
									{t("stats_delivery")}
								</div>
							</motion.div>

							<motion.div
								className="text-white"
								initial={{ scale: 0.9, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4 }}
							>
								<div className="text-4xl font-bold text-white mb-2">15+</div>
								<div className="text-sm text-white/80">
									{t("stats_experience")}
								</div>
							</motion.div>
						</div>

						{/* CTA Content */}
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							{t("cta_title")}
						</h2>
						<p className="text-xl text-white/90 mb-8">{t("cta_description")}</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<motion.button
								className="btn-secondary bg-white text-ym-blue hover:bg-ym-burgundy hover:text-white"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => {
									const contactSection = document.getElementById("contact");
									contactSection.scrollIntoView({ behavior: "smooth" });
								}}
							>
								{t("cta_button_quote")}
							</motion.button>
							<motion.a
								href="mailto:contact@yminternational.pro"
								className="btn-primary bg-ym-burgundy hover:bg-white hover:text-ym-blue text-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{t("cta_button_expert")}
							</motion.a>
						</div>
					</motion.div>
				</div>

				{/* Decorative Elements */}
				<motion.div
					className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-ym-burgundy/20 blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
				<motion.div
					className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-ym-burgundy/20 blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: "reverse",
						delay: 1,
					}}
				/>
			</section>

			{/* Testimonials & Case Study Section */}
			<section className="py-24 bg-gray-50">
				<div className="container-ym">
					<motion.div
						className="max-w-6xl mx-auto"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						{/* Main Case Study Card */}
						<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
							<div className="grid md:grid-cols-2">
								{/* Image Side */}
								<div className="relative h-64 md:h-auto">
									<img
										src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
										alt="POLIMI Case Study"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-ym-blue/50 to-transparent"></div>
								</div>

								{/* Content Side */}
								<div className="p-8 md:p-12">
									<div className="flex items-center gap-4 mb-6">
										<img
											src="/yminternational/images/polimilogo.png"
											alt="POLIMI Logo"
											className="h-4 w-auto"
										/>
										<div>
											<h3 className="text-xl font-bold text-ym-blue">
												{t("testimonials_title")}
											</h3>
											<p className="text-gray-600">
												{t("testimonials_subtitle")}
											</p>
										</div>
									</div>

									<blockquote className="mb-8">
										<p className="text-lg text-gray-700 italic mb-4">
											{t("testimonials_quote")}
										</p>
										<footer className="text-gray-600">
											<cite className="font-semibold text-ym-blue">
												{t("testimonials_author")}
											</cite>{" "}
											- {t("testimonials_company")}
										</footer>
									</blockquote>

									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
												<svg
													className="w-4 h-4 text-ym-blue"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											<p className="text-gray-600">
												{t("testimonials_features.0")}
											</p>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
												<svg
													className="w-4 h-4 text-ym-blue"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											<p className="text-gray-600">
												{t("testimonials_features.1")}
											</p>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 rounded-full bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
												<svg
													className="w-4 h-4 text-ym-blue"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											<p className="text-gray-600">
												{t("testimonials_features.2")}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Additional Testimonials */}
						<div className="grid md:grid-cols-3 gap-8 mt-12">
							{testimonials_more.map((testimonial, index) => (
								<motion.div
									key={index}
									className="bg-white p-6 rounded-xl shadow-lg"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
								>
									<svg
										className="w-8 h-8 text-ym-burgundy mb-4"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M14.417 6.679C15.447 7.773 16 9.103 16 10.689c0 3.187-2.533 5.217-4.778 6.307-1.024.493-2.132.826-3.272 1.004-.227.036-.439-.144-.439-.376 0-.191.137-.355.322-.397.893-.201 1.736-.48 2.544-.881 1.446-.719 2.427-1.811 2.427-3.716 0-.925-.327-1.641-.967-2.203-.185-.163-.219-.445-.079-.646l.525-.757c.114-.165.327-.231.517-.156zM8.417 6.679C9.447 7.773 10 9.103 10 10.689c0 3.187-2.533 5.217-4.778 6.307-1.024.493-2.132.826-3.272 1.004-.227.036-.439-.144-.439-.376 0-.191.137-.355.322-.397.893-.201 1.736-.48 2.544-.881 1.446-.719 2.427-1.811 2.427-3.716 0-.925-.327-1.641-.967-2.203-.185-.163-.219-.445-.079-.646l.525-.757c.114-.165.327-.231.517-.156z" />
									</svg>
									<p className="text-gray-700 mb-4">{testimonial.quote}</p>
									<div className="text-sm">
										<p className="font-semibold text-ym-blue">
											{testimonial.author}
										</p>
										<p className="text-gray-600">{testimonial.company}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>
			<div id="contact" className="py-5 bg-gray-50"></div>
			{/* Contact Section */}
			<section className="py-24 bg-white">
				<div className="container-ym">
					<motion.div
						className="max-w-6xl mx-auto"
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-ym-blue mb-4">
								{t("contact_title")}
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								{t("contact_description")}
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-12">
							{/* Contact Form */}
							<div className="bg-white rounded-xl shadow-lg p-8 relative">
								<ContactForm />
							</div>

							{/* Contact Info */}
							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{t("contact_info_title")}
									</h3>
									<div className="space-y-4">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-lg bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
												<svg
													className="w-6 h-6 text-ym-blue"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
													/>
												</svg>
											</div>
											<div>
												<h4 className="font-semibold text-gray-900">
													{t("contact_phone_label")}
												</h4>
												<p className="text-gray-600">
													{t("contact_phone_number")}
												</p>
												<p className="text-sm text-gray-500">
													{t("contact_phone_hours")}
												</p>
											</div>
										</div>

										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-lg bg-ym-blue/10 flex items-center justify-center flex-shrink-0">
												<svg
													className="w-6 h-6 text-ym-blue"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
													/>
												</svg>
											</div>
											<div>
												<h4 className="font-semibold text-gray-900">
													{t("contact_email_label")}
												</h4>
												<p className="text-gray-600">
													{t("contact_email_address")}
												</p>
												<p className="text-sm text-gray-500">
													{t("contact_email_response_time")}
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* FAQ Section */}
								<div className="mt-12">
									<h3 className="text-xl font-bold text-ym-blue mb-6">
										{t("faq_title")}
									</h3>
									<div className="space-y-4">
										{[
											{
												question: t("faq_delivery.question"),
												answer: t("faq_delivery.answer"),
											},
											{
												question: t("faq_minimum_order.question"),
												answer: t("faq_minimum_order.answer"),
											},
											{
												question: t("faq_samples.question"),
												answer: t("faq_samples.answer"),
											},
										].map((faq, index) => (
											<motion.div
												key={index}
												className="bg-gray-50 p-4 rounded-lg"
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ delay: index * 0.1 }}
											>
												<h4 className="font-semibold text-gray-900 mb-2">
													{faq.question}
												</h4>
												<p className="text-gray-600">{faq.answer}</p>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-ym-blue text-white py-12">
				<div className="container-ym">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<div>
								<Link
									to="#"
									onClick={(e) => {
										e.preventDefault();
										const heroSection = document.getElementById("hero");
										heroSection.scrollIntoView({ behavior: "smooth" });
									}}
								>
									<img
										src="/yminternational/images/ym-fullWH.svg"
										alt="YourMerchandising Logo"
										className="h-16 w-auto"
									/>
								</Link>
								<div>
									<a
										href="https://upsystems.it/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white/80 hover:text-white transition-colors"
									>
										{t("footer_company")}
									</a>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-semibold mb-4">
								{t("footer_services_title")}
							</h4>
							<ul className="space-y-2 text-white/80">
								<li>
									<Link
										to="/merchandising"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_services.0")}
									</Link>
								</li>
								<li>
									<Link
										to="/personnalisation"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_services.1")}
									</Link>
								</li>
								<li>
									<Link
										to="/ecommerce"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_services.2")}
									</Link>
								</li>
								<li>
									<Link
										to="/solutions"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_services.3")}
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">{t("footer_legal_title")}</h4>
							<ul className="space-y-2 text-white/80">
								<li>
									<Link
										to="/terms"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_legal.0")}
									</Link>
								</li>
								<li>
									<Link
										to="/privacy"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_legal.1")}
									</Link>
								</li>
								<li>
									<Link
										to="/cgv"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_legal.2")}
									</Link>
								</li>
								<li>
									<Link
										to="/cookies"
										onClick={() => window.scrollTo(0, 0)}
										className="hover:text-white transition-colors"
									>
										{t("footer_legal.3")}
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Contact</h4>
							<ul className="space-y-2 text-white/80">
								<li>+33 (0)6 06 68 67 46</li>
								<li>contact@yminternational.pro</li>
								<li>Sophia Antipolis, France</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
						<p>{t("footer_copyright")}</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default TechEventLanding;
