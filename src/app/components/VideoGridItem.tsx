"use client";
import Link from "next/link";
import Image from "next/image";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import { useEffect, useRef, useState } from "react";
type VideoGridItemProps = {
	id: string;
	title: string;
	channel: {
		id: string;
		name: string;
		profileUrl: string;
	};
	views: number;
	postedAt: Date;
	duration: number;
	thumbnailUrl: string;
	videoUrl: string;
};

const VIEW_FORMATTER = Intl.NumberFormat(undefined, { notation: "compact" });

export default function VideoGridItem({
	channel,
	duration,
	id,
	postedAt,
	thumbnailUrl,
	title,
	videoUrl,
	views,
}: VideoGridItemProps) {
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current == null) return;

		if (isVideoPlaying) {
			videoRef.current.currentTime = 0;
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}
	}, [isVideoPlaying]);

	return (
		<div
			className="flex flex-col gap-2"
			onMouseEnter={() => setIsVideoPlaying(true)}
			onMouseLeave={() => setIsVideoPlaying(false)}
		>
			<Link href={`/watch?v=${id}`} className="relative aspect-video">
				<Image
					className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
						isVideoPlaying ? "rounded-none" : "rounded-xl"
					}`}
					src={thumbnailUrl}
					alt={""}
					width={1280}
					height={720}
				/>
				<div className="absolute bottom-1 right-1 bg-secondary-foreground text-secondary text-sm px-0.5 rounded">
					{formatDuration(duration)}
				</div>
				<video
					ref={videoRef}
					muted
					playsInline
					src={videoUrl}
					className={`block h-full object-cover absolute delay-200 inset-0 transition-opacity duration-200 ${
						isVideoPlaying ? "opacity-100" : "opacity-0"
					}`}
				/>
			</Link>
			<div className="flex gap-2">
				<Link href={`/@${channel.id}`} className="flex-shrink-0 ">
					<Image
						className="w-9 h-9 rounded-full"
						src={channel.profileUrl}
						alt={""}
						width={176}
						height={176}
					/>
				</Link>
				<div className="flex flex-col">
					<Link href={`/watch?v=${id}`} className="font-bold">
						{title}
					</Link>
					<Link
						href={`/@${channel.id}`}
						className="text-primary/60 text-sm"
					>
						{channel.name}
					</Link>
					<Link href={`/watch?v=${id}`}>
						<div className="text-primary/60 text-sm ">
							{VIEW_FORMATTER.format(views)} Views •{" "}
							{formatTimeAgo(postedAt)}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
