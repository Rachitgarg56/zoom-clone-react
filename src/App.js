import { RouterProvider } from "react-router-dom";
import route from "./router/route";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <RouterProvider router={route} />
      </SignedIn>
    </>
  )
}

export default App;
