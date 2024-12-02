// cookies.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Cookies() {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
				<div className="container-ym py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link to="/" onClick={() => window.scrollTo(0, 0)}>
								<img
									src="images/logo-fullBluRed-rembg.png"
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

			{/* Content */}
			<div className="pt-24 py-12">
				<div className="container-ym">
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-8 md:p-12">
							<h1 className="text-3xl md:text-4xl font-bold text-ym-blue mb-8">
								Politique des Cookies
							</h1>

							<div className="space-y-8">
								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Qu'est-ce qu'un Cookie ?
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Un cookie est un petit fichier texte stocké sur votre
											ordinateur ou appareil mobile lorsque vous visitez un site
											web. Les cookies nous permettent de reconnaître votre
											appareil et d'améliorer votre expérience de navigation.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Types de Cookies Utilisés
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Nous utilisons différents types de cookies :
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2">
											<li>
												<span className="font-semibold">
													Cookies essentiels :
												</span>{" "}
												Nécessaires au fonctionnement du site et à la
												sécurisation de votre connexion
											</li>
											<li>
												<span className="font-semibold">
													Cookies de performance :
												</span>{" "}
												Pour analyser comment vous utilisez notre site et
												améliorer ses performances
											</li>
											<li>
												<span className="font-semibold">
													Cookies fonctionnels :
												</span>{" "}
												Pour mémoriser vos préférences et personnaliser votre
												expérience
											</li>
											<li>
												<span className="font-semibold">
													Cookies publicitaires :
												</span>{" "}
												Pour vous proposer des publicités pertinentes et mesurer
												leur efficacité
											</li>
										</ul>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Comment Gérer les Cookies ?
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Vous pouvez contrôler et/ou supprimer des cookies comme
											vous le souhaitez. Vous pouvez :
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2">
											<li>
												Modifier les paramètres de votre navigateur pour
												accepter ou refuser les cookies
											</li>
											<li>
												Supprimer tous les cookies déjà stockés sur votre
												appareil
											</li>
											<li>
												Configurer votre navigateur pour être alerté avant
												l'installation d'un cookie
											</li>
										</ul>
										<p className="mb-4">
											Notez que le blocage de certains cookies peut affecter
											votre expérience sur notre site.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Cookies Tiers
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Nous utilisons également des cookies tiers pour :
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2">
											<li>L'analyse du trafic (Google Analytics)</li>
											<li>
												Les fonctionnalités de réseaux sociaux (partage, likes)
											</li>
											<li>Le suivi des conversions publicitaires</li>
										</ul>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Durée de Conservation
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											La durée de conservation des cookies varie selon leur type
											:
										</p>
										<ul className="list-disc pl-6 mb-4 space-y-2">
											<li>
												Cookies de session : supprimés à la fermeture du
												navigateur
											</li>
											<li>
												Cookies persistants : jusqu'à 13 mois après leur
												installation
											</li>
										</ul>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Vos Droits
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Conformément à la réglementation en vigueur, vous disposez
											d'un droit d'accès, de rectification et de suppression des
											données collectées via les cookies. Pour exercer ces
											droits, contactez-nous à : contact@yminternational.pro
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Mises à Jour
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Nous nous réservons le droit de modifier cette politique
											des cookies à tout moment. Les modifications prennent
											effet dès leur publication sur notre site.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cookies;
