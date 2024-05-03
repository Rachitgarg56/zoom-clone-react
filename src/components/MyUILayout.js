import { CallControls, CallingState, SpeakerLayout, StreamTheme, useCallStateHooks } from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
// import { MyParticipantList } from './MyParticipantList';
// import { MyFloatingLocalParticipant } from './MyFloatingLocalParticipant';
// import { meetingId } from '../Modals/NewMeetingModal';
import { IoCopyOutline } from "react-icons/io5";


export const MyUILayout = () => {

    const {callId} = useParams();

    const navigate = useNavigate();

    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();
  
    if (callingState !== CallingState.JOINED) {
      return <div>Loading...</div>;
    }
  
    return (
      <StreamTheme className='relative'>

        <div className='absolute top-4 right-12 flex flex-col items-center'> 
          <div className='flex items-center gap-2'>
            <IoCopyOutline className='cursor-pointer' onClick={()=>{
              navigator.clipboard.writeText(callId)
              alert('meeting-link copied')
            }}/>
            <p>{callId}</p>
          </div>
          <p>meeting-link</p>
        </div>
        
        <SpeakerLayout participantsBarPosition='bottom' />
        <CallControls 
          // onLeave={() => router.push(`/`)} 
          onLeave={() => navigate(`/`)}
        />
      </StreamTheme>
    );
  };