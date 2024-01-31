// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {userDetails} = props
  console.log(userDetails)

  return (
    <div className="info-container">
      <img
        className="info-img1"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 className="info-h1">Wade Warren</h1>
      <p className="info-p1">Software Developer at UK</p>
    </div>
  )
}

export default UserInfo
