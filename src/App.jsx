import { useState } from 'react'
import AddCategoria from './components/AddCategoria'
import GifGrid from './components/GifGrid'



function App() {
  const [categories, setCategories]=useState(['maradona'])

   const NuevaCategoria = () => {
    setCategories([...categories, 'Kick Buttowski'])
   }

   const onAddCategory = ( newCategory) => {
      
      if (categories.includes(newCategory)  ) return;
    

      // me returna los gifs ingresados y los gifs anteriores los elimina
      setCategories([newCategory]) 

      // me returna los nuevos gifs más los gifs anteriores
      // setCategories([newCategory, ...categories])
   }
    
  return (
    <>
    <h1>GIF App</h1>

    {/* input */}
    {/* <AddCategoria setCategories={setCategories}/> */}
    <AddCategoria onNewCategory={(event) => onAddCategory(event) }/>

    {/* listado de gif */}
    
        {categories.map( (category) => <GifGrid key={category} category={category}/>)}
    
    </>
  )
}

export default App
