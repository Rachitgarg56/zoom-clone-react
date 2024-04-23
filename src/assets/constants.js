import {ReactComponent as Home} from '../assets/icons/Home.svg'
import {ReactComponent as Upcoming} from '../assets/icons/upcoming.svg'
import {ReactComponent as Previous} from '../assets/icons/previous.svg'
import {ReactComponent as Recording} from '../assets/icons/Video.svg'
import {ReactComponent as PersonalRoom} from '../assets/icons/add-personal.svg'

import addMeetingIcon from './icons/add-meeting.svg';
import joinMeetingIcon from './icons/join-meeting.svg';
import scheduleIcon from './icons/schedule.svg';
import recordingsIcon from './icons/recordings.svg';

export const sidebarItems = [{id: 1,image: <Home/>,name: 'Home',path: '/'},
                            {id: 2,image: <Upcoming/>,name: 'Upcoming',path: '/upcoming'},
                            {id: 3,image: <Previous/>,name: 'Previous',path: '/previous'},
                            {id: 4,image: <Recording/>,name: 'Recording',path: '/recording'},
                            {id: 5,image: <PersonalRoom/>,name: 'PersonalRoom',path: '/personal-room'}]

export const homeCardsData = [
    {
        id: 1,
        img: addMeetingIcon,
        title: "New Meeting",
        description: "Start an instant meeting",
        bgColor: '#FF742E',
    },
    {
        id: 2,
        img: joinMeetingIcon,
        title: "Join Meeting",
        description: "via invitation link",
        bgColor: '#0E78F9',
    },
    {
        id: 3,
        img: scheduleIcon,
        title: "Schedule Meeting",
        description: "Plan your meeting",
        bgColor: '#830EF9',
    },
    {
        id: 4,
        img: recordingsIcon,
        title: "View Recordings",
        description: "Meeting Recordings",
        bgColor: '#F9A90E',
    }
];
                            
