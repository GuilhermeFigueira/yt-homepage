import { Badge } from "./ui/badge";
type CategoryPillsProps = {
	categories: string[];
	selectedCategory: string;
	onSelect: (category: string) => void;
};
export default function CategoryPills({
	categories,
	selectedCategory,
	onSelect,
}: CategoryPillsProps) {
	return (
		<div className="overflow-hidden relative">
			<div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
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
		</div>
	);
}
