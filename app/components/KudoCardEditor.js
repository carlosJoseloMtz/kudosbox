import React from 'react'

export default class KudoCardEditor extends React.Component {

  constructor (props) {
    super(props)
    console.log('props')
    console.log(props)
    this.state = {display: true}
  }

  shouldComponentUpdate () {
    return true
  }

  handleClose () {
    console.log('closing element')
    this.setState({
      display: false
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClose.bind(this)}>{'X'}</button>
        {'TODO xD'}
      </div>
    )
  }
}
