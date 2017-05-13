import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import TeamMembersList from './TeamMembersList'

const members = []

members.push({
  id: 'teammemberid1',
  name: 'aracely aguilar'
})

members.push({
  id: 'teammemberid2',
  name: 'carlos martinez'
})

class KudoCardEditor extends React.Component {

  constructor (props) {
    super(props)
    this.state = {content: props.content}
  }

  shouldComponentUpdate () {
    return true
  }

  handleContentChange (ev) {
    console.log('changing value?')
    this.setState({
      content: ev.target.value
    })
  }

  handleSaveKudo () {
    console.log('saving kudo', this.state.content)
    // TODO hit the API
    this.props.handleClose()
  }

  addLineBreaks () {
    return this.state.content.split('\n').join('<br />')
  }

  handleOnSelectedTeamMember (mmbr) {
    const id = mmbr.target.getAttribute('data-mmbr-id')

    const member = members.find((itm) => {
      return itm.id === id
    })

    console.log('selecting team member', member)
  }

  render () {
    const textAreaStyle = {
      maxWidth: '100%'
    }


    return (
      <div>
        <h2>{'Your team members :)'}</h2>
        <TeamMembersList
            handleOnMemberSelected={this.handleOnSelectedTeamMember.bind(this)}
            members={members}
        />
        <hr />
        <button onClick={this.props.handleClose}>{'X'}</button>
        <textarea
            defaultValue={this.state.content}
            onChange={this.handleContentChange.bind(this)}
            style={textAreaStyle}
        />

        <hr />
        {'Preview'}
        <br />
        <ReactMarkdown source={this.addLineBreaks()} />
        <hr />
        <button
            className="action"
            onClick={this.handleSaveKudo.bind(this)}
        >
          {'Send Kudos!'}
        </button>
      </div>
    )
  }
}

KudoCardEditor.propTypes = {
  content: PropTypes.string,
  handleClose: PropTypes.func.isRequired
}

KudoCardEditor.defaultProps = {
  content: '**thanks for your support!**'
}

export default KudoCardEditor
