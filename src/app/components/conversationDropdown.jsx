import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ConversationDropdown = ({selectedConversation, setSelectedConversation}) => {
  const [active, setActive] = useState(false)

  const options = [
    {value: 1, text: 'переговорка 1'},
    {value: 2, text: 'переговорка 2'},
    {value: 3, text: 'переговорка 3'},
    {value: 4, text: 'переговорка 4'},
    {value: 5, text: 'переговорка 5'},
    {value: 6, text: 'переговорка 6'},
    {value: 7, text: 'переговорка 7'},
    {value: 8, text: 'переговорка 8'},
    {value: 9, text: 'переговорка 9'},
    {value: 10, text: 'переговорка 10'}
  ]

  return (
    <div className="select-dropdown" onClick={() => setActive(!active)}>
      <button className="select-dropdown__button">
        {selectedConversation || 'Выберите переговорку'}
      </button>
      <ul className={'select-dropdown__list ' + (active ? 'active' : '')}>
        {options.map(el => (
          <li
            key={el.value}
            className={'select-dropdown__list-item ' + (el.text === selectedConversation ? 'selected' : '')}
            onClick={() => setSelectedConversation(el.text)}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

ConversationDropdown.propTypes = {
  selectedConversation: PropTypes.string.isRequired,
  setSelectedConversation: PropTypes.func.isRequired
}

export default ConversationDropdown