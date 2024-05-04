// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsdata} = props
  return (
    <div className="blog-list-container">
      {blogsdata.map(item => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
  )
}

export default BlogList
