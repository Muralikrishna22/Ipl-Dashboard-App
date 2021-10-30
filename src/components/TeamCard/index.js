import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="team-card">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
