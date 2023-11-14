import React, { Component } from 'react'
import NewsItem from '../newsitem/NewsItem'

export class News extends Component {
  render() {
    return (
      <>
      <div>News</div>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      </>
    )
  }
}

export default News