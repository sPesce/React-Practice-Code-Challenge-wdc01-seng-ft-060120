import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {sushi} = props
  const {name,img_url,price} = sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.onClick(sushi)}>
        { 
          
          sushi.eaten ? null : <img src={ img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  )
}

export default Sushi