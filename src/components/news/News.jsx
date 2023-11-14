import React, { Component } from 'react'
import NewsItem from '../newsitem/NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            totalArticles: 0
        }
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
    }

    componentDidMount() {
        fetch(
            "https://newsapi.org/v2/everything?q=tesla&from=2023-10-14&sortBy=publishedAt&apiKey=bd002a1cf4f64969a8819fcbfe3a190f"
        ).then(res => res.json()).then(data => {
            this.setState({ 
                ...this.state,
                articles: data.articles,
                totalArticles: data.totalResults,
                loading: false
            });
        });
    }

    render() {
        console.log(this.state.articles);
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                {(this.state.articles.length != 0) &&
                    <div className='row'>
                        {(this.state.articles.map((item, index) => {
                            return (<div className='col-md-4' key={index}>
                                <NewsItem
                                    title={item.title}
                                    description={item.description}
                                    imageUrl={item.urlToImage}
                                />
                            </div>)
            
                }))
                        }
                    </div>
                }
                <div className='container d-flex justify-content-between'>
                    <button type='button' className='btn btn-dark'>&larr; Previous</button>
                    <button type='button' className='btn btn-dark'>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News