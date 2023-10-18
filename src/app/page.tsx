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
				<PillsBar />
			</div>
		</main>
	);
}
