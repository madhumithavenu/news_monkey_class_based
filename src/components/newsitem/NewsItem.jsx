import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl} = this.props;
    return (
      <div className='card' style={{width: "18rem"}}>
        <img src={imageUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <a rel='noreferrer' href='/newsdetails' target='_blank' className='btn btn-primary'>Go Somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem