import { useState } from 'react'
import './App.css'
import Person from './Q1'
import Button from './Q2'
import Header from './Q3'
import List from './Q4'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Person />
     <Button />
     <Header />
     <List />
     </>
  )
}

export default App
