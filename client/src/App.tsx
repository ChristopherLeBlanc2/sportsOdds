import { useState } from 'react';
import Dashboard from './Dashboard';


function App() {
  const username = 'bigChris'
  const posts = [
    {
      text: 'hi',
      author: 'John'
    },
    {text: 'peace'},
    {text: 'polly'}
  ]


  return (
    <div>
      <h1>hello world</h1>
      <Dashboard username={username} posts={posts}/>
    </div>
  )
}

export default App
