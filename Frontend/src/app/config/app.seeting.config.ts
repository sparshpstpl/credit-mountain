// Define constant like app name or any other constant related to application
export interface AppConfigData {
	name: string;
	sortName: string;
	logo: string;
	minLogo: string;
	logoLink: string;
	webSiteUrl: string;
}

export const AppConfig: AppConfigData = {
	name: 'Credit Mountain',
	sortName: 'CUI',
	logo: 'assets/img/brand/logo-with-name.svg',
	minLogo: 'assets/img/brand/sygnet.svg',
	logoLink: '/dashboard',
	webSiteUrl: '',
};
