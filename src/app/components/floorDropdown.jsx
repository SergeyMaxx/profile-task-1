import React, {useState} from 'react'
import PropTypes from 'prop-types'

const FloorDropdown = ({selectedFloor, setSelectedFloor}) => {
  const [active, setActive] = useState(false)

  const options = [
    {value: 3, text: 'Этаж 3'},
    {value: 4, text: 'Этаж 4'},
    {value: 5, text: 'Этаж 5'},
    {value: 6, text: 'Этаж 6'},
    {value: 7, text: 'Этаж 7'},
    {value: 8, text: 'Этаж 8'},
    {value: 9, text: 'Этаж 9'},
    {value: 10, text: 'Этаж 10'},
    {value: 11, text: 'Этаж 11'},
    {value: 12, text: 'Этаж 12'},
    {value: 13, text: 'Этаж 13'},
    {value: 14, text: 'Этаж 14'},
    {value: 15, text: 'Этаж 15'},
    {value: 16, text: 'Этаж 16'},
    {value: 17, text: 'Этаж 17'},
    {value: 18, text: 'Этаж 18'},
    {value: 19, text: 'Этаж 19'},
    {value: 20, text: 'Этаж 20'},
    {value: 21, text: 'Этаж 21'},
    {value: 22, text: 'Этаж 22'},
    {value: 23, text: 'Этаж 23'},
    {value: 24, text: 'Этаж 24'},
    {value: 25, text: 'Этаж 25'},
    {value: 26, text: 'Этаж 26'},
    {value: 27, text: 'Этаж 27'}
  ]

  return (
    <div className="select-dropdown" onClick={() => setActive(!active)}>
      <button className="select-dropdown__button">
        {selectedFloor || 'Выберите этаж'}
      </button>
      <ul className={'select-dropdown__list ' + (active ? 'active' : '')}>
        {options.map(el => (
          <li
            key={el.value}
            className={'select-dropdown__list-item ' + (el.text === selectedFloor ? 'selected' : '')}
            onClick={() => setSelectedFloor(el.text)}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

FloorDropdown.propTypes = {
  selectedFloor: PropTypes.string.isRequired,
  setSelectedFloor: PropTypes.func.isRequired
}

export default FloorDropdown