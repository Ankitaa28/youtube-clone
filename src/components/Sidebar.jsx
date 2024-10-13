import React from 'react'
import { MdHomeFilled,
    MdOutLineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater
 } from "react-icons/md";
 import { PiThumbsUp } from "react-icons/pi";
const Sidebar = () => {
    const mainLinks=[
        {
            icon:<MdHomeFilled/>,
            name: "Home"
        },
        {
            icon:<MdOutLineSlowMotionVideo/>,
            name: "Shorts"
        },
        {
            icon:<MdSubscriptions/>,
            name: "Subscription"
        }
    ]
    const otherLink=[
        {
            icon:<MdOutlineVideoLibrary/>,
            name: "Library"
        },
        {
            icon:<MdHistory/>,
            name: "History"
        },
        {
            icon:<MdOutlineWatchLater/>,
            name: "Watch Later"
        },
        {
            icon:< PiThumbsUp />,
            name: "Like"
        }
    ]

  return (
    <div>
      <ul>
        {mainLinks.map(({icon,name})=>{
            
            return <li key={name}>
                <a href="#">{icon}</a>
            </li>
        })}
      </ul>
    </div>
  )
}

export default Sidebar
