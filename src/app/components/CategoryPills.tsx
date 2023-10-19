"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
type CategoryPillsProps = {
	categories: string[];
	selectedCategory: string;
	onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;
export default function CategoryPills({
	categories,
	selectedCategory,
	onSelect,
}: CategoryPillsProps) {
	const [translate, setTranslate] = useState(0);
	const [isLeftVisible, setIsLeftVisible] = useState(false);
	const [isRightVisible, setIsRightVisible] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current == null) return;

		const observer = new ResizeObserver((entries) => {
			const container = entries[0]?.target;
			if (container == null) return;

			setIsLeftVisible(translate > 0);
			setIsRightVisible(
				translate + container.clientWidth < container.scrollWidth
			);
		});
		observer.observe(containerRef.current);

		return () => {
			observer.disconnect;
		};
	}, [categories, translate]);

	return (
		<div className="overflow-hidden relative" ref={containerRef}>
			<div
				className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
				style={{ transform: `translateX(-${translate}px)` }}
			>
				{categories.map((categories) => (
					<Badge
						variant={
							selectedCategory === categories
								? "default"
								: "secondary"
						}
						onClick={() => onSelect(categories)}
						key={categories}
					>
						{categories}
					</Badge>
				))}
			</div>
			{isLeftVisible && (
				<div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-background from-50% to-transparent w-24 h-full">
					<Button
						variant={"ghost"}
						size={"icon"}
						className="h-full aspect-square w-auto p-1.5"
						onClick={() => {
							setTranslate((translate) => {
								const newTranslate =
									translate - TRANSLATE_AMOUNT;
								if (newTranslate <= 0) return 0;
								return newTranslate;
							});
						}}
					>
						<ChevronLeft />
					</Button>
				</div>
			)}
			{isRightVisible && (
				<div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-background from-50% to-transparent w-24 h-full flex justify-end">
					<Button
						variant={"ghost"}
						size={"icon"}
						className="h-full aspect-square w-auto p-1.5"
						onClick={() => {
							setTranslate((translate) => {
								if (containerRef.current == null) {
									return translate;
								}
								const newTranslate =
									translate + TRANSLATE_AMOUNT;
								const edge = containerRef.current.scrollWidth;
								const width = containerRef.current.clientWidth;
								if (newTranslate + width >= edge) {
									return edge - width;
								}
								return newTranslate;
							});
						}}
					>
						<ChevronRight />
					</Button>
				</div>
			)}
		</div>
	);
}
