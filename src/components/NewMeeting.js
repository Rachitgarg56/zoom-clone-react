import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { MyUILayout } from './MyUILayout';


// const apiKey = process.env.REACT_APP_STREAM_APIKEY
// const userId = uuidv4();
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiWW9kYSIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvWW9kYSIsImlhdCI6MTcxMzk0NzE3NSwiZXhwIjoxNzE0NTUxOTgwfQ.JSZf1tRXfa89-2uWkKJvEkekmhQ-PC8IAsQTU6xC-YA'
// const callId = 'kncnHWBHEoI2'; 

const apiKey = 'mmhfdzb5evj2'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiWW9kYSIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvWW9kYSIsImlhdCI6MTcxMzk0NzE3NSwiZXhwIjoxNzE0NTUxOTgwfQ.JSZf1tRXfa89-2uWkKJvEkekmhQ-PC8IAsQTU6xC-YA'
const userId = 'Yoda'
const callId = 'kncnHWBHEoI2'//i can define

// note: token and userid should be matched in some way ,these are from demo credentials

const user = {
    id: userId,
    name: 'Oliver',
    image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });



const NewMeeting = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  )
}

export default NewMeeting
