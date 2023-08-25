import React, { useEffect, useState } from 'react'
import './News.css'

function News() {

    const [news, setNews] = useState('')
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const result = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f0080e4784ae485ba2add0c338c84229");
                const data = await result.json();
                setNews(data);
                console.log(data)
            } catch (error) {
                console.log("Error fetching the news", error);
            }
        }
        fetchNews();
    }, [])
    let randomArticleIndex = Math.floor(Math.random() * 10)
    console.log(randomArticleIndex)
    
    return (
        <div>
            {news ?
                <div className='News'>
                    <div><img className='NewsImg' src={news.articles[randomArticleIndex].urlToImage} alt="News Article" />
                        <div className='NewsTitle'>
                            <h2 className='Title'>{news.articles[randomArticleIndex].title}</h2><br/>
                            <p className='DateTime'>{news.articles[randomArticleIndex].publishedAt}</p></div>
                    </div>
                    <p className='NewsText'>{news.articles[randomArticleIndex].description} <span className='ReadMore'><a href ={news.articles[randomArticleIndex].url} target='_blank'>Click here to read more...</a></span></p>
                </div> : <></>
            }
        </div>
    )
}

export default News