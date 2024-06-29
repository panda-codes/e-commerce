import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis culpa excepturi, 
          dicta eligendi quae similique tempora deserunt illum consequuntur facilis. 
          Non incidunt nam est voluptatum? 
          Laudantium tempora culpa repellendus.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis culpa excepturi
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox

