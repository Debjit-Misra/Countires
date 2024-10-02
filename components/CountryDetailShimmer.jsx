import React from 'react'

import './CountryDetailShimmer.css'

export default function CountryDetailShimmer() {
  return (
    <div className="shimmer-card-container">
      <div className="shimmer-content">
        <div className="flag"></div>
        <div className="right-text-container">
          <h1 className="heading"></h1>
          <div className="text">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>

        </div>
      </div>
    </div>
  )
}