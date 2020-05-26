import React from 'react'
import { TYPES } from './actions'
import { submitAnswers } from './actions'
import FormText from './FormText'
import FormSelect from './FormSelect'

export default function FormResolver({ id, answer, question }) {
  const { type, options = [] } = question
  const [value, onChange] = React.useState()

  React.useEffect(() => {
    onChange(answer)
  }, [id]) // eslint-disable-line

  const handleSubmit = () => submitAnswers({ id, value })

  switch (type) {
    case (TYPES.DONE): {
      return null
    }
    case (TYPES.INPUT):
      return (
        <FormText
          id={id}
          value={value}
          onChange={onChange}
          onSubmit={handleSubmit}
        />
      )
    case (TYPES.MULTIPLE):
      return (
        <FormSelect
          id={id}
          options={options}
          value={value}
          multiple
          onChange={onChange}
          onSubmit={handleSubmit}
        />
      )
    default:
      return (
        <FormSelect
          id={id}
          options={options}
          value={value}
          onChange={onChange}
          onSubmit={handleSubmit}
        />
      )
  }
}

