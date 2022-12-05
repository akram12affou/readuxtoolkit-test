import React, { useState } from 'react'
import './App.css'
import {useSelector ,useDispatch} from 'react-redux'
import { addproduct } from './productSlice'
import {SelectAllProducts} from './productSlice'
function App() {
  const dispatch  = useDispatch()
  const products = useSelector(SelectAllProducts)
  console.log(products)
  const [name,setName] = useState('')
  const rendredproducts = products.map((e) => {
    return (
      <div key={e.id}>
      <p>{e.name}</p>
      </div>
    )
  })
  const handleClick = () => {
    if(name){
    dispatch(addproduct(name))
    setName('')
  }
}
  return (
    <div className="App">
      <input value={name} type="text" name="" id="" onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
        {rendredproducts}
    </div>
  )
}

export default App
