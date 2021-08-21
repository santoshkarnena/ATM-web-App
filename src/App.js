import {Component} from 'react'
import './App.css'
import Home from './components/Home'
import UserDetails from './components/UserDetails'

const usersList = [
  {id: 1, userName: 'Santosh', balance: '20000'},
  {
    id: 2,
    userName: 'Jaswanth',
    balance: '25000',
  },
  {id: 3, userName: 'Pavan', balance: '13000'},
  {
    id: 4,
    userName: 'Ram',
    balance: '35000',
  },
  {id: 5, userName: 'Sai', balance: '200000'},
  {
    id: 6,
    userName: 'Rajesh',
    balance: '55000',
  },
  {id: 7, userName: 'Kumar', balance: '130500'},
  {
    id: 8,
    userName: 'Krishna',
    balance: '235000',
  },
]

class App extends Component {
  state = {showDetails: true, clickedUserId: ''}

  clickOnUser = id => {
    console.log(id)
    this.setState({showDetails: false, clickedUserId: id})
  }

  getData = id => usersList.filter(eachUser => eachUser.id === id)

  render() {
    const {showDetails, clickedUserId} = this.state
    const clickedData = this.getData(clickedUserId)

    return (
      <div className="app-container">
        <div className="app-card">
          {showDetails ? (
            <Home clickOnUser={this.clickOnUser} usersList={usersList} />
          ) : (
            <UserDetails userData={clickedData[0]} />
          )}
        </div>
      </div>
    )
  }
}

export default App
