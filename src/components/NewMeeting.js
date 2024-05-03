import React from 'react'
// import { v4 as uuidv4 } from 'uuid';
import { StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { MyUILayout } from './MyUILayout';
// import { meetingId } from '../Modals/NewMeetingModal';
import { useParams } from 'react-router-dom';


const NewMeeting = () => {

  
  const apiKey = 'mmhfdzb5evj2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRGFzaF9SZW5kYXIiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0Rhc2hfUmVuZGFyIiwiaWF0IjoxNzE0NjcwMjUwLCJleHAiOjE3MTUyNzUwNTV9.w1GwiRPBralOnxBWSspFyNGWvIVHTDw0AEW-AN8TBi0'
  const userId = 'Dash_Rendar'
  // const callId = 'kncnHWBHEoI2'//i can define
  // const callId = copiedCallId !== undefined ? copiedCallId : meetingId;
  const { callId } = useParams();
  console.log(callId);

  // ** note: token and userid should be matched in some way ,these are from demo credentials
  // use auth users for this in some way

  const user = {
      id: userId,
      name: 'Oliver',
      image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
  };

  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call('default', callId);
  call.join({ create: true });

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  )
}

export default NewMeeting
