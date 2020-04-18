import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { selectModal } from 'core/modals'

const MODALS = {

}

function Modals({ type, ...props })  {
  if (!type) return null
  const Modal = MODALS[type]

  return (
    <Suspense>
      <Modal {...props} />
    </Suspense>
    
  )
}

export default connect(selectModal)(Modals)