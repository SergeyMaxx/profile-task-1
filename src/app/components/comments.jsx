import React from 'react'
import {Input} from 'antd'
import PropTypes from 'prop-types'

const {TextArea} = Input

const Comments = ({selectedComments, setSelectedComments}) => {
  return (
    <>
      <TextArea
        className="t-a"
        rows={1}
        placeholder="Комментарии"
        value={selectedComments}
        onChange={e => setSelectedComments(e.target.value)}
      />
    </>
  )
}

Comments.propTypes = {
  selectedComments: PropTypes.string.isRequired,
  setSelectedComments: PropTypes.func.isRequired
}

export default Comments