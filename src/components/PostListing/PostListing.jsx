import React from 'react'
import { Link } from 'gatsby'
const getDate = require('../../../common/utils/date').getDate;

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: getDate(postEdge.node.fields.date),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <div>
        {/* Your post list here. */
          postList.map(post => (
            <div>
              {post.date}：
              <Link to={post.path} key={post.title}>
                {post.title}
                {/*<span>{post.date}</span>*/}
                {/*<p>{post.excerpt}</p>*/}
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

export default PostListing
