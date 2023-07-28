export const useHome = () => {
	const getAppFeatures = () => {
		return [
			{
				name: 'Typescript',
				url: 'https://www.typescriptlang.org/'
			},
			{
				name: 'Sass',
				url: 'https://sass-lang.com/'
			},
			{
				name: 'Core-js',
				url: 'https://github.com/zloirock/core-js'
			},
			{
				name: 'Eslint',
				url: 'https://eslint.org/'
			},
			{
				name: 'Prettier',
				url: 'https://prettier.io/'
			},
			{
				name: 'Pinia',
				url: 'https://pinia.vuejs.org/'
			},
			{
				name: 'Gettext extractor',
				url: 'https://github.com/lukasgeiter/gettext-extractor'
			}
		]
	}

	return {
		getAppFeatures
	}
}
