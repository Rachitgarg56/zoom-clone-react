import React from 'react'
import { StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { MyUILayout } from './MyUILayout';
import { useParams } from 'react-router-dom';


const NewMeeting = () => {

  
  const apiKey = 'mmhfdzb5evj2'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQy0zUE8iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0MtM1BPIiwiaWF0IjoxNzE5NTUzNjM1LCJleHAiOjE3MjAxNTg0NDB9.9yGJOOHnW6roIJYPErQN0Id4jmIU8jgCjB9jCqJmrt0'
  const userId = 'C-3PO'
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
