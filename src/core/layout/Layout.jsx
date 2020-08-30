import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Layout({ children }) {

  return (
    <main>
      <nav>
        <NavLink to="/">
          GDD Generator
        </NavLink>
        <NavLink to="/questions">
          Questions
        </NavLink>
        <NavLink to="/results">
          Results
        </NavLink>
      </nav>
      {children}
    </main>

  )
}