// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDenomination = value => {
    const {amount} = this.state
    const newValue = amount - value
    console.log(value)
    if (newValue >= 0) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="cash-withdrawal">
          <div className="first-container">
            <p className="first-container-heading">S</p>
            <p>Sarah Williams</p>
          </div>
          <div className="second-container">
            <div>
              <p>Your Balance</p>
            </div>
            <div>
              <p>{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="third-container">
            <p>Withdraw</p>
            <p className="third-container-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="items">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  onDenomination={this.onDenomination}
                  denominationList={eachItem}
                  key={eachItem.value}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
