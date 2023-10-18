"use client";
import CategoryPills from "./../components/CategoryPills";
import { categories } from "../data/home";
import { useState } from "react";
export default function PillsBar() {
	const [selectedCategory, setSelectedCategory] = useState(categories[0]);
	return (
		<div className="sticky top-0 bg-background z-10 pb-4">
			<CategoryPills
				categories={categories}
				selectedCategory={selectedCategory}
				onSelect={setSelectedCategory}
			/>
		</div>
	);
}
