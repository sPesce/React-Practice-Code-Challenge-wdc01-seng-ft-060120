import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sush => <Sushi sushi={sush} key={sush.id} onClick={props.sushiClicked}/>)
        }
        <MoreButton moreClicked={props.moreClicked}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer