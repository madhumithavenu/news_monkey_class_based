import React, { Component } from 'react'
import NewsItem from '../newsitem/NewsItem'
import Spinner from '../spinner/Spinner';

export class News extends Component {

    constructor(props) {
        super(props);
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

    async handleNextClick(){
        if(this.state.page + 1 > Math.ceil(this.state.totalArticles / 10)){
            console.log("No more Articles");
        }
        else{
            this.setState({...this.state, loading: true});
            let res =await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-10-14&sortBy=publishedAt&category=${this.props.category}&apiKey=bd002a1cf4f64969a8819fcbfe3a190f&page=${this.state.page + 1}&pageSize=10`);
            let data = await res.json();
            console.log(data.articles);
            this.setState({
                ...this.state,
                page: this.state.page + 1,
                articles: data.articles,
                totalArticles: data.totalResults,

            })
        }
    }

    async handlePreviousClick(){
        this.setState({...this.state, loading: true});
        let res =await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-10-14&sortBy=publishedAt&category=${this.props.category}&apiKey=bd002a1cf4f64969a8819fcbfe3a190f&page=${this.state.page + 1}&pageSize=10`);
        let data = await res.json();
        this.setState({
            ...this.state,
            page: this.state.page - 1,
            articles: data.articles,
            totalArticles: data.totalResults,
        })
    }

    render() {
        console.log(this.state.articles);
        return (
            <div className='container my-3'>
                <h2 className='text-center' >NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                {(this.state.loading !== true) &&
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
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handleNextClick}>&larr; Previous</button>
                    <button disabled={this.state.page * 10 >= this.state.totalArticles} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News