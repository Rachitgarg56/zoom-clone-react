import {ReactComponent as Home} from '../assets/icons/Home.svg'
import {ReactComponent as Upcoming} from '../assets/icons/upcoming.svg'
import {ReactComponent as Previous} from '../assets/icons/previous.svg'
import {ReactComponent as Recording} from '../assets/icons/Video.svg'
import {ReactComponent as PersonalRoom} from '../assets/icons/add-personal.svg'

export const sidebarItems = [{id: 1,image: <Home/>,name: 'Home',path: '/'},
                            {id: 2,image: <Upcoming/>,name: 'Upcoming',path: '/upcoming'},
                            {id: 3,image: <Previous/>,name: 'Previous',path: '/previous'},
                            {id: 4,image: <Recording/>,name: 'Recording',path: '/recording'},
                            {id: 5,image: <PersonalRoom/>,name: 'PersonalRoom',path: '/personal-room'}]
