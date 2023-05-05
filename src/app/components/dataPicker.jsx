import React from 'react'
import {DatePicker, Space} from 'antd'
import PropTypes from 'prop-types'

const {RangePicker} = DatePicker

const DataPicker = ({selectedDate, setSelectedDate}) => {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        className="mt t-a"
        value={selectedDate}
        onChange={dates => setSelectedDate(dates)}
      />
    </Space>
  )
}

DataPicker.propTypes = {
  selectedDate: PropTypes.array.isRequired,
  setSelectedDate: PropTypes.func.isRequired
}

export default DataPicker