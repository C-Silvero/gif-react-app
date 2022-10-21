import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifItem from './GifItem'

const GifGrid = ({category} ) => {



  const {images, isLoading} = useFetchGifs( category)


      return (
    <>
      <h3>{category}</h3>
      { isLoading ? <h4>Cargando... </h4> : null }
      

      <div className='card-grid'>
        {
          images.map( (image) => (
            <GifItem key={image.id} title={image.title} url={image.url}/>
          ))
        }
        
      </div>
      
    </>
  )
}

export default GifGrid
