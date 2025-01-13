// side nav bar
export interface NavigationItem {
	label: string;
	key: string;
	icon?: string;
	path?: string;
	children?: NavigationItem[];
	type?: string;
}
