import VideoGridItem from "./components/VideoGridItem";
import { videos } from "./data/home";
import PageHeader from "./layouts/PageHeader";

import dynamic from "next/dynamic";

const PillsBar = dynamic(() => import("./layouts/PillsBar"), {
	ssr: true,
});
export default function Home() {
	return (
		<main className="max-h-screen flex flex-col">
			<PageHeader />
			<div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
				<div>Sidebar</div>
				<div className="overflow-x-hidden px-8 pb-4">
					<PillsBar />
					<div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
						{videos.map((video) => (
							<VideoGridItem key={video.id} {...video} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
