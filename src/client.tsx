import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start/client'

if (import.meta.env.DEV) {
  document.querySelectorAll('script[src*="replco"], script[src*="replit"]').forEach((el) => el.remove())
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StartClient />
    </StrictMode>,
  )
})
