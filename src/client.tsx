import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start/client'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StartClient />
    </StrictMode>,
    {
      onRecoverableError: import.meta.env.DEV
        ? () => {} // Replit's proxy injects scripts that cause unavoidable hydration mismatches in dev
        : undefined,
    },
  )
})
