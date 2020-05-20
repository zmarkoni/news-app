import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		// we init with resources
		resources: {
			en: {
				translations: {
					'Top news from': 'Top news from',
					'React makes it painless to create interactive UIs.':
						'React makes it painless to create interactive UIs.',
					'Top 5 news by categories from':
						'Top 5 news by categories from',
					'Search top news from by': 'Search top news from',
					'by term': 'by term',
					'news from': 'news from',
					'Back to list': 'Back to list',
				},
			},
			rs: {
				translations: {
					'Top news from': 'Top vesti od',
					'React makes it painless to create interactive UIs.':
						'React omogucava lako pravljenje UI-a.',
					'Top 5 news by categories from':
						'Top 5 vesti po kategorijama od',
					'Search top news from': 'Pretrazi top vesti od',
					'by term': 'po terminu',
					'news from': 'vesti od',
					'Back to list': 'Nazad na listu',
				},
			},
		},
		fallbackLng: 'en',
		debug: true,
		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',
		keySeparator: false, // we use content as keys
		interpolation: {
			escapeValue: false, // not needed for react!!
			formatSeparator: ',',
		},
		react: {
			wait: true,
		},
	});
export default i18n;
