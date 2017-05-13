import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.state = {menuToggled: props.menuToggled}
  }

  shouldComponentUpdate () {
    return true
  }

  handleMenuClick () {
    this.setState({
      menuToggled: !this.state.menuToggled
    })
  }

  getMenuClass () {
    return this.state.menuToggled
      ? 'toggled'
      : ''
  }

  render () {
    return (
      <div>
        <nav>
          <a
              className="menu"
              href="#!"
              onClick={this.handleMenuClick.bind(this)}
          >
            {'Menu'}
          </a>
          <ul className={this.getMenuClass()}>
            <li>
              <Link
                onClick={this.handleMenuClick.bind(this)}
                to="/auth"
              >
                {'Login'}
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleMenuClick.bind(this)}
                to="/"
              >
                {'Home'}
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleMenuClick.bind(this)}
                to="/about"
              >
                {'About'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
  menuToggled: PropTypes.bool
}

Header.defaultProps = {
  menuToggled: false
}


export default Header
