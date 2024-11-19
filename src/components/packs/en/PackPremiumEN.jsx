import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PackPremium = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			// Estrai l'ultimo hash
			const hash = window.location.hash.split("#").pop();

			if (hash === "pack-premium") {
				const section = document.getElementById("pack-premium");
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
		<section id="pack-premium" className="py-16 scroll-mt-24">
			<div className="bg-white rounded-xl shadow-lg p-8">
				<div className="grid md:grid-cols-2 gap-12">
					{/* Colonna sinistra */}
					<div>
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-ym-blue mb-4">
								Pack Premium
							</h2>
							<p className="text-xl text-gray-600">4,990€ HT</p>
							<p className="text-lg text-ym-burgundy">50-100 people</p>
							<div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-ym-burgundy/10 text-ym-burgundy text-sm">
								Includes Pack Essential
							</div>
						</div>

						<div className="space-y-6">
							<h3 className="text-xl font-bold text-ym-blue">Tech Premium</h3>
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
											Multifunction "Blasty" wireless charger
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
											Customized Bluetooth tracker
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
											Wireless charging desk organizer
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
											Wireless headphones with custom case
										</p>
									</div>
								</div>
							</div>

							<h3 className="text-xl font-bold text-ym-blue mt-6">
								Staff & VIP
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
											Tech QR code t-shirts + Premium caps
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
										<p className="text-gray-600">Blue light blocking glasses</p>
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
											Connected synchronized notebook
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
								Premium Services
							</h3>
							<ul className="space-y-3">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Strategic consultation (2h)</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Advanced custom design</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Dedicated temporary marketplace</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Dedicated event support</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Advanced real-time analytics</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-ym-blue mb-4">Pricing</h3>
							<p className="text-2xl font-bold text-ym-burgundy">
								69€ HT / person
							</p>
							<p className="text-gray-600 mt-2">
								Special volume pricing available
							</p>
						</div>

						<div className="p-4 bg-ym-burgundy/5 rounded-lg">
							<h4 className="font-bold text-ym-blue mb-2">
								Additional Options
							</h4>
							<ul className="space-y-2">
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Advanced product customization</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="w-1.5 h-1.5 bg-ym-burgundy rounded-full"></span>
									<span>Post-event marketplace extension</span>
								</li>
							</ul>
						</div>

						<div className="mt-8">
							<button
								onClick={handleContactClick}
								className="btn-secondary w-full"
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

export default PackPremium;
