import { RouterProvider } from "react-router-dom";
import route from "./router/route";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";

export const ZoomContext = createContext();

function App() {

  const [openNewMeetingModal,setOpenNewMeetingModal] = useState(false)
  const [openJoinMeetingModal,setOpenJoinMeetingModal] = useState(false)
  const [openScheduleMeetingModal,setOpenScheduleMeetingModal] = useState(false)
  const [previousMeetings, setPreviousMeetings] = useState([])
  const [upcomingMeetings, setUpcomingMeetings] = useState([])
  const [isSideDialog, setIsSideDialog] = useState(false)

  const [buttonRendered, setButtonRendered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setButtonRendered(true);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (buttonRendered) {
      const btn = document.getElementById("sign-in-button");
      if (btn !== null) btn.click();
      // btn.click();
    }
  }, [buttonRendered]);

  return (
      <ZoomContext.Provider value={{openNewMeetingModal,setOpenNewMeetingModal,openJoinMeetingModal,setOpenJoinMeetingModal,previousMeetings,setPreviousMeetings,openScheduleMeetingModal,setOpenScheduleMeetingModal,upcomingMeetings,setUpcomingMeetings,isSideDialog,setIsSideDialog}}>
        <SignedOut>
          <SignInButton id="sign-in-button" />
        </SignedOut>

        <SignedIn>
          <RouterProvider router={route} />
        </SignedIn>
      </ZoomContext.Provider>
  )
}

export default App;