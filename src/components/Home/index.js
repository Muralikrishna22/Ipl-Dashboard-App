import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchCards()
  }

  getMatchCards = async () => {
    const response = await fetch(teamsApiUrl)
    const teamsData = await response.json()

    const updatedData = teamsData.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teams: updatedData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="app-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="app-name">Ipl Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Plane" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="match-cards-container">
              {teams.map(team => (
                <TeamCard teamDetails={team} key={team.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
