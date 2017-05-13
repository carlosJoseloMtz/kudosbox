import PropTypes from 'prop-types'
import React from 'react'

class TeamMembersList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {members: props.members}
  }

  shouldComponentUpdate () {
    return true
  }

  handleInternalMemberSelected (ev) {
    const member = ev.target.getAttribute('data-mmbr-id')

    // Uncheck all
    document.querySelectorAll('li[data-mmbr-id]').
      forEach((itm) => {
        itm.classList.remove('selected')
      })

    // Check only the new one :)
    document.querySelector(`li[data-mmbr-id='${member}']`).
      classList.add('selected')

    this.props.handleOnMemberSelected(ev)
  }

  render () {
    const list = this.state.members.map((mmbr) => {
      return (
        <li
            data-mmbr-id={mmbr.id}
            key={mmbr.id}
            onClick={this.handleInternalMemberSelected.bind(this)}
        >
          {mmbr.name}
        </li>
      )
    })

    return (
      <ul className="team-members">
        {list}
      </ul>
    )
  }
}

TeamMembersList.propTypes = {
  handleOnMemberSelected: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TeamMembersList
