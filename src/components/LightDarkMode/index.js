// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isMode: false}

  OnLightMode = () => {
    this.setState({isMode: false})
  }

  OnDarkMode = () => {
    this.setState({isMode: true})
  }

  render() {
    const {isMode} = this.state
    let clickBtn
    let className
    let headingName
    if (isMode === true) {
      clickBtn = (
        <button className="light-btn" type="button" onClick={this.OnLightMode}>
          Dark Mode
        </button>
      )
      className = 'bg-light'
      headingName = 'heading-dark'
    } else {
      clickBtn = (
        <button className="dark-btn" type="button" onClick={this.OnDarkMode}>
          Light Mode
        </button>
      )
      className = 'bg-dark'
      headingName = 'heading-light'
    }

    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className={headingName}>Click to change Mode</h1>
          {clickBtn}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
