import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'

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

  addLineBreaks () {
    const lines = this.state.content.split('\n').map((itm, key) => {
        return <span>{itm} <br /></span>
    })

    console.log('returning', lines)
    return lines
  }

  render () {
    const textAreaStyle = {
      maxWidth: '100%'
    }

    return (
      <div>
        <button onClick={this.props.handleClose}>{'X'}</button>
        <textarea onChange={this.handleContentChange.bind(this)} style={textAreaStyle}>{this.state.content}</textarea>

        <hr />
        {'Preview'}
        <br />
        <ReactMarkdown source={this.addLineBreaks()} />
      </div>
    )
  }
}

KudoCardEditor.propTypes = {
  content: PropTypes.string,
  handleClose: PropTypes.func.isRequired
}

KudoCardEditor.defaultProps = {
  content: 'thanks for your support!'
}

export default KudoCardEditor
