import PackEssentialEN from "../components/packs/en/PackEssentialEN";
import PackPremiumEN from "../components/packs/en/PackPremiumEN";
import PackDigitalEN from "../components/packs/en/PackDigitalEN";
import PackStartupEN from "../components/packs/en/PackStartupEN";
import { Link } from "react-router-dom";

export default function PackDetailsPageEN() {
	return (
		<div className="min-h-screen bg-white">
			<header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
				<div className="container-ym py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link to="/" onClick={() => window.scrollTo(0, 0)}>
								<img
									src="images/logo-fullBluRed-rembg.svg"
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
					<PackEssentialEN />
					<PackPremiumEN />
					<PackDigitalEN />
					<PackStartupEN />
				</div>
			</div>
		</div>
	);
}
