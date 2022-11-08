
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      style : {
        fontFamily:"revert",
        color:"red",
        // background:"rgb(255, 255, 171)",
        background:"yellow",
        fontStyle:"italic",
        fontWeight:"bold",
        border:"4px solid red",
        borderRadius:"50%",
        padding:"4px"
      }
    }
  }
  
 

  render() {

    return (
        <>
        <div className="sticky-top">
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark p-2" >
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
        {/* // style={this.state.style}> */}
          <img src="logo2.png" style={{width:"30px"}} alt="" />
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/technology">Technology</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" to="/section" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Section
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="/section/international">International</a></li>
            <li><a className="dropdown-item" to="/section/national">National</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="/section/sports">Sports</a></li>
          </ul>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" style={{backgroundColor:"green",color:"white"}} type="submit">Search</button>
      </form> */}
      <span className='navbar-text ' style={{color:'white'}}><b>Developer</b> - Raghav Maheshwari</span>
      
    </div>
  </div>
</nav>
</div>
</>
    )
  }
}

export default Navbar