// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  console.log(blogDetails)

  return (
    <ul>
      {blogDetails.map(each => (
        <BlogItem itemDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
