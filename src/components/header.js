import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">Travel warnings</a>
          </div>
          <div>
            <ul className="social">
              <li><a href="https://github.com/vadimghedreutan"><i className="fab fa-github"></i></a></li>
              <li><a href="https://twitter.com/GhedreutanVadim"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
