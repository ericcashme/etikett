import { memo } from 'react'

export const Comp = memo(() => (
  <div>
    <h1>Component</h1>
  </div>
))

Comp.displayName = 'Comp'
