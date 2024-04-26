import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Upcoming from '../components/Upcoming'
import Previous from '../components/Previous'
import Recording from '../components/Recording'
import PersonalRoom from '../components/PersonalRoom'
import Home from '../components/Home/Home'
import NewMeeting from '../components/NewMeeting'


const route = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/upcoming',
            element:<Upcoming/>
        },
        {
            path:'/previous',
            element:<Previous/>
        },
        {
            path:'/recording',
            element:<Recording/>
        },
        {
            path:'personal-room',
            element:<PersonalRoom/>
        }
    ]
},{
    path:'/meeting/:callId',
    element:<NewMeeting/>
},
])

export default route
