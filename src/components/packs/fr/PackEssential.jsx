import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PackEssential = () => {
	const navigate = useNavigate();

		useEffect(() => {
			const timeoutId = setTimeout(() => {
				// Estrai l'ultimo hash
				const hash = window.location.hash.split("#").pop();

				if (hash === "pack-essential") {
					const section = document.getElementById("pack-essential");
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
		<section id="pack-essential" className="py-16 scroll-mt-24">
			<div className="bg-white rounded-xl shadow-lg p-8">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Colonna sinistra */}
					<div>
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-ym-blue mb-4">
								Pack Essential
							</h2>
							<p className="text-xl text-gray-600">2,490€ HT</p>
							<p className="text-lg text-ym-burgundy">25-50 personnes</p>
						</div>

						<div className="space-y-6">
							<h3 className="text-xl font-bold text-ym-blue">
								Kit Identification
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
											Badge NFC LinkedIn + Lanyard premium
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
										<p className="text-gray-600">Porte-badge métallisé</p>
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
										<p className="text-gray-600">Tote bag RPET premium</p>
									</div>
								</div>
							</div>

							<h3 className="text-xl font-bold text-ym-blue mt-6">
								Tech Essentials
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
											PowerBank 10000mAh eco-design
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
											Hub USB 4 ports + Support smartphone/tablette pliable
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
										<p className="text-gray-600">Clé USB écologique</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Colonna destra */}
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Pack Travail
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Notebook smart avec stylet</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Kit souris + tapis ergonomique</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Bouteille isotherme LED</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Services Inclus
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Consultation stratégique (1h)</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Design personnalisé avancé</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Support technique événementiel</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Analytics temps réel</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Livraison J-21</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Prix indicatif
							</h3>
							<p className="text-2xl font-bold text-ym-burgundy">
								49€ HT / personne
							</p>
							<p className="text-gray-600 mt-2">Prix dégressifs disponibles</p>
						</div>

						<div className="mt-8">
							<button
								onClick={handleContactClick}
								className="btn-primary w-full"
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

export default PackEssential;
