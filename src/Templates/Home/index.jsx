import React, { Component } from "react";
import "./style.css";
import { loadPosts } from "../../utils/load_posts";
import { Post } from "../../components/Posts";
import { Button } from "../../components/Button";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const posts = await loadPosts();
    this.setState({
      posts: posts.slice(page, postsPerPage),
      allPosts: posts,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Post posts={posts} />
        <Button title="Load Posts" onClick={this.loadMorePosts} />
      </section>
    );
  }
}
