import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DigitalSolutions = () => {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
				<div className="container-ym py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link to="/" onClick={() => window.scrollTo(0, 0)}>
								<img
									src="images/logo-fullBluRed-rembg.svg"
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
							Solutions Digitales
						</motion.h1>
						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							L'Innovation au Service de Votre Marque
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
							className="bg-white rounded-xl shadow-lg p-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<p className="text-gray-600 text-lg leading-relaxed">
								Nos solutions digitales transforment l'expérience du
								merchandising traditionnel en une expérience interactive et
								mesurable, permettant une personnalisation avancée et une
								gestion optimisée de vos campagnes.
							</p>
						</motion.div>
					</section>

					{/* Visual Commerce Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Visual Commerce Avancé
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Configurateur 3D en Temps Réel",
									items: [
										"Visualisation immédiate des personnalisations",
										"Rotation 360° des produits",
										"Zoom haute définition sur les détails",
										"Export des designs en temps réel",
										"Compatible tous appareils",
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
												d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
											/>
										</svg>
									),
								},
								{
									title: "Réalité Augmentée (AR)",
									items: [
										"Essayage virtuel instantané",
										"Aucune application requise",
										"Visualisation en taille réelle",
										"Partage direct sur réseaux sociaux",
										"Compatibilité cross-platform",
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
												d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									),
								},
								{
									title: "Intelligence Artificielle",
									items: [
										"Personnalisation automatisée",
										"Recommandations intelligentes",
										"Optimisation des visuels",
										"Analyse prédictive des tendances",
										"Apprentissage continu",
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
												d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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

					{/* Platform Features Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Plateforme E-commerce Intégrée
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<motion.div
								className="bg-white rounded-xl shadow-lg p-8"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-bold text-ym-blue mb-4">
									Fonctionnalités Avancées
								</h3>
								<ul className="space-y-3">
									{[
										"Dashboard intuitif pour gestion complète",
										"Analytics en temps réel",
										"Gestion multi-store centralisée",
										"Intégration e-commerce native",
										"Interface personnalisable",
										"Gateway de paiement sécurisé",
										"Système de facturation automatique",
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
									Analytics & Business Intelligence
								</h3>
								<ul className="space-y-3">
									{[
										"Monitoring des ventes en temps réel",
										"Analyse granulaire des données",
										"Tableaux de bord personnalisables",
										"Rapports automatisés",
										"KPIs personnalisés",
										"Visualisation des données avancée",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
											<span className="text-gray-600">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
						</div>
					</section>

					{/* Security Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Sécurité et Performance
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<motion.div
								className="bg-white rounded-xl shadow-lg p-8"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-bold text-ym-blue mb-4">
									Standards de Sécurité
								</h3>
								<ul className="space-y-3">
									{[
										"Certificat SSL avancé",
										"Authentification à deux facteurs",
										"Protection DDoS et WAF",
										"Scans anti-malware automatiques",
										"Backup automatique des données",
										"Conformité RGPD",
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
									Architecture Performante
								</h3>
								<ul className="space-y-3">
									{[
										"Hosting haute performance",
										"CDN global (28 data centers)",
										"Scalabilité automatique",
										"Optimisation des images",
										"Cache intelligent",
										"Monitoring 24/7",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
											<span className="text-gray-600">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
						</div>
					</section>

					{/* Integration Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Support et Intégration
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							<motion.div
								className="bg-white rounded-xl shadow-lg p-8"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-bold text-ym-blue mb-4">
									Capacités d'Intégration
								</h3>
								<ul className="space-y-3">
									{[
										"API REST complète",
										"Documentation détaillée",
										"Webhooks personnalisables",
										"Compatibilité CRM et ERP",
										"Intégration marketing automation",
										"Support développeur dédié",
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
									Accompagnement Dédié
								</h3>
								<ul className="space-y-3">
									{[
										"Formation complète plateforme",
										"Support technique 24/7",
										"Consulting personnalisé",
										"Suivi régulier",
										"Maintenance préventive",
										"Recommandations d'optimisation",
									].map((item, i) => (
										<li key={i} className="flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
											<span className="text-gray-600">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
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
								Prêt à Digitaliser Votre Approche ?
							</h2>
							<p className="mb-6">
								Découvrez comment nos solutions digitales peuvent transformer
								votre expérience merchandising.
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

export default DigitalSolutions;
