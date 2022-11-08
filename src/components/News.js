import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export class News extends Component {

  static defaultProps = {
      country : 'in',
      pageSize : 6,
      category : "general",
  }

  static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      totalResults: 0,
      loading : false,
      page : 1,
    }
  }
  
  //fetching from api
  async componentDidMount() { 
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e19302e771745b98bdc9384dcaa9d1e&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      this.props.setProgress(10);
      let data= await fetch(url);
      this.props.setProgress(20);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults,loading:false});
      this.props.setProgress(100);
   }

  //  handlePrevious = async () => {
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e19302e771745b98bdc9384dcaa9d1e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page:this.state.page-1,
  //       articles:parsedData.articles,
  //       loading:false,
  //       totalResults: 68
  //     })
  //  }
   
  //  handleNext = async () => {
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e19302e771745b98bdc9384dcaa9d1e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //     let parsedData = await data.json();
  //     this.setState({
  //       page:this.state.page+1,
  //       articles:parsedData.articles,
  //       loading :false
  //     })
  //  }

   fetchMoreData = async () => {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e19302e771745b98bdc9384dcaa9d1e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData = await data.json();

        this.setState({
          page:this.state.page+1,
          articles:this.state.articles.concat(parsedData.articles)
        })

     
  }
   

  render() {
   
    let title=this.props.category;
    return (
      
      <div className="container my-3">
        <div>
        <marquee behavior="fast" scrollamount="10" direction="right"><h2 style={{display:"flex",justifyContent:"center",fontFamily:"cursive",color:"white"}}>
          <a href="/"><img src="faviconNews.png" alt="" /></a><strong>आज की ताजा खबरें<img src="faviconNews.png" alt="" /></strong></h2></marquee>
        </div>
        <div className='mt-3 mb-3'style={{color:"white",fontFamily:"cursive",textAlign:"center"}}><h2><strong>{title=="general"?"":title.charAt(0).toUpperCase()+title.slice(1)+" News Headlines"}</strong></h2></div>
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > */}
        <div className="container">
        <div className="row" >
        {this.state.loading && <Spinner/>}
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" style={{display:"flex",justifyContent:"center"}} key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt.slice(0,10)} author={element.author} source={element.source.name}/>
          </div>
          
        })}
        {/* <div className="container my-3 d-flex justify-content-between" >
       <button type="button" disabled={this.state.page<=1} className="btn btn-primary btn-lg"  onClick={this.handlePrevious}>&larr;Prev</button>
       <p style={{color:"white"}}><b>Page-{this.state.page}</b></p>
       <button type="button" disabled={this.state.page>=Math.ceil(68/this.props.pageSize)}  className="btn btn-primary btn-lg" onClick={this.handleNext}>Next&rarr;</button>
     
     </div> */}
        </div>
        </div>
        {/* </InfiniteScroll> */}
      </div>
    
     
    )
  }
}

export default News