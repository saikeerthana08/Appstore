// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActive ? 'active' : ''

  const onClickTab = () => {
    updatedActiveTabId(tabId)
  }

  return (
    <li className="list-item-container">
      <button
        type="button"
        onClick={onClickTab}
        className={`button ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
