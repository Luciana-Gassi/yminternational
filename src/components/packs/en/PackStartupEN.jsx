import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PackStartup = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			// Estrai l'ultimo hash
			const hash = window.location.hash.split("#").pop();

			if (hash === "pack-startup") {
				const section = document.getElementById("pack-startup");
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
							<p className="text-lg text-ym-burgundy">10-25 people</p>
						</div>

						<div className="space-y-6">
							<h3 className="text-xl font-bold text-ym-blue">
								Essentials Tech-Event
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
											Basic NFC badges + Customized lanyard
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
										<p className="text-gray-600">5000mAh Power Bank</p>
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
											Eco-friendly notebook + Premium pen
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
											RPET Tote bag + Basic phone stand
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
								Included Services
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Initial consultation (30min)</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Basic customization</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Basic analytics</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Delivery in 14 days</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">Pricing</h3>
							<p className="text-2xl font-bold text-ym-burgundy">
								39€ HT / person
							</p>
							<p className="text-gray-600 mt-2">Volume discounts:</p>
							<ul className="space-y-2 mt-2">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>25+ units: -10%</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>50+ units: -15%</span>
								</li>
							</ul>
						</div>

						<div className="mt-8">
							<button
								onClick={handleContactClick}
								className="btn-primary w-full"
							>
								Request a personalized quote
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PackStartup;
