import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    const updateNews = async ()=>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(()=>{
        if (props.category === "general") {
            document.title = "NewsMonkey - Get your daily dose of news for free!";
        }
        else {
            document.title = `NewsMonkey - ${capitalize(props.category)}`;
        }
        updateNews();
    }, [])

    const handlePrevClick = async () => {
        setPage(page-1);
        updateNews();
    }

    const handleNextClick = async () => {
        setPage(page+1);
        updateNews();
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&category=${props.category}&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    return (
        <>
            <h1 className='text-center' style={{ margin: '50px 10px', marginTop:'120px', fontSize: '55px', fontWeight: '700' }}>NewsMonkey - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner/>}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={loading && <Spinner/>}
            >

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News