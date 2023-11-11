"use client";
import VideoGridItem from "./components/VideoGridItem";
import { videos } from "./data/home";
import PageHeader from "./layouts/PageHeader";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Sidebar from "./layouts/Sidebar";
import AddVideo from "./components/AddVideo";
import { SideBarProvider } from "./contexts/SideBarContext";

const PillsBar = dynamic(() => import("./layouts/PillsBar"), {
	ssr: true,
});
export default function Home() {
	return (
		<SideBarProvider>
			<main className="max-h-screen flex flex-col">
				<PageHeader />
				<div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
					<Sidebar />
					<div className="overflow-x-hidden px-8 pb-4">
						<PillsBar />
						<div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
							<Suspense fallback={<p>pinto?</p>}>
								{videos.map((video) => (
									<VideoGridItem key={video.id} {...video} />
								))}
							</Suspense>
							<AddVideo />
						</div>
					</div>
				</div>
			</main>
		</SideBarProvider>
	);
}
