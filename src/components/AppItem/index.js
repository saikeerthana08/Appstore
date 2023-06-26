// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-list-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
