import Link from "next/link";
import Image from "next/image";
import { formatDuration } from "../utils/formatDuration";
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
	return (
		<div className="flex flex-col gap-2">
			<Link href={`/watch?v=${id}`} className="relative aspect-video">
				<Image
					className="block w-full h-full object-cover rounded-xl"
					src={thumbnailUrl}
					alt={""}
					width={1280}
					height={720}
				/>
				<div className="absolute bottom-1 right-1 bg-secondary-foreground text-secondary text-sm px-0.5 rounded">
					{formatDuration(duration)}
				</div>
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
					<Link href={`/@${channel.id}`} className="text-primary/60">
						{channel.name}
					</Link>
				</div>
			</div>
		</div>
	);
}
