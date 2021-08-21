import {Component} from 'react'
import UserCard from '../UserCard'
import './index.css'

class Home extends Component {
  render() {
    const {usersList, clickOnUser} = this.props

    return (
      <div className="home-container">
        <div className="users-card-container">
          {usersList.map(eachUser => (
            <UserCard
              clickOnUser={clickOnUser}
              userData={eachUser}
              key={eachUser.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
