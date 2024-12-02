import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PersonalizationGuide = () => {
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
							L'Art de la Personnalisation
						</motion.h1>
						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							Au-delà du simple logo, une expérience de marque unique
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
								La Personnalisation Moderne
							</h2>
							<p className="text-gray-600">
								La personnalisation moderne va bien au-delà du simple logo
								imprimé. Grâce à nos technologies avancées et notre expertise,
								nous transformons chaque produit en une expérience de marque
								unique et mémorable.
							</p>
						</motion.div>
					</section>

					{/* Techniques Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Nos Techniques de Personnalisation
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Doming - Logo en Relief",
									items: [
										"Création d'une version 3D du logo",
										"Effet brillant et durable",
										"Résistance à la décoloration",
										"Idéal pour surfaces planes",
										"Multiple supports compatibles",
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
												d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
											/>
										</svg>
									),
								},
								{
									title: "Tampographie",
									items: [
										"Transfert d'encre indirect",
										"Adaptable à toutes formes",
										"Logos multicolores",
										"Rapide et économique",
										"Large compatibilité matériaux",
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
												d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
											/>
										</svg>
									),
								},
								{
									title: "Gravure Laser",
									items: [
										"Précision extrême",
										"Effet élégant ton sur ton",
										"Durabilité exceptionnelle",
										"Adapté aux surfaces variées",
										"Idéal pour matériaux nobles",
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
												d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
											/>
										</svg>
									),
								},
							].map((technique, index) => (
								<motion.div
									key={index}
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<div className="w-12 h-12 bg-ym-burgundy/10 rounded-full flex items-center justify-center mb-4 text-ym-burgundy">
										{technique.icon}
									</div>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{technique.title}
									</h3>
									<ul className="space-y-3">
										{technique.items.map((item, i) => (
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

					{/* Technologies Section */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
							Technologies de Personnalisation Innovantes
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Visual Commerce IA",
									description:
										"Personnalisation en temps réel avec visualisation 3D et expériences AR immersives.",
									features: [
										"Personnalisation temps réel",
										"Visualisation 3D avancée",
										"Expériences AR immersives",
										"Virtual try-on",
									],
								},
								{
									title: "Outils Web Avancés",
									description:
										"Suite complète d'outils de personnalisation en ligne pour une expérience utilisateur optimale.",
									features: [
										"Configurateur 3D intégré",
										"Générateur de fichiers",
										"Filtres automatisés",
										"Galeries intégrées",
									],
								},
								{
									title: "AR & 3D Platform",
									description:
										"Plateforme intégrée de réalité augmentée et visualisation 3D.",
									features: [
										"Digital Asset Manager",
										"Visualisation contextuelle",
										"Essayage virtuel IA",
										"Partage instantané",
									],
								},
							].map((tech, index) => (
								<motion.div
									key={index}
									className="bg-gray-50 rounded-xl p-8"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										{tech.title}
									</h3>
									<p className="text-gray-600 mb-4">{tech.description}</p>
									<ul className="space-y-2">
										{tech.features.map((feature, i) => (
											<li key={i} className="flex items-center gap-2">
												<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
												<span className="text-gray-600">{feature}</span>
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</section>

					{/* Quality Control Section */}
					<section className="mb-16">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-bold text-ym-blue text-center mb-8">
								Contrôle Qualité et Standards
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								<motion.div
									className="bg-white rounded-xl shadow-lg p-8"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
								>
									<h3 className="text-xl font-bold text-ym-blue mb-4">
										Nos Engagements Qualité
									</h3>
									<ul className="space-y-3">
										{[
											"Tests systématiques avant production",
											"Vérification tenue des couleurs",
											"Contrôle résistance lavages",
											"Respect normes environnementales",
											"Traçabilité complète",
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
										Garanties de Service
									</h3>
									<ul className="space-y-3">
										{[
											"Satisfaction garantie",
											"Service de retouche",
											"Support technique continu",
											"Conseil personnalisé",
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
								Prêt à Personnaliser Vos Produits ?
							</h2>
							<p className="mb-6">
								Découvrez comment nos solutions de personnalisation peuvent
								transformer vos produits en expériences uniques.
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

export default PersonalizationGuide;
