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
} from "lucide-react";
import Link from "next/link";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonVariants } from "../components/ui/button";
import { twMerge } from "tailwind-merge";
import { playlists, subscriptions } from "../data/sidebar";
import Image from "next/image";

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
			<aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
				<LargeSideBarSection>
					<LargeSideBarItem
						isActive
						IconOrImgUrl={Home}
						title="Home"
						url="/"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Clapperboard}
						title="Subscriptions"
						url="/subscriptions"
					/>
				</LargeSideBarSection>
				<hr />
				<LargeSideBarSection visibleItemCount={5}>
					<LargeSideBarItem
						IconOrImgUrl={Library}
						title="Library"
						url="/library"
					/>
					<LargeSideBarItem
						IconOrImgUrl={History}
						title="History"
						url="/history"
					/>
					<LargeSideBarItem
						IconOrImgUrl={PlaySquare}
						title="Your Videos"
						url="/your-videos"
					/>
					<LargeSideBarItem
						IconOrImgUrl={Clock}
						title="Watch Later"
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
				`w-full flex items-center rounded-lg gap-4 p-3 ${
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
