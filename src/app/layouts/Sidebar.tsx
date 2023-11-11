"use client";
import {
	ChevronDown,
	ChevronUp,
	Clapperboard,
	Clock,
	Home,
	Library,
	History,
	PlaySquare,
	Repeat,
	ListVideo,
	Film,
	Flame,
	Gamepad2,
	Lightbulb,
	Music2,
	Newspaper,
	Podcast,
	Radio,
	Shirt,
	ShoppingBag,
	Trophy,
} from "lucide-react";
import Link from "next/link";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonVariants } from "../components/ui/button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/sidebar";
import Image from "next/image";
import { useSideBarContext } from "../contexts/SideBarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export default function Sidebar() {
	const { isLargeOpen, isSmallOpen, close } = useSideBarContext();
	return (
		<>
			<aside
				className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1  ${
					isLargeOpen ? "lg:hidden" : "lg:flex"
				} "`}
			>
				<SmallSideBarItem Icon={Home} title="Início" url="/" />
				<SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
				<SmallSideBarItem
					Icon={Clapperboard}
					title="Inscrições"
					url="/subscriptions"
				/>
				<SmallSideBarItem
					Icon={Library}
					title="Biblioteca"
					url="/library"
				/>
			</aside>
			{isSmallOpen && (
				<div
					onClick={close}
					className="lg:hidden fixed inset-0 z-[999] bg-secondary opacity-50"
				/>
			)}
			<aside
				className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
					isLargeOpen ? "lg:flex" : "lg:hidden"
				}
					${isSmallOpen ? "flex z-[999] bg-background max-h-screen" : "hidden"}
				`}
			>
				<div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-background">
					<PageHeaderFirstSection />
				</div>
				<LargeSideBarSection>
					<LargeSideBarItem
						isActive
						IconOrImgUrl={Home}
						title="Início"
						url="/"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Clapperboard}
						title="Inscrições"
						url="/subscriptions"
					/>
				</LargeSideBarSection>
				<hr />
				<LargeSideBarSection visibleItemCount={5}>
					<LargeSideBarItem
						IconOrImgUrl={Library}
						title="Biblioteca"
						url="/library"
					/>
					<LargeSideBarItem
						IconOrImgUrl={History}
						title="Histórico"
						url="/history"
					/>
					<LargeSideBarItem
						IconOrImgUrl={PlaySquare}
						title="Seus ídeos"
						url="/your-videos"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Clock}
						title="Assistir mais arde"
						url="/playlist?list=WL"
					/>
					{playlists.map((playlist) => (
						<LargeSideBarItem
							key={playlist.id}
							IconOrImgUrl={ListVideo}
							title={playlist.name}
							url={`/playlist?list=${playlist.id}`}
						/>
					))}
				</LargeSideBarSection>
				<hr />
				<LargeSideBarSection title="Subscriptions">
					{subscriptions.map((subscription) => (
						<LargeSideBarItem
							key={subscription.id}
							IconOrImgUrl={subscription.imgUrl}
							title={subscription.channelName}
							url={`/@${subscription.id}/`}
						/>
					))}
				</LargeSideBarSection>
				<hr />
				<LargeSideBarSection title="Explore">
					<LargeSideBarItem
						IconOrImgUrl={Flame}
						title="Em alta"
						url="/trending"
					/>
					<LargeSideBarItem
						IconOrImgUrl={ShoppingBag}
						title="Shopping"
						url="/shopping"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Music2}
						title="Música"
						url="/music"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Film}
						title="Filmes"
						url="/movies-tv"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Radio}
						title="Ao vivo"
						url="/live"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Gamepad2}
						title="Jogos"
						url="/gaming"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Newspaper}
						title="Notícias"
						url="/news"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Trophy}
						title="Esportes"
						url="/sports"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Lightbulb}
						title="Aprender"
						url="/learning"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Podcast}
						title="Podcasts"
						url="/podcasts"
					/>
				</LargeSideBarSection>
			</aside>
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
type LargeSideBarSectionProps = {
	children: ReactNode;
	title?: string;
	visibleItemCount?: number;
};
function LargeSideBarSection({
	children,
	title,
	visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const childrenArray = Children.toArray(children).flat();
	const showExpandButton = childrenArray.length > visibleItemCount;
	const visibleChildren = isExpanded
		? childrenArray
		: childrenArray.slice(0, visibleItemCount);
	const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
	return (
		<div>
			{title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
			{visibleChildren}
			{showExpandButton && (
				<Button
					onClick={() => setIsExpanded((e) => !e)}
					className="w-full flex items-center rounded-lg gap-4 p-3 "
					variant={"ghost"}
				>
					<ButtonIcon className="h-6 w-6" />
					<div>{isExpanded ? "Show Less" : "Show More"}</div>
				</Button>
			)}
		</div>
	);
}

type LargeSideBarItemProps = {
	isActive?: boolean;
	IconOrImgUrl: ElementType | string;
	title: string;
	url: string;
};

function LargeSideBarItem({
	isActive = false,
	IconOrImgUrl,
	title,
	url,
}: LargeSideBarItemProps) {
	return (
		<Link
			href={url}
			className={twMerge(
				buttonVariants({ variant: "ghost" }),
				`w-full flex items-center rounded-lg gap-5 p-4 py-5 font-light ${
					isActive
						? "font-bold bg-secondary/70 hover:bg-secondary  "
						: undefined
				}`
			)}
		>
			{typeof IconOrImgUrl === "string" ? (
				<Image
					src={IconOrImgUrl}
					alt=""
					width={176}
					height={176}
					className="w-6 h-6 rounded-full"
				/>
			) : (
				<IconOrImgUrl className="w-6 h-6" />
			)}
			<div className="whitespace-nowrap overflow-hidden text-ellipsis">
				{title}
			</div>
		</Link>
	);
}
