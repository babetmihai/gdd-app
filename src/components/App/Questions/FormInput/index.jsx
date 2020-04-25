import React from 'react'
import Select from './Select'
import Textarea from './Textarea'

export default function FormInput(props) {
  const { id, type, options, value, onChange } = props
  switch (true) {
    case (type === 'input'): {
      return (
        <Textarea
          id={id}
          value={value}
          onChange={onChange}
        />
      )
    }
    case (options.length > 0): {
      return (
        <Select
          id={id}
          options={options}
          value={value}
          multiple={type === 'multiple'}
          onChange={onChange}
        />
      )
    }
    default: return null
  }
}