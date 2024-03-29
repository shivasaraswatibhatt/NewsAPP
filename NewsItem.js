import React, { Component } from 'react'

export class NewsItem extends Component {
   

  render() {
     let {title, description, imageUrl, newsUrl } = this.props; 
    return (
        <div className="my-3">
            <div className="card">
                <img src={!imageUrl?"https://images.indianexpress.com/2022/02/Asus-8Z-India-launch.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-dark">Read More</a>
                </div>
           </div>
     </div>
    )
  }
}

export default NewsItem