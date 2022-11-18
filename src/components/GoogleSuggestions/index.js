// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickText = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-logo"
            />
          </div>

          <div className="search-container">
            <div className="search-box-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-element"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="list-container">
              {filteredList.map(eachItem => (
                <SuggestionItem
                  userDetails={eachItem}
                  key={eachItem.id}
                  clickText={this.clickText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
