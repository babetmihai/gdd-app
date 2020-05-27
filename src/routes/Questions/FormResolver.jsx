import React from 'react'
import { TYPES } from 'core/gdd'
import FormText from './FormText'
import FormSelect from './FormSelect'
import FormDone from './FormDone'


export default function FormResolver({ id, answer, question }) {
  const { type, options = [] } = question

  switch (type) {
    case (TYPES.DONE): return <FormDone />
    case (TYPES.INPUT):
      return (
        <FormText
          id={id}
          answer={answer}
        />
      )
    case (TYPES.MULTIPLE):
      return (
        <FormSelect
          id={id}
          options={options}
          answer={answer}
          multiple
        />
      )
    default:
      return (
        <FormSelect
          id={id}
          options={options}
          answer={answer}
        />
      )
  }
}

