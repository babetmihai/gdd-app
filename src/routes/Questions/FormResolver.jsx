import React from 'react'
import { TYPES, submitAnswers, submitForm } from 'core/gdd'
import FormText from './FormText'
import FormSelect from './FormSelect'
import FormDone from './FormDone'


export default function FormResolver({ id, answer, question }) {
  const { type, options = [] } = question
  const [value, onChange] = React.useState()

  React.useEffect(() => {
    onChange(answer)
  }, [id]) // eslint-disable-line

  const handleSubmit = (event) => {
    event.preventDefault()
    submitAnswers({ id, value })
  }

  switch (type) {
    case (TYPES.DONE): {
      return (
        <FormDone
          onSubmit={submitForm}
        />
      )
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

