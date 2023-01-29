import React from 'react';
type Post = {
  text: string;
  author?: string;
}

type Props = {
  username: string;
  posts: Post[];
}

const add = (num1: number, num2: number) => {
  return num1 + num2
}

add(2, 3)

const Dashboard = ({username, posts}: Props) => {

  return (
    <div>
      <h1>hello {username}</h1>
      {posts.map((post) => {
        return <p>{post.text}, {post.author}</p>
      })}
    </div>
  )

}

export default Dashboard;