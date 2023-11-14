import React, { Component } from 'react'
import NewsItem from '../newsitem/NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
            <div className='col-md-4'>
                <NewsItem title="my title" description="abcd" />
            </div>
            <div className='col-md-4'>
                <NewsItem title="my title" description="abcd" />
            </div>
            <div className='col-md-4'>
                <NewsItem title="my title" description="abcd" />
            </div>
        </div>
      </div>
    )
  }
}

export default News