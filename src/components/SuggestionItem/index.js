// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {userDetails, clickText} = props
  const {suggestion, id} = userDetails

  const onClickText = () => {
    clickText(id, suggestion)
  }

  return (
    <li className="card-container">
      <p className="card-text">{suggestion}</p>
      <button className="button" type="button" onClick={onClickText}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="card-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
