import { RouterProvider } from "react-router-dom";
import route from "./router/route";
import { RedirectToSignIn, SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";

export const ZoomContext = createContext();

function App() {

  const [openNewMeetingModal,setOpenNewMeetingModal] = useState(false)
  const [openJoinMeetingModal,setOpenJoinMeetingModal] = useState(false)
  const [openScheduleMeetingModal,setOpenScheduleMeetingModal] = useState(false)
  const [previousMeetings, setPreviousMeetings] = useState([])
  const [upcomingMeetings, setUpcomingMeetings] = useState([])
  const [isSideDialog, setIsSideDialog] = useState(false)

  return (
      <ZoomContext.Provider value={{openNewMeetingModal,setOpenNewMeetingModal,openJoinMeetingModal,setOpenJoinMeetingModal,previousMeetings,setPreviousMeetings,openScheduleMeetingModal,setOpenScheduleMeetingModal,upcomingMeetings,setUpcomingMeetings,isSideDialog,setIsSideDialog}}>
        <SignedOut>
          {/* <SignInButton id="sign-in-button" /> */}
          <RedirectToSignIn/>
        </SignedOut>

        <SignedIn>
          <RouterProvider router={route} />
        </SignedIn>
      </ZoomContext.Provider>
  )
}

export default App;