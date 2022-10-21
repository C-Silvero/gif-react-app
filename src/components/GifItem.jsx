import React from 'react'





const GifItem = ({title, url} ) => {

    
    // me retunna los gifg con los titulos y la url
    // console.log({title, url});

    return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title} </p>
    </div>
  )
}

export default GifItem
