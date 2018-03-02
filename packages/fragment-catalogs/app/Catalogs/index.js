import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './styles.scss'

class Catalogs extends Component {
  render() {
    const { onIncrement, counter } = this.props

    return (
      <div className="catalogs">
        <div>
          List of catalogs list, total {counter}
          <button type="button" onClick={onIncrement}>+ Increment</button>
        </div>
      </div>
    )
  }
}

const mapProps = (counter) => ({ counter })

const mapActions = {
  onIncrement: () => ({ type: 'INCREMENT_CATALOGS' })
}

export default connect(mapProps, mapActions)(Catalogs)
