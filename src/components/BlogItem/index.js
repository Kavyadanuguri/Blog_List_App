// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {id, title, description, publishedDate} = itemDetails

  return (
    <li className="list-item-container" key={id}>
      <div className="item-con1">
        <h1 className="item-h1">{title}</h1>
        <p className="item-p1">{publishedDate}</p>
      </div>
      <p className="item-p2">{description}</p>
      <hr className="item-hr" />
    </li>
  )
}

export default BlogItem
