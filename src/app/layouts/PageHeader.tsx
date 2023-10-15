"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logo.png";
import {
	ArrowLeft,
	Bell,
	CircleDollarSign,
	Contact2,
	Languages,
	LogOut,
	Menu,
	Mic,
	MoonIcon,
	Search,
	Shield,
	SunIcon,
	Upload,
	User,
	Users,
	Youtube,
} from "lucide-react";
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
import { useTheme } from "next-themes";
import { Switch } from "../components/ui/switch";
export default function PageHeader() {
	const { theme, setTheme } = useTheme();
	const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
	const [strictMode, setStrictMode] = useState(false);
	return (
		<div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 ">
			<div
				className={` gap-4 items-center flex-shrink-0 ${
					showFullWidthSearch ? "hidden" : "flex"
				}`}
			>
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
			</div>
			<form
				className={` gap-4 flex-grow justify-center ${
					showFullWidthSearch ? "flex" : "hidden md:flex"
				}`}
			>
				{showFullWidthSearch && (
					<Button
						type={"button"}
						onClick={() => setShowFullWidthSearch(false)}
						variant={"ghost"}
						size={"icon"}
						className="flex shrink-0"
					>
						<ArrowLeft />
					</Button>
				)}
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
					showFullWidthSearch ? "hidden" : "flex"
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
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<User className="mr-2 h-4 w-4" />
								<span>Seu Canal</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Youtube className="mr-2 h-4 w-4" />
								<span>Youtube Studio</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Users className="mr-2 h-4 w-4" />
								<span>Alternar Conta</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<LogOut className="mr-2 h-4 w-4" />
								<span>Sair</span>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<CircleDollarSign className="mr-2 h-4 w-4" />
								<span>Compras e Assinaturas</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Contact2 className="mr-2 h-4 w-4" />
								<span>Seus dados no Youtube</span>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<SunIcon className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
									<MoonIcon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
									<span>
										Aparência:{" "}
										<span className="capitalize">
											{theme}
										</span>
									</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent className="bg-secondary">
										<DropdownMenuItem
											onClick={() => setTheme("light")}
										>
											Light
										</DropdownMenuItem>
										<DropdownMenuItem
											onClick={() => setTheme("dark")}
										>
											Dark
										</DropdownMenuItem>
										<DropdownMenuItem
											onClick={() => setTheme("system")}
										>
											System
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Languages className="mr-2 h-4 w-4" />
									<span>Idioma</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent className="bg-secondary">
										<DropdownMenuItem>
											Português
										</DropdownMenuItem>
										<DropdownMenuItem>
											English
										</DropdownMenuItem>
										<DropdownMenuItem>
											System
										</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Shield className="mr-2 h-4 w-4" />
									<span>Modo restrito: {strictMode}</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent className="w-80 bg-secondary">
										<h1 className="px-4 py-2">
											Modo Restrito
										</h1>
										<DropdownMenuSeparator />
										<p className="px-4 py-2 text-sm">
											Essa opção ajuda a ocultar vídeos
											que possam ter conteúdo para
											maiores. Nenhum filtro é 100%
											preciso. <br />
											<br /> Esta configuração se aplica
											apenas a este navegador.
										</p>
										<div className="flex items-center justify-between px-4 py-2 uppercase">
											<h2 className="contrast-0 font-medium">
												Ative o modo restrito
											</h2>
											<Switch />
										</div>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
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
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
