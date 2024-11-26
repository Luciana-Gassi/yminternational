// cgv.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CGV() {
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

			{/* Content */}
			<div className="pt-24 py-12">
				<div className="container-ym">
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-8 md:p-12">
							<h1 className="text-3xl md:text-4xl font-bold text-ym-blue mb-8">
								Conditions Générales de Vente
							</h1>

							<div className="space-y-8">
								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 1 : Champ d'Application
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Les présentes Conditions Générales de Vente (CGV)
											constituent le socle unique de la relation commerciale
											entre YourMerchandising et ses clients. Elles s'appliquent
											sans restriction ni réserve à tous les produits et
											services proposés par YourMerchandising.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 2 : Commandes
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Les commandes peuvent être passées via notre site
											internet, par email ou par téléphone. Toute commande
											implique l'acceptation des présentes CGV. La confirmation
											de commande est envoyée par email et constitue un
											engagement ferme.
										</p>
										<p className="mb-4">
											YourMerchandising se réserve le droit de refuser toute
											commande pour des motifs légitimes.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 3 : Prix
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Les prix sont indiqués en euros hors taxes (HT). La TVA
											applicable sera ajoutée au taux en vigueur au jour de la
											commande. Les frais de livraison sont facturés en
											supplément, selon le tarif en vigueur.
										</p>
										<p className="mb-4">
											YourMerchandising se réserve le droit de modifier ses prix
											à tout moment, les produits étant facturés au prix en
											vigueur lors de l'enregistrement de la commande.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 4 : Paiement
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Le paiement doit être effectué selon les modalités
											suivantes :
										</p>
										<ul className="list-disc pl-6 mb-4">
											<li>Carte bancaire</li>
											<li>Virement bancaire</li>
											<li>PayPal</li>
										</ul>
										<p className="mb-4">
											En cas de retard de paiement, des pénalités seront
											appliquées au taux annuel de 15%.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 5 : Livraison
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Les délais de livraison sont donnés à titre indicatif.
											YourMerchandising s'engage à livrer les produits dans un
											délai maximum de 30 jours après la confirmation de
											commande.
										</p>
										<p className="mb-4">
											En cas de retard de livraison de plus de 7 jours, le
											client pourra annuler sa commande par lettre recommandée
											avec accusé de réception.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 6 : Garanties
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Tous nos produits bénéficient de la garantie légale de
											conformité et de la garantie contre les vices cachés.
											Toute réclamation doit être effectuée dans un délai de 14
											jours après la réception des produits.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 7 : Force Majeure
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											YourMerchandising ne pourra être tenue responsable de
											l'inexécution de ses obligations en cas de force majeure,
											notamment : catastrophes naturelles, grèves, incendies,
											inondations, épidémies.
										</p>
									</div>
								</div>

								<div>
									<h2 className="text-2xl font-bold text-ym-blue mb-4">
										Article 8 : Droit Applicable
									</h2>
									<div className="text-gray-700">
										<p className="mb-4">
											Les présentes CGV sont soumises au droit français. Tout
											litige relatif à leur interprétation ou leur exécution
											relève de la compétence exclusive des tribunaux de Paris.
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

export default CGV;
