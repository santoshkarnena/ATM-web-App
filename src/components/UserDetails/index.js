import {Component} from 'react'
import './index.css'

class UserDetails extends Component {
  state = {withdrawAmount: '', depositAmount: '', amount: '', showError: false}

  componentDidMount() {
    this.initiateAmount()
  }

  initiateAmount = () => {
    const {userData} = this.props
    const {balance} = userData
    console.log(balance)
    this.setState({amount: balance})
  }

  onChangeWithdraw = event => {
    this.setState({withdrawAmount: event.target.value})
  }

  onChangeDeposit = event => {
    this.setState({depositAmount: event.target.value})
  }

  onDeposit = () => {
    const {depositAmount, amount} = this.state
    const updatedAmount = parseInt(depositAmount, 10) + parseInt(amount, 10)

    this.setState({
      amount: updatedAmount,
    })
  }

  onWithDraw = () => {
    const {withdrawAmount, amount} = this.state
    if (parseInt(withdrawAmount, 10) > parseInt(amount, 10)) {
      this.setState({showError: true})
    } else {
      this.setState({
        amount: parseInt(amount, 10) - parseInt(withdrawAmount, 10),
        showError: false,
      })
    }
  }

  render() {
    const {userData} = this.props
    const {userName} = userData
    const {amount, showError} = this.state

    return (
      <div className="details-container">
        <div className="welcome-card">
          <h1 className="name-text">Hi, {userName}</h1>
          <p className="welcome-text">Welcome back to your Bank Account</p>
        </div>
        <div className="balance-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
            alt="balance img"
            className="balance-img"
          />
          <div>
            <h1 className="current-balance">Current Balance</h1>
            <p className="current-balance">{amount}</p>
          </div>
        </div>
        <div className="transactions-section ">
          <div className="deposit-section action">
            <h1 className="action-name">Deposit</h1>
            <input
              placeholder="Enter Amount Here"
              type="number"
              className="user-input"
              onChange={this.onChangeDeposit}
            />
            <button onClick={this.onDeposit} type="button" className="button">
              Ok
            </button>
          </div>
          <div className="withdraw-section action">
            <h1 className="action-name">Withdraw</h1>
            <div className="withdraw-input-section">
              <input
                onChange={this.onChangeWithdraw}
                placeholder="Enter Amount Here"
                type="number"
                className="user-input"
              />
              {showError && <p className="error">*Insufficient Founds</p>}
            </div>
            <button onClick={this.onWithDraw} type="button" className="button">
              Ok
            </button>
          </div>
        </div>
        <button className="back-button" type="button" onClick={this.onGoHome}>
          Go Back
        </button>
      </div>
    )
  }
}

export default UserDetails
