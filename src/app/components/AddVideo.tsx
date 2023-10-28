"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Plus, PlusSquare } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/app/components/ui/sheet";

export default function AddVideo() {
	const getVideo = () => {
		fetch("api/get_video");
	};

	return (
		<Sheet>
			<SheetTrigger
				className="flex flex-col w-full h-full object-cover transition-[border-radius] duration-200"
				asChild
			>
				<Button variant={"outline"} className="group">
					Adicionar Vídeo
					<Plus className="w-28 h-28 stroke-accent group-hover:stroke-card" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Adicionar Vídeo</SheetTitle>
					<SheetDescription>
						Adicionar um vídeo à lista de vídeos na homepage.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							URL do vídeo
						</Label>
						<Input id="name" className="col-span-3" />
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit" onClick={getVideo}>
							Save changes
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
