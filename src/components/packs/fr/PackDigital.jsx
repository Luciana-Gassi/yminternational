import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PackDigital = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			// Estrai l'ultimo hash
			const hash = window.location.hash.split("#").pop();

			if (hash === "pack-digital") {
				const section = document.getElementById("pack-digital");
				if (section) {
					section.scrollIntoView({ behavior: "smooth" });
				}
			}
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []);
	const handleContactClick = () => {
		navigate("/#contact");
		setTimeout(() => {
			document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
		}, 100);
	};
	return (
		<section id="pack-digital" className="py-16 scroll-mt-24">
			<div className="bg-white rounded-xl shadow-lg p-8">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Colonna sinistra */}
					<div>
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-ym-blue mb-4">
								Pack Digital Plus
							</h2>
							<p className="text-xl text-gray-600">7,990€ HT</p>
							<p className="text-lg text-ym-burgundy">100+ personnes</p>
							<div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-ym-burgundy/10 text-ym-burgundy text-sm">
								Pack Premium inclus
							</div>
						</div>

						<div className="space-y-6">
							<h3 className="text-xl font-bold text-ym-blue">
								Digital Enhanced Products
							</h3>
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
									<div>
										<p className="text-gray-600">
											Cartes de visite NFC personnalisées
										</p>
									</div>
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
									<div>
										<p className="text-gray-600">Badges AR/VR ready</p>
									</div>
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
									<div>
										<p className="text-gray-600">
											Carnet avec contenus digitaux exclusifs
										</p>
									</div>
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
									<div>
										<p className="text-gray-600">
											Stylets intelligents synchronisés
										</p>
									</div>
								</div>
							</div>

							<h3 className="text-xl font-bold text-ym-blue mt-6">
								Tech Premium
							</h3>
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
									<div>
										<p className="text-gray-600">
											Casques bluetooth premium avec ANC
										</p>
									</div>
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
									<div>
										<p className="text-gray-600">
											PowerBanks solaires haute capacité
										</p>
									</div>
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
									<div>
										<p className="text-gray-600">
											Supports laptop ajustables avec refroidissement
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Colonna destra */}
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Digital Solutions
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Page événement personnalisée</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Système de réservation intégré</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>QR codes dynamiques avec analytics</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Dashboard analytics avancé</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Intégration CRM</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Services Premium
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Support marketing digital</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Analytics avancés & ROI</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Marketplace dédiée permanente</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Support prioritaire</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Restockage express</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Prix indicatif
							</h3>
							<p className="text-2xl font-bold text-ym-burgundy">
								89€ HT / personne
							</p>
							<p className="text-gray-600 mt-2">
								Solutions sur mesure disponibles
							</p>
						</div>

						<div className="mt-8">
							<button
								onClick={handleContactClick}
								className="btn-secondary w-full"
							>
								Demander un devis personnalisé
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PackDigital;
