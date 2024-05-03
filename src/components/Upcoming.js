import React, { useContext } from 'react'
import { ZoomContext } from '../App'
import MeetingCard from './MeetingCard/MeetingCard'

const Upcoming = () => {

  const { upcomingMeetings } = useContext(ZoomContext)

  return (
    <div className='p-8 flex flex-col gap-6'>
    <h2 className='text-3xl font-semibold'>Upcoming Meetings</h2>

    <div className='flex flex-wrap gap-6'>
      {
        upcomingMeetings.map((meeting) => {
          return <MeetingCard key={meeting.meetingId} meetingId={meeting.meetingId} dateTime={meeting.dateTime} desc={meeting.decsription} />
        })
      }
    </div>

  </div>
  )
}

export default Upcoming
