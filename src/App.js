import React, {useState} from 'react'
import TowerDropdown from './app/components/towerDropdown'
import FloorDropdown from './app/components/floorDropdown'
import ConversationDropdown from './app/components/conversationDropdown'
import DatePicker from './app/components/dataPicker'
import Comments from './app/components/comments'

function App() {
  const [selectedTower, setSelectedTower] = useState('')
  const [selectedFloor, setSelectedFloor] = useState('')
  const [selectedConversation, setSelectedConversation] = useState('')
  const [selectedDate, setSelectedDate] = useState([])
  const [selectedComments, setSelectedComments] = useState('')

  const handleClear = () => {
    setSelectedTower('')
    setSelectedFloor('')
    setSelectedConversation('')
    setSelectedDate([])
    setSelectedComments('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (selectedTower && selectedFloor && selectedConversation
      && selectedDate.length && selectedComments)
      console.log(JSON.stringify({
        selectedTower,
        selectedFloor,
        selectedConversation,
        selectedDate,
        selectedComments
      }))
  }

  return (
    <form className="container__title" onSubmit={handleSubmit}>
      <h1>Бронирование переговорной</h1>
      <div className="form-container">
        <TowerDropdown
          selectedTower={selectedTower}
          setSelectedTower={setSelectedTower}
        />
        <FloorDropdown
          selectedFloor={selectedFloor}
          setSelectedFloor={setSelectedFloor}
        />
        <ConversationDropdown
          selectedConversation={selectedConversation}
          setSelectedConversation={setSelectedConversation}
        />
      </div>
      <div>
        <Comments
          selectedComments={selectedComments}
          setSelectedComments={setSelectedComments}
        />
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <br/>
      <div className="container">
        <button type="submit" className="select-dropdown__button dispatch-clear">
          Отправить
        </button>
        <button
          onClick={handleClear}
          className="select-dropdown__button dispatch-clear"
        >
          Очистить
        </button>
      </div>
    </form>
  )
}

export default App