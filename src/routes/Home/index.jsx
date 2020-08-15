import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Typography variant="h2">GDD Generator</Typography>
      <Typography variant="h4">Create yout Game Design Document</Typography>
      <Button
        color="secondary"
        variant="outlined"
        size="large"
        component={Link}
        to="/form"
      >
        Start
      </Button>
    </div>
  )
}