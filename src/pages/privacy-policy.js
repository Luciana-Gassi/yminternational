// privacy-policy.js

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
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
									src="/yminternational/images/ym-fullBR.svg"
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
								Politique de Confidentialité
							</h1>

							<div className="space-y-8">
								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Introduction
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											YourMerchandising s'engage à protéger la vie privée des
											utilisateurs de son site web et de ses services. Cette
											politique de confidentialité explique comment nous
											collectons, utilisons et protégeons vos données
											personnelles.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Collecte des Données
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Nous collectons les informations suivantes :
										</p>
										<ul className="list-disc pl-6 mb-4">
											<li>Nom et prénom</li>
											<li>Adresse email professionnelle</li>
											<li>Numéro de téléphone</li>
											<li>Adresse de livraison</li>
											<li>
												Informations de paiement (traitées de manière sécurisée)
											</li>
										</ul>
										<p className="mb-4">
											Ces informations sont nécessaires pour traiter vos
											commandes et vous fournir nos services.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Utilisation des Données
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Vos données personnelles sont utilisées pour :
										</p>
										<ul className="list-disc pl-6 mb-4">
											<li>Traiter et livrer vos commandes</li>
											<li>
												Vous contacter concernant votre compte ou vos commandes
											</li>
											<li>Améliorer nos produits et services</li>
											<li>
												Vous envoyer des informations marketing (avec votre
												consentement)
											</li>
										</ul>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Protection des Données
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Nous mettons en œuvre des mesures de sécurité appropriées
											pour protéger vos données personnelles contre tout accès,
											modification, divulgation ou destruction non autorisés.
										</p>
										<p className="mb-4">
											Vos données sont stockées sur des serveurs sécurisés et ne
											sont accessibles qu'aux employés qui en ont besoin pour
											leur travail.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Vos Droits
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Conformément au RGPD, vous disposez des droits suivants :
										</p>
										<ul className="list-disc pl-6 mb-4">
											<li>Droit d'accès à vos données personnelles</li>
											<li>Droit de rectification de vos données</li>
											<li>Droit à l'effacement de vos données</li>
											<li>Droit à la portabilité de vos données</li>
											<li>Droit d'opposition au traitement de vos données</li>
										</ul>
										<p className="mb-4">
											Pour exercer ces droits, contactez-nous à l'adresse :
											privacy@yourmerchandising.com
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Cookies
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Notre site utilise des cookies pour améliorer votre
											expérience de navigation. Vous pouvez contrôler
											l'utilisation des cookies via les paramètres de votre
											navigateur.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Modifications
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Nous nous réservons le droit de modifier cette politique
											de confidentialité à tout moment. Les modifications
											entrent en vigueur dès leur publication sur notre site.
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

export default PrivacyPolicy;
