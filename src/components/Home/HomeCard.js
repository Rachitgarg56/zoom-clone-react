import React from 'react'
import { openNewMeetingModal } from '../../Modals/NewMeetingModal'

const HomeCard = ( { img, title, description, bgColor, id } ) => {

    const handleClick = () => {
        if (id === 1) openNewMeetingModal()
    }

  return (
    <div className={`px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}
      style={{backgroundColor: bgColor}}
    >
        <div className="flex-center glassmorphism size-12 rounded-[10px]">
            <img src={img} alt="meeting" width={27} height={27} />
        </div>
        
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg font-normal">{description}</p>
        </div>
    
    </div>
  )
}

export default HomeCard
