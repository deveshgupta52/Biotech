import React from 'react'
import { Link } from 'react-router-dom'
import Adsidenav from '../Elements/Adsidenav'

function Dashboard() {
  return (
    <div>
      <div className="row dash">
        <div className="col-2 h-100 bg-dark">
              <Adsidenav />
        </div>
        <div className="col-10 bg-white">

        </div>
      </div>
    </div>
  )
}

export default Dashboard
