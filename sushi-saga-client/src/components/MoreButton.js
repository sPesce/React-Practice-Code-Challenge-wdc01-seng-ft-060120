import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.moreClicked()}>
            More sushi!
          </button>
}

export default MoreButton