import React, { useContext } from 'react'
import MeetingCard from './MeetingCard/MeetingCard'
import { ZoomContext } from '../App'

const Previous = () => {

  const { previousMeetings } = useContext(ZoomContext)

  return (
    <div className='p-8 flex flex-col gap-6'>
      <h2 className='text-3xl font-semibold'>Previous Calls</h2>

      <div className='flex flex-wrap gap-6'>
        {
          previousMeetings.map((meeting,idx) => {
            return <MeetingCard key={idx} date={meeting.date} time={meeting.time} />
          })
        }
      </div>

    </div>
  )
}

export default Previous
