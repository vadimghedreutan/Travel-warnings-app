import React, { Fragment } from 'react'

const IntroOverlay = () => {
  return (
    <Fragment>
      <div className="intro-overlay">
        <div className="top">
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
        </div>
        <div className="bottom">
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default IntroOverlay;
