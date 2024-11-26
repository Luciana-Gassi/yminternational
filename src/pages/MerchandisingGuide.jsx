import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MerchandisingGuide = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
				<div className="container-ym py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link to="/" onClick={() => window.scrollTo(0, 0)}>
								<img
									src="images/ym-fullBR.svg"
									alt="YourMerchandising Logo"
									className="h-auto w-24"
								/>
							</Link>
						</div>
						<nav className="hidden md:flex items-center space-x-8">
							<Link
								to="/"
								onClick={() => window.scrollTo(0, 0)}
								className="text-ym-blue hover:text-ym-burgundy transition-colors"
							>
								Retour
							</Link>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-32 pb-16 bg-gradient-to-b from-ym-blue to-ym-blue/90">
				<div className="container-ym">
					<div className="max-w-4xl mx-auto text-center text-white">
						<motion.h1
							className="text-4xl md:text-5xl font-bold mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Guide Complet du Merchandising Événementiel
						</motion.h1>
						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							Transformez chaque interaction en une expérience mémorable
						</motion.p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<div className="py-16">
				<div className="container-ym">
					{/* Introduction */}
					<section className="max-w-4xl mx-auto mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-xl shadow-lg p-8"
						>
							<h2 className="text-2xl font-bold text-ym-blue mb-4">
								Maximiser l'Impact de Vos Événements
							</h2>
							<p className="text-gray-600">
								Chaque événement professionnel représente une opportunité unique
								de renforcer votre marque et de créer des connexions durables.
								Le merchandising événementiel va bien au-delà des simples
								goodies : c'est un outil stratégique qui transforme chaque
								interaction en une expérience mémorable.
							</p>
						</motion.div>
					</section>

					{/* Types d'Événements Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Solutions Sur Mesure par Type d'Événement
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Salons Professionnels",
									items: [
										"Kits d'accueil personnalisés",
										"Badges NFC connectés",
										"Goodies tech innovants",
										"Collection textile coordonnée",
									],
									tip: "Privilégiez des produits qui créent une interaction directe",
								},
								{
									title: "Conférences et Séminaires",
									items: [
										"Welcome packs participants",
										"Matériel connecté",
										"Accessoires tech",
										"Supports de communication",
									],
									tip: "Facilitez la participation active",
								},
								{
									title: "Lancements de Produits",
									items: [
										"Packaging expérientiel",
										"Éditions limitées",
										"Kits presse innovants",
										"Goodies connectés",
									],
									tip: "Prolongez l'expérience du lancement",
								},
							].map((event, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{event.title}
									</h3>
									<ul className="space-y-3 mb-4">
										{event.items.map((item, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{item}</span>
											</li>
										))}
									</ul>
									<p className="text-sm text-ym-burgundy font-semibold">
										Conseil : {event.tip}
									</p>
								</motion.div>
							))}
						</div>
					</section>

					{/* Process Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Notre Processus d'Accompagnement
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Analyse et Stratégie",
									items: [
										"Étude approfondie de vos objectifs",
										"Analyse du public cible",
										"Définition des KPIs",
										"Stratégie merchandising",
									],
								},
								{
									title: "Conception Créative",
									items: [
										"Design sur-mesure",
										"Sélection des matériaux",
										"Prototypage et validation",
										"Optimisation production",
									],
								},
								{
									title: "Production et Logistique",
									items: [
										"Fabrication haute qualité",
										"Contrôle qualité continu",
										"Gestion stocks temps réel",
										"Livraison coordonnée",
									],
								},
							].map((step, index) => (
								<motion.div
									key={index}
									className="bg-gray-50 rounded-xl p-8"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<div className="w-12 h-12 bg-ym-burgundy/10 rounded-full flex items-center justify-center mb-4">
										<span className="text-ym-burgundy font-bold">
											{index + 1}
										</span>
									</div>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{step.title}
									</h3>
									<ul className="space-y-3">
										{step.items.map((item, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{item}</span>
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</section>

					{/* Innovation Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Innovations et Tendances
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Personnalisation Dynamique",
									description:
										"Personnalisez vos produits en temps réel pendant l'événement pour une expérience interactive unique.",
									icon: (
										<svg
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											/>
										</svg>
									),
								},
								{
									title: "Réalité Augmentée",
									description:
										"Intégrez des expériences AR dans vos goodies pour prolonger l'engagement au-delà de l'événement.",
									icon: (
										<svg
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									),
								},
								{
									title: "Merchandising Connecté",
									description:
										"Créez des produits interactifs qui se connectent à votre application événementielle.",
									icon: (
										<svg
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									),
								},
							].map((innovation, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<div className="w-12 h-12 bg-ym-burgundy/10 rounded-full flex items-center justify-center mb-4 text-ym-burgundy">
										{innovation.icon}
									</div>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{innovation.title}
									</h3>
									<p className="text-gray-600">{innovation.description}</p>
								</motion.div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="max-w-4xl mx-auto">
						<motion.div
							className="bg-ym-blue rounded-xl p-8 text-center text-white"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-2xl font-bold mb-4">
								Prêt à Transformer Votre Prochain Événement ?
							</h2>
							<p className="mb-6">
								Contactez-nous pour découvrir comment nous pouvons vous aider à
								créer une expérience mémorable.
							</p>
							<Link
								to="/#contact"
								onClick={() => {
									setTimeout(() => {
										document
											.getElementById("contact")
											.scrollIntoView({ behavior: "smooth" });
									}, 100);
								}}
								className="inline-block bg-white text-ym-blue px-8 py-3 rounded-full font-semibold hover:bg-ym-burgundy hover:text-white transition-colors"
							>
								Contactez-nous
							</Link>
						</motion.div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default MerchandisingGuide;
