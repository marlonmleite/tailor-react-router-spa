import React, { Component } from 'react'
import { Link } from 'react-router'
import './styles.scss'
import NavItem from '../NavItem'
import Logo from '../Logo'

const items = [ 0, 1, 2, 3 ]

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Test',
      active: 0
    }
  }

  toggle() {
    this.setState({ name: this.state.name === 'Test' ? 'New' : 'Test' })
  }

  selectNavItem(index) {
    this.setState({ active: index })
  }

  render() {
    return (
      <div className="header" onClick={() => this.selectNavItem(0)}>
        <Link to="/">
          <Logo/>
        </Link>
        <Link to="/contacts">
          <NavItem active={1 === this.state.active} onClick={() => this.selectNavItem(1)}/>
        </Link>
        <Link to="/catalogs">
          <NavItem active={2 === this.state.active} onClick={() => this.selectNavItem(2)}/>
        </Link>
      </div>
    )
  }
}

export default Header
