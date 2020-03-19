import React, { Fragment } from 'react'
import useStats from '../utils/useStats'

const CardsItem = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error)
  if(loading) return <div className="loader loading">
      <span className="sr-only">Loading...</span>
    </div>
  if(error) return <div className="error">
      <span>Something is off...</span>
    </div>

  return (
    <Fragment>
      <div className="cards__confirmed">
        <h3>Confirmed</h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="cards__recovered">
        <h3>Recovered</h3>
        <span>{stats.recovered.value}</span>
      </div>
      <div className="cards__deaths">
        <h3>Deaths</h3>
        <span>{stats.deaths.value}</span>
      </div>
    </Fragment>
  )
}

export default CardsItem;
