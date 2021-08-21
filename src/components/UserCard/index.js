import './index.css'

const UserCard = props => {
  const {userData, clickOnUser} = props
  const {userName, balance, id} = userData
  const firstLetter = userName[0].toUpperCase()

  const onClickOnUser = () => {
    console.log(id)
    clickOnUser(id)
  }

  return (
    <button className="user-button" type="button" onClick={onClickOnUser}>
      <div className="user-card">
        <div className="name-container">
          <div className="initial">{firstLetter}</div>
          <p className="name">{userName}</p>
        </div>

        <div className="balance-container">
          <h1 className="current-balance">Current Balance</h1>
          <p className="balance">{balance}</p>
        </div>
      </div>
    </button>
  )
}

export default UserCard
