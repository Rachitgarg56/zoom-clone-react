import { CallControls, CallingState, SpeakerLayout, StreamTheme, useCallStateHooks } from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
// import { MyParticipantList } from './MyParticipantList';
// import { MyFloatingLocalParticipant } from './MyFloatingLocalParticipant';

// ... rest of the App.tsx code

export const MyUILayout = () => {
    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();
  
    if (callingState !== CallingState.JOINED) {
      return <div>Loading...</div>;
    }
  
    return (
      <StreamTheme>
        <SpeakerLayout participantsBarPosition='bottom' />
        <CallControls />
      </StreamTheme>
    );
  };