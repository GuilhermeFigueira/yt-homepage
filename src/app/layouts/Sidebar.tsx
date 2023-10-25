import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import Link from "next/link";
import { ElementType } from "react";
import { buttonVariants } from "../components/ui/button";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
	return (
		<>
			<aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
				<SmallSideBarItem Icon={Home} title="Home" url="/" />
				<SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
				<SmallSideBarItem
					Icon={Clapperboard}
					title="Subscriptions"
					url="/subscriptions"
				/>
				<SmallSideBarItem
					Icon={Library}
					title="Library"
					url="/library"
				/>
			</aside>
			<aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex"></aside>
		</>
	);
}
type SmallSideBarItemProps = {
	Icon: ElementType;
	title: string;
	url: string;
};
function SmallSideBarItem({ Icon, title, url }: SmallSideBarItemProps) {
	return (
		<Link
			href={url}
			className={twMerge(
				buttonVariants({ variant: "ghost" }),
				"py-4 px-1 flex flex-col items-center rounded-lg gap-1 h-auto"
			)}
		>
			<Icon className="w-6 h-6" />
			<div className="text-sm">{title}</div>
		</Link>
	);
}
