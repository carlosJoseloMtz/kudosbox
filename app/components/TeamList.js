import PropTypes from 'prop-types'
import React from 'react'

class TeamList extends React.Component {

  shouldComponentUpdate () {
    return true
  }


  handleTeamClick (ev) {
    console.log(ev.target.getAttribute('data-team-id'))
    // TODO indicate what's the current team
  }

  teamQuickView (team) {
    return (
      <li data-team-id={team.id}
          key={team.id}
          onClick={this.handleTeamClick}
      >
        {`team.name - team members ${team.members.length}`}
      </li>
    )
  }

  getTeams () {
    // TODO find the assigned teams

    // If we try to get the assigned teams
    if (this.props.assignedTeams) {
      const assignedOnes = []

      assignedOnes.push({
        id: 'extreamlyweirdid',
        members: [{
          id: 'somerandomid',
          name: 'Aracely Aguilar'
        }, {
          id: 'someotherrandomid',
          name: 'Liliana Rosas'
        }],
        name: 'fsp qa'
      })

      return assignedOnes
    }

    const allTeams = []

    allTeams.push({
      id: 'extreamlyweirdid',
      members: [{
        id: 'somerandomid',
        name: 'Aracely Aguilar'
      }, {
        id: 'someotherrandomid',
        name: 'Liliana Rosas'
      }],
      name: 'fsp qa'
    })

    // Otherwise, return all the existing teams
    return allTeams
  }

  render () {
    const teams = this.getTeams().map((tm) => {
      return this.teamQuickView(tm)
    })

    return (
      <ul>
        {teams}
      </ul>
    )
  }

}

TeamList.propTypes = {
  assignedTeams: PropTypes.bool
}

TeamList.defaultProps = {
  assignedTeams: true
}

export default TeamList
