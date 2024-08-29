import React, { Component } from "react";
import "./App.css";
import { loadPosts } from "./utils/load_posts";
import { Post } from "./components/Posts";

export default class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const posts = await loadPosts();
    this.setState({ posts });
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
          <Post posts={posts}/>
      </section>
    );
  }
}
