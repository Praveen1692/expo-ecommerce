import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

function App() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  )
}

export default App