import React, { Component } from 'react'
import NewsItem from '../newsitem/NewsItem'
import Spinner from '../spinner/Spinner';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

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
            let res =await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd002a1cf4f64969a8819fcbfe3a190f&page=${this.state.page + 1}&pageSize=10`);
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
        let res =await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd002a1cf4f64969a8819fcbfe3a190f&page=${this.state.page + 1}&pageSize=10`);
        let data = await res.json();
        this.setState({
            ...this.state,
            page: this.state.page - 1,
            articles: data.articles,
            totalArticles: data.totalResults,
        })
    }

    fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4db083447ccd4921831926d5eecbc2fc"
      )
    

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
                                    imageUrl={(item.urlToImage != null) ? item.urlToImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fsave-nature&psig=AOvVaw1xoZlU9tmj0mOjruAxWwWe&ust=1700040900732000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLidz4GYw4IDFQAAAAAdAAAAABAE"}
                                    url={item.url}
                                    author={item.author}
                                    date={item.publishedAt}
                                    source={item.source.name}
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