import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logo.png";
import { Menu } from "lucide-react";
export default function PageHeader() {
	return (
		<div className="flex gap-10 lg:gap-20 justify-between ">
			<div className="flex gap-4 items-center flex-shrink-0">
				<button>
					<Menu />
				</button>
				<Link href={"/"}>
					<Image
						src={logo}
						alt={"Youtube logo"}
						className="h-6 w-auto"
						priority
					/>
				</Link>
			</div>
		</div>
	);
}
