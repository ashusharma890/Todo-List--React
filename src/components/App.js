import React, {useState} from 'react'
import List from './utils/List'

const bodyContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#111',
    padding: '10px',
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#0A3C4F',
    borderRadius: '5px',
    width: '800px',
    boxShadow: '0 0 5px 10px rgba(255,255,255)',
}

function App() {
  return (
    <div style={bodyContainer}>
        <div style={todoListContainer}>
            <h1 className='heading'>Accio Todo</h1>
            <List/>
        </div>
    </div>
  )
}

export default App