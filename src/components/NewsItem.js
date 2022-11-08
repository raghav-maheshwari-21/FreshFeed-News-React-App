import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title:t,description,imageUrl,newsUrl,author,date,source}=this.props; //object destructuring
    let altimg = "https://images.livemint.com/img/2022/09/03/600x338/gail_bonus_shares_1662182631802_1662182631967_1662182631967.jpg";
    return (
      <div className="my-3">
        <div className="card" style={{width: "100%",height:"100%",backgroundColor:"white",border:"3px solid black"}}>
        <img src={!imageUrl?altimg:imageUrl} className="card-img-top" alt=""/>
        <div className="card-body" style={{margin:"10px"}}>
        <h5 className="card-title">{t}<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
   Source - {source}
  </span></h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm btn-dark mb-2">Detailed News</a>
        {/* <p>Published on - {date}</p> */}
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {date}</small></p>
    </div>
    </div>
    
    </div>
      
    )
  }
}

export default NewsItem