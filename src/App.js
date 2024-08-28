import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'Title 01',
        body: 'Body title 01'
      },
        {
          id: 2,
          title: 'Title 02',
          body: 'Body title 02'
        },
        {
          id: 3,
          title: 'Title 03',
          body: 'Body title 03'
        },
      ]
    };
    timeoutUpdate = null

  componentDidMount(){
    this.handleTimeout()
  }

  componentDidUpdate(){
    this.handleTimeout()
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const { posts, counter } = this.state
    posts[0].title = 'Changed title'
  this.timeoutUpdate = setTimeout(() => {
      this.setState({
        posts,
        counter: counter +1
      })
    }, 5000)
  }

  render() {
    const { posts, counter } = this.state

    return (
      <div className="App">
        <p>{counter}</p>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
          </div>
        ))}
      </div>
    );
  }
}

