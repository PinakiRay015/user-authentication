import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const App = () => {
  return (
    <div className="flex justify-between bg-black text-white px-3 py-4">
      <h1 className="text-2xl font-bold">Brand</h1>
      <header>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
};

export default App;
