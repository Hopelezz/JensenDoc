export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }


// To add a page copy the following & replace anything in bracket.
// { text: '[insert the name]', link: 'en/[page location]' },

// The page won't be seen if this doesn't exist.

export const SIDEBAR = {
	en: [
		{ text: 'INTRO', header: true }, // Header is the Bold label
		{ text: 'Introduction', link: 'en/introduction' }, // Link is the page location
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },

//Electrical		
		{ text: 'Electrical', header: true },
		{ text: 'Safety', link: 'en/Electrical/Safety' },
		{ text: 'MLA Panel', link: 'en/Electrical/MLA Panel' },

//Mechanical		
		{ text: 'Mechanical', header: true },
		{ text: 'Page 4', link: 'en/page-4' },

//Production		
		{ text: 'Production', header: true },

//Purchasing		
		{ text: 'Purchasing', header: true },

//Sales		
		{ text: 'Sales & Services', header: true },

//Software
		{ text: 'Software', header: true },
	],
};
