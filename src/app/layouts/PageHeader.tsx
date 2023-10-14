"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logo.png";
import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/ui/theme-toggler";
import { Input } from "../components/ui/input";
import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Skeleton } from "../components/ui/skeleton";
export default function PageHeader() {
	const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
	return (
		<div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 ">
			<div className="flex gap-4 items-center flex-shrink-0">
				<Button variant={"ghost"} size={"icon"}>
					<Menu />
				</Button>
				<Button variant={"link"}>
					<Link href={"/"}>
						<Image
							src={logo}
							alt={"Youtube logo"}
							className="h-6 w-auto dark:invert"
							priority
						/>
					</Link>
				</Button>
				<ModeToggle />
			</div>
			<form className="hidden md:flex gap-4 flex-grow justify-center">
				<div className="flex flex-grow max-w-[37rem]">
					<Input
						placeholder="Pesquisar"
						className="rounded-l-full shadow-inner dark:shadow-none shadow-input py-1 px-4 text-base font-light w-full "
					/>
					<Button
						className="py-2 px-5 rounded-r-full border-input border border-l-0 flex-shrink-0"
						variant={"secondary"}
					>
						<Search size={20} />
					</Button>
				</div>
				<Button
					type="button"
					size={"icon"}
					variant={"secondary"}
					className="flex-shrink-0"
				>
					<Mic />
				</Button>
			</form>
			<div
				className={`flex md:gap-2 items-center flex-shrink-0 ${
					showFullWidthSearch ? "" : ""
				}`}
			>
				<Button
					type="button"
					size={"icon"}
					variant={"ghost"}
					onClick={() => setShowFullWidthSearch(true)}
					className="flex-shrink-0 md:hidden"
				>
					<Search size={20} />
				</Button>
				<Button
					type="button"
					size={"icon"}
					variant={"ghost"}
					className="flex-shrink-0 md:hidden"
				>
					<Mic />
				</Button>
				<Button size={"icon"} variant={"ghost"}>
					<Upload />
				</Button>
				<Button size={"icon"} variant={"ghost"}>
					<Bell />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size={"icon"} variant={"ghost"}>
							<User />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-72 rounded-2xl">
						<DropdownMenuLabel className="p-4 flex items-center gap-4 ">
							<Avatar>
								<AvatarImage
									src="https://github.com/guilhermefigueira.png"
									alt="@guilhermefigueira"
								/>
								<AvatarFallback>GF</AvatarFallback>
							</Avatar>
							<div>
								<h1>Guilherme de Biazi Figueira</h1>
								<Link
									href={
										"https://github.com/GuilhermeFigueira"
									}
									target="_blank"
								>
									<span className="underline">
										@GuilhermeFigueira
									</span>
								</Link>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup className="px-4">
							<DropdownMenuItem>
								<User className="mr-2 h-4 w-4" />
								<span>Profile</span>
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								{/* <CreditCard className="mr-2 h-4 w-4" /> */}
								<span>Billing</span>
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								{/* <Settings className="mr-2 h-4 w-4" /> */}
								<span>Settings</span>
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								{/* <Keyboard className="mr-2 h-4 w-4" /> */}
								<span>Keyboard shortcuts</span>
								<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup className="px-4">
							<DropdownMenuItem>
								{/* <Users className="mr-2 h-4 w-4" /> */}
								<span>Team</span>
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									{/* <UserPlus className="mr-2 h-4 w-4" /> */}
									<span>Invite users</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem>
											{/* <Mail className="mr-2 h-4 w-4" /> */}
											<span>Email</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											{/* <MessageSquare className="mr-2 h-4 w-4" /> */}
											<span>Message</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											{/* <PlusCircle className="mr-2 h-4 w-4" /> */}
											<span>More...</span>
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuItem>
								{/* <Plus className="mr-2 h-4 w-4" /> */}
								<span>New Team</span>
								<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							{/* <Github className="mr-2 h-4 w-4" /> */}
							<span>GitHub</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							{/* <LifeBuoy className="mr-2 h-4 w-4" /> */}
							<span>Support</span>
						</DropdownMenuItem>
						<DropdownMenuItem disabled>
							{/* <Cloud className="mr-2 h-4 w-4" /> */}
							<span>API</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							{/* <LogOut className="mr-2 h-4 w-4" /> */}
							<span>Log out</span>
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
