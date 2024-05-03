import React from 'react'
import icon from '../../assets/icons/upcoming.svg'
import { avatarImages } from '../../assets/constants'

const MeetingCard = ( props ) => {

  const {date,time} = props;
  const {meetingId,dateTime,desc} = props;

  return (
    <div className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-[#1c1f2e] px-5 py-8 xl:max-w-[568px]">
        
      <article className="flex flex-col gap-5">
        <img src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{desc ? desc : 'Instant meeting'}</h1>
            <p className="text-base font-normal">{dateTime !== undefined ? dateTime : (date + ',  ' + time)}</p>
            <p>{meetingId && `Meeting ID: ${meetingId}`}</p>
          </div>
        </div>
      </article>

      <article className="flex justify-center mb-10">
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className='rounded-full absolute'
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex items-center justify-center absolute left-[136px] size-10 rounded-full bg-[#1e2757]">
            +5
          </div>
        </div>
      </article>

    </div>
  )
}

export default MeetingCard
