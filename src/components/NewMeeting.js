import React from 'react'
import { StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { MyUILayout } from './MyUILayout';
import { useParams } from 'react-router-dom';


const NewMeeting = () => {

  
  const apiKey = 'mmhfdzb5evj2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQ2FsbGlzdGFfTWluZyIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvQ2FsbGlzdGFfTWluZyIsImlhdCI6MTcyMjI1OTM5NSwiZXhwIjoxNzIyODY0MjAwfQ.gAz71dFaRNEiOJJ7bLt2UALnJEH6-ODarG8-qkvW3og'
  const userId = 'Callista_Ming'
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
