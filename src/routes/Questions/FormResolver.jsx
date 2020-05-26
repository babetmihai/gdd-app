import React from 'react'
import { TYPES } from './actions'

import FormText from './FormText'
import FormSelect from './FormSelect'

export default function FormResolver({ id, answers, type, options }) {
  const [value, onChange] = React.useState()
  React.useEffect(() => {
    onChange(answers)
  }, [id]) // eslint-disable-line

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
        />
      )
    default:
      return (
        <FormSelect
          id={id}
          options={options}
          value={value}
          onChange={onChange}
        />
      )
  }
}

