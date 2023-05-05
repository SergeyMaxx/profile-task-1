import React, {useState} from 'react'
import PropTypes from 'prop-types'

const TowerDropdown = ({selectedTower, setSelectedTower}) => {
  const [active, setActive] = useState(false)

  const options = [
    {value: 1, text: 'Башня А'},
    {value: 2, text: 'Башня Б'}
  ]

  return (
    <div className="select-dropdown" onClick={() => setActive(!active)}>
      <button className="select-dropdown__button">
        {selectedTower || 'Выберите башню'}
      </button>
      <ul className={'select-dropdown__list ' + (active ? 'active' : '')}>
        {options.map(el => (
          <li
            className={'select-dropdown__list-item ' + (el.text === selectedTower ? 'selected' : '')}
            key={el.value}
            onClick={() => setSelectedTower(el.text)}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

TowerDropdown.propTypes = {
  selectedTower: PropTypes.string.isRequired,
  setSelectedTower: PropTypes.func.isRequired
}

export default TowerDropdown