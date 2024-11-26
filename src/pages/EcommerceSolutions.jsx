import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EcommerceSolutions = () => {
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
							Solutions E-commerce
						</motion.h1>
						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							Une solution complète et personnalisée pour votre merchandising
							d'entreprise
						</motion.p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<div className="py-16">
				<div className="container-ym">
					{/* Modèles Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Deux Modèles Adaptés à Vos Besoins
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<motion.div
								className="bg-white rounded-xl shadow-lg p-8"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-bold text-ym-blue mb-4">
									Boutique Tech Events
								</h3>
								<ul className="space-y-3 mb-6">
									{[
										"Catalogue curé de produits premium",
										"Sélection d'articles tech innovants",
										"Personnalisation avancée",
										"Délais de livraison express",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
											<span className="text-gray-600">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>

							<motion.div
								className="bg-white rounded-xl shadow-lg p-8"
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-bold text-ym-blue mb-4">
									Catalogue Étendu sur{" "}
									<span className="text-ym-burgundy">yourmerchandising.eu</span>
								</h3>
								<ul className="space-y-3 mb-6">
									{[
										"Plus de 10.000 références disponibles",
										"Large gamme de catégories de produits",
										"Options de personnalisation étendues",
										"Flexibilité maximale dans les choix",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
											<span className="text-gray-600">{item}</span>
										</li>
									))}
								</ul>
								<div className="p-6 bg-gradient-to-r from-ym-blue/10 to-ym-burgundy/10 rounded-xl border border-ym-burgundy/20 shadow-sm hover:shadow-md transition-all duration-300">
									<div className="flex items-center justify-between">
										<div className="space-y-2">
											<h4 className="font-semibold text-ym-blue">
												Découvrez Notre Catalogue Complet
											</h4>
											<p className="text-gray-600">
												Plus de 10.000 produits vous attendent sur
											</p>
										</div>
										<a
											href="https://yourmerchandising.eu"
											className="group flex items-center justify-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="font-semibold text-ym-blue group-hover:text-ym-burgundy transition-colors">
												yourmerchandising.eu
											</span>
											<svg
												className="w-5 h-5 text-ym-burgundy transform group-hover:translate-x-1 transition-transform"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</a>
									</div>
								</div>
							</motion.div>
						</div>
					</section>

					{/* Features Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Fonctionnalités E-commerce Avancées
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Gestion de Boutique Intuitive",
									items: [
										"Interface d'administration simple",
										"Gestion des stocks en temps réel",
										"Système de commande automatisé",
										"Tableau de bord personnalisable",
									],
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
												d="M4 6h16M4 10h16M4 14h16M4 18h16"
											/>
										</svg>
									),
								},
								{
									title: "Solutions de Paiement",
									items: [
										"Multi-gateway de paiement",
										"Cartes de crédit et débit",
										"PayPal, Bonifico, PostePay",
										"Transactions sécurisées SSL",
									],
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
												d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
											/>
										</svg>
									),
								},
								{
									title: "Logistique Intégrée",
									items: [
										"Production à la demande",
										"Gestion des stocks optimisée",
										"Livraison express 24/48h",
										"Suivi des commandes en temps réel",
									],
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
												d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
											/>
										</svg>
									),
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<div className="w-12 h-12 bg-ym-burgundy/10 rounded-full flex items-center justify-center mb-4 text-ym-burgundy">
										{feature.icon}
									</div>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{feature.title}
									</h3>
									<ul className="space-y-3">
										{feature.items.map((item, i) => (
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

					{/* Analytics Section */}
					<section className="mb-16">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
								Analytics et Reporting
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								<motion.div
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										Rapports Détaillés
									</h3>
									<ul className="space-y-3">
										{[
											"Ventes par catégorie",
											"Analyse des comportements clients",
											"Performance des produits",
											"ROI par campagne",
										].map((item, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{item}</span>
											</li>
										))}
									</ul>
								</motion.div>

								<motion.div
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										KPIs Essentiels
									</h3>
									<ul className="space-y-3">
										{[
											"Taux de conversion",
											"Panier moyen",
											"Taux de rebond",
											"Engagement client",
										].map((item, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{item}</span>
											</li>
										))}
									</ul>
								</motion.div>
							</div>
						</div>
					</section>

					{/* Support Section */}
					<section className="mb-16">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
								Support Dédié
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								<motion.div
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										Accompagnement Personnalisé
									</h3>
									<ul className="space-y-3">
										{[
											"Store Manager dédié",
											"Support technique 24/7",
											"Formation complète",
											"Mise à jour continue",
										].map((item, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{item}</span>
											</li>
										))}
									</ul>
								</motion.div>

								<motion.div
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										Évolution Continue
									</h3>
									<ul className="space-y-3">
										{[
											"Mises à jour régulières",
											"Nouvelles fonctionnalités",
											"Optimisations performances",
											"Adaptations aux besoins",
										].map((item, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{item}</span>
											</li>
										))}
									</ul>
								</motion.div>
							</div>
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
								Prêt à Lancer Votre E-commerce ?
							</h2>
							<p className="mb-6">
								Contactez-nous pour découvrir comment notre solution e-commerce
								peut transformer votre approche du merchandising.
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

export default EcommerceSolutions;
