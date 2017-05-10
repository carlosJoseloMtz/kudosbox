import React from 'react'
import KudoCardEditor from '../components/KudoCardEditor'
import TeamList from '../components/TeamList'

export default class Home extends React.Component {

  constructor (props) {
    super(props)
    this.state = {displayKudoEditor: false}
  }

  shouldComponentUpdate () {
    return true
  }

  handleThankSomeoneClick () {
    this.setState({
      displayKudoEditor: true
    })
  }

  handleCloseEditor () {
    this.setState({
      displayKudoEditor: false
    })
  }

  displayEditor () {
    if (this.state.displayKudoEditor) {
      return <KudoCardEditor handleClose={this.handleCloseEditor.bind(this)} />
    }

    return ''
  }

  render () {
    return (
      <div>
        <h2>{'Team List'}</h2>
        <TeamList />
        <p>{'Hey there man / woman!'}</p>
        <p>{'Give it up for someone! :)'}</p>
        <hr />
        <button onClick={this.handleThankSomeoneClick.bind(this)}>
          {'Tell someone how awesome he/she\'s been to the team'}
        </button>
        <hr />
        {this.displayEditor()}
      </div>
    )
  }
}
