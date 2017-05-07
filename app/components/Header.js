import {Link} from 'react-router-dom'
import React from 'react'

export default () => (
  <div>
    <ul>
      <li>
        <Link to="/auth">
          {'Login'}
        </Link>
      </li>
      <li>
        <Link to="/">
          {'Home'}
        </Link>
      </li>
      <li>
        <Link to="/about">
          {'About'}
        </Link>
      </li>
    </ul>
  </div>
)
