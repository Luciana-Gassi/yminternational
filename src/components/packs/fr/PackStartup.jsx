import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PackStartup = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.hash === "#pack-startup") {
			document.getElementById("pack-startup").scrollIntoView();
		}
	}, []);

	const handleContactClick = () => {
		navigate("/#contact");
		setTimeout(() => {
			document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
		}, 100);
	};
	return (
		<section id="pack-startup" className="py-16 scroll-mt-24">
			<div className="bg-white rounded-xl shadow-lg p-8">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Colonna sinistra - Info principali */}
					<div>
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-ym-blue mb-4">
								Pack Startup
							</h2>
							<p className="text-xl text-gray-600">990€ HT</p>
							<p className="text-lg text-ym-burgundy">10-25 personnes</p>
						</div>

						<div className="space-y-6">
							<h3 className="text-xl font-bold text-ym-blue">
								Essentiels Tech-Event
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
											Badges NFC basiques + Lanyard personnalisé
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
										<p className="text-gray-600">PowerBank 5000mAh</p>
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
											Cahier éco-responsable + Stylo premium
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
											Tote bag RPET + Support smartphone basic
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Colonna destra - Caratteristiche e Servizi */}
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Services Inclus
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Consultation initiale (30min)</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Personnalisation basique</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Analytics de base</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Livraison J-14</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">
								Prix indicatif
							</h3>
							<p className="text-2xl font-bold text-ym-burgundy">
								39€ HT / personne
							</p>
							<p className="text-gray-600 mt-2">Prix dégressifs à partir de:</p>
							<ul className="space-y-2 mt-2">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>25 unités : -10%</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>50 unités : -15%</span>
								</li>
							</ul>
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

export default PackStartup;
