import React, { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {addtodoo, deletetodo, fetchCoins, getPostsStatus, getPostsError } from './productSlice'
// import { deleteproduct } from './productSlice'

import { SelectAllProducts , SelectAllTodos} from './productSlice'

function App() {
  const [todoname , setTodoname] = useState('')
  const todos = useSelector(SelectAllTodos);
  const posts = useSelector(SelectAllProducts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  const dispatch = useDispatch()
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchCoins())
    }
  }, [postStatus, dispatch])




  const rendredCoins = posts.map((e) => {
    return (
      <>
      <div key={e.id}>
        {postStatus === 'loading' && (<p>loading...</p>)}
        {postStatus === 'failed' && (<p>failed...</p>)}
        {postStatus === 'succeeded' &&(
            <p> {e.name}</p>
          )}
        </div>

      </>
    )
  })
  
  const addtodo = () => {
    dispatch(addtodoo(todoname))
    setTodoname('')
  }

  return (
    <div className="App">
      {todos.map((e) => {
        return (
          <>
        <p>{e.name}</p>
        <button onClick={() => dispatch(deletetodo( e.name))}>delete</button>
      
        </>
        )
      })}
      <br />
      <input value={todoname} onChange={(e) => setTodoname(e.target.value)} type="text" />
      <button onClick={() => addtodo()}>add</button>
    </div>
  )
}

export default App
