import React from 'react'
import KudoCardEditor from '../components/KudoCardEditor'

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

  shouldDisplayEditor () {
    return this.state.displayKudoEditor
        ? <KudoCardEditor display={this.state.displayKudoEditor} />
        : ''
  }

  render () {
    return (
      <div>
        <p>{'Hey there man / woman!'}</p>
        <p>{'Give it up for someone! :)'}</p>

        <hr />
        <button onClick={this.handleThankSomeoneClick.bind(this)}>
          {'Tell someone how awesome he/she\'s been to the team'}
        </button>
        <hr />
        {this.shouldDisplayEditor()}
      </div>
    )
  }
}
