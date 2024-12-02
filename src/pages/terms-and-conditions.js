import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function TermsAndConditions() {
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
								onClick={() => window.scrollTo(0, 0)} // Scrolla all'inizio della pagina
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
								Conditions Générales d'Utilisation
							</h1>

							<div className="space-y-8">
								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Objet
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Les présentes Conditions Générales d'Utilisation (ci-après
											"CGU") ont pour objet de définir les modalités et
											conditions dans lesquelles la société YourMerchandising
											(ci-après "la Société") fournit ses services et produits
											aux Clients (ci-après "le Client" ou "les Clients").
										</p>
										<p className="mb-4">
											Les présentes CGU s'appliquent à toute commande passée par
											le Client auprès de la Société, quel que soit le moyen de
											communication utilisé (site internet, téléphone, e-mail,
											etc.).
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Produits et Services
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											La Société propose une large gamme de produits et services
											liés à l'organisation d'événements techniques, notamment :
										</p>
										<ul className="list-disc pl-6 mb-4">
											<li>
												La conception et la fabrication de produits
												promotionnels
											</li>
											<li>
												La gestion logistique et la livraison des commandes
											</li>
											<li>
												L'assistance et le conseil en matière d'organisation
												d'événements
											</li>
											<li>Des solutions de personnalisation et de branding</li>
										</ul>
										<p className="mb-4">
											Le détail des produits et services proposés est disponible
											sur le site internet de la Société ou sur simple demande
											auprès de nos équipes.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Commandes et Paiement
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Toute commande passée auprès de la Société fait l'objet
											d'une confirmation écrite adressée au Client. Le paiement
											de la commande doit être effectué selon les modalités
											indiquées sur la facture.
										</p>
										<p className="mb-4">
											En cas de retard de paiement, des pénalités de retard
											pourront être appliquées conformément à la réglementation
											en vigueur.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Responsabilité et Garantie
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											La Société s'engage à fournir des produits et services
											conformes aux standards de qualité en vigueur. Cependant,
											sa responsabilité ne saurait être engagée en cas de force
											majeure ou d'événement imprévisible et irrésistible.
										</p>
										<p className="mb-4">
											Tout défaut de conformité des produits doit être signalé
											par le Client dans un délai de 7 jours suivant la
											réception de la commande. La Société s'engage à remplacer
											ou rembourser les produits défectueux.
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

export default TermsAndConditions;
