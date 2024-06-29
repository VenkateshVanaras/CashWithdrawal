// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationList, onDenomination} = props
  const {value} = denominationList
  const selectAmount = () => {
    onDenomination(value)
  }

  return (
    <li>
      <button
        type="button"
        onClick={selectAmount}
        className="list-item"
        key={value}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
