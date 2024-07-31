import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <section className="topBarSection">
        <div className="companyTitle">
          <Link to="/" className='c'>
          <h2>SUBY</h2>
          </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder="search..."/>
        </div>
        <div className="userAuth">
            Login/SignUP
        </div>
    </section>
  )
}

export default TopBar