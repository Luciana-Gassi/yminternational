import PackEssential from "../components/packs/fr/PackEssential";
import PackPremium from "../components/packs/fr/PackPremium";
import PackDigital from "../components/packs/fr/PackDigital";
import PackStartup from "../components/packs/fr/PackStartup";
import { Link } from "react-router-dom";

export default function PackDetailsPageFR() {
	return (
		<div className="min-h-screen bg-white">
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

			<div className="pt-24">
				<div className="container-ym">
					<PackEssential />
					<PackPremium />
					<PackDigital />
					<PackStartup />
				</div>
			</div>
		</div>
	);
}
