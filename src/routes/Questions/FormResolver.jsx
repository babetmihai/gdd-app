import React from 'react'
import { TYPES } from './actions'

import FormText from './FormText'
import FormSelect from './FormSelect'

export default function FormResolver({ id, value, onChange, type, options }) {

  switch (type) {
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

