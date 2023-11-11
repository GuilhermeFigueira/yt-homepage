"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Logo.png";
import {
	ArrowLeft,
	Bell,
	CircleDollarSign,
	Contact2,
	HelpCircle,
	Languages,
	LogOut,
	Menu,
	Mic,
	MoonIcon,
	Search,
	Settings,
	Shield,
	ShieldAlert,
	SunIcon,
	Upload,
	User,
	Users,
	Youtube,
} from "lucide-react";
import { Button } from "../components/ui/button";
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
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useTheme } from "next-themes";
import { Switch } from "../components/ui/switch";
import { useSideBarContext } from "../contexts/SideBarContext";
export default function PageHeader() {
	const { theme, setTheme } = useTheme();
	const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
	const [strictMode, setStrictMode] = useState(false);
	const [local, setLocal] = useState<string>("Brasil");

	return (
		<div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 ">
			<PageHeaderFirstSection hidden={showFullWidthSearch} />
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
					<DropdownMenuContent className="w-72 rounded-2xl p-4 child:my-1">
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
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Shield className="mr-2 h-4 w-4" />
									<span>
										Modo restrito:{" "}
										{strictMode ? "Ativado" : "Desativado"}
									</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent className="w-[21rem] bg-secondary">
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
											<h2
												className="contrast-0 font-medium
											"
											>
												Ative o modo restrito
											</h2>
											<Switch
												onCheckedChange={() =>
													setStrictMode(!strictMode)
												}
											/>
										</div>
										{strictMode && (
											<p className="px-4 py-2 text-sm">
												O Modo de segurança impede que
												outros usuários alterem a
												configuração do Modo restrito
												neste navegador. <br /> <br />
												Bloquear o Modo restrito neste
												navegador
											</p>
										)}
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<Shield className="mr-2 h-4 w-4" />
									<span>Local: {local}</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent className="bg-secondary">
										<h1 className="px-4 py-2">
											Selecione o seu local
										</h1>
										<DropdownMenuSeparator />
										<div className="child:px-8">
											<DropdownMenuItem
												onClick={() =>
													setLocal("Brasil")
												}
											>
												Brasil
											</DropdownMenuItem>
											<DropdownMenuItem
												onClick={() =>
													setLocal("Não Brasil")
												}
											>
												Não Brasil
											</DropdownMenuItem>
										</div>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Configurações</span>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<HelpCircle className="mr-2 h-4 w-4" />
							<span>Ajuda</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<ShieldAlert className="mr-2 h-4 w-4" />
							<span>Enviar feedback a</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

type PageHeaderFirstSectionProps = {
	hidden?: boolean;
};
export function PageHeaderFirstSection({
	hidden,
}: PageHeaderFirstSectionProps) {
	const { toggle } = useSideBarContext();
	return (
		<div
			className={` gap-4 items-center flex-shrink-0 ${
				hidden ? "hidden" : "flex"
			}`}
		>
			<Button variant={"ghost"} size={"icon"} onClick={toggle}>
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
	);
}
