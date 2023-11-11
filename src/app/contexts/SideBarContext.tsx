import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type SideBarProviderProps = {
	children: ReactNode;
};

type SideBarContextType = {
	isLargeOpen: boolean;
	isSmallOpen: boolean;
	toggle: () => void;
	close: () => void;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

export function useSideBarContext() {
	const value = useContext(SideBarContext);
	if (value === null) throw Error("Cannot use SidebarProvider");
	return value;
}
export function SideBarProvider({ children }: SideBarProviderProps) {
	const [isLargeOpen, setIsLargeOpen] = useState(true);
	const [isSmallOpen, setIsSmallOpen] = useState(false);

	useEffect(() => {
		const handler = () => {
			if (!isScreenSmall()) setIsSmallOpen(false);
		};
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);

	function isScreenSmall() {
		return window.innerWidth < 1024;
	}
	function toggle() {
		if (isScreenSmall()) {
			setIsSmallOpen((s) => !s);
		} else {
			setIsLargeOpen((l) => !l);
		}
	}
	function close() {
		if (isScreenSmall()) {
			setIsSmallOpen(false);
		} else {
			setIsLargeOpen(false);
		}
	}
	return (
		<SideBarContext.Provider
			value={{ isLargeOpen, isSmallOpen, close, toggle }}
		>
			{children}
		</SideBarContext.Provider>
	);
}
