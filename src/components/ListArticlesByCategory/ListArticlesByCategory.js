import React, {
	useEffect,
	useState,
	useMemo,
	useRef,
	useLayoutEffect,
	useCallback,
} from 'react';
import Swiper from 'swiper';
import { useSelector } from 'react-redux';
import { config } from '../../shared/config';
//import { setSourcedArticles } from '../../store/actions/sources';
import { http, limitMaxNumberOfElements } from '../../shared/utility';
//import Loader from '../components/Loader/Loader';
import Article from '../Article/Article';
import ArrowLeft from '../../resources/icons/arrow-left.svg';
import ArrowRight from '../../resources/icons/arrow-right.svg';

const ListArticles = (props) => {
	//console.log('ListArticles.js props: ', props);
	const { catName } = props;
	//const dispatch = useDispatch();
	const [articlesByCatName, setArticlesByCatName] = useState(null);
	const { apiKey, apiUrl, topHeadlines } = config;
	const country = useSelector((state) => state.articlesStore.country);
	//const [articlesByCat, setArticlesByCat] = useState([]);
	let refSwiperContainer = useRef();

	useEffect(() => {
		fetchData();
	}, []);

	useLayoutEffect(() => {
		if (articlesByCatName && articlesByCatName.length) {
			initSwiperSlider();
		}
	}, [articlesByCatName]);

	const initSwiperSlider = useCallback(() => {
		refSwiperContainer.current = new Swiper(`.swiper-container`, {
			slidesPerView: 3,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		// init Swiper for multiple components
		let refSwiperContainerCount = refSwiperContainer.current.length;

		if (!refSwiperContainerCount) {
			refSwiperContainer.current.init();
		} else {
			refSwiperContainer.current[refSwiperContainerCount - 1].init();
		}
	}, [articlesByCatName]);

	const fetchData = async () => {
		const url =
			apiUrl +
			topHeadlines +
			`category=${catName}&` +
			`country=${country}&` +
			apiKey;

		const result = await http(url, 'GET');
		setArticlesByCatName(result.articles);
		/* dispatch(setSources(result.sources));
		dispatch(setCountry(country)); */
	};

	const renderArticle = useMemo(() => {
		if (articlesByCatName && articlesByCatName.length) {
			let articlesArray = [];
			let limitedArticlesByCat = limitMaxNumberOfElements(
				articlesByCatName,
				5
			);

			limitedArticlesByCat.map((article) => {
				if (article.source.id || article.source.name) {
					articlesArray.push(
						<Article
							heading={'h3'}
							swiper={true}
							columnControl={false}
							article={article}
							key={article.title}
						/>
					);
				}
			});

			return articlesArray;
		}
	}, [articlesByCatName]);

	return (
		<div className="swiper-container">
			<div className="swiper-wrapper">{renderArticle}</div>
			<div className="swiper-button-next">
				<ArrowRight />
			</div>
			<div className="swiper-button-prev">
				<ArrowLeft />
			</div>
		</div>
	);
};

export default ListArticles;
