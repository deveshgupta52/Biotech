import React from 'react'
import { Link } from 'react-router-dom'

function Adsidenav() {
  return (
    <div>
      <ul>
                <li className='my-3 bg-light p-2 rounded-start'>
                    <Link className="nav-link">Students</Link>
                </li>
                 <li className='my-3 bg-light p-2 rounded-start'>
                    <Link to={'/adminnews'} className="nav-link">News</Link>
                </li>
                 <li className='my-3 bg-light p-2 rounded-start'>
                    <Link  className="nav-link">Branches</Link>
                </li>
              </ul>
    </div>
  )
}

export default Adsidenav
