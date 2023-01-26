import React from 'react'
import {AiFillBell} from 'react-icons/ai'
import {CiInboxIn} from 'react-icons/ci'
import {CiInboxOut} from 'react-icons/ci'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiDraftFill} from 'react-icons/ri'


export const SidebarData = [
    {
         title:'Reminder',
         icon: <AiFillBell size='1.5rem'/>,
         link:'/Reminder'
           
    },
    {
        title:'Inbox',
        icon: <CiInboxIn size='1.5rem'/>,
        link:'/Inbox'
          
   },
   {
    title:'Outbox',
    icon: <CiInboxOut size='1.5rem'/>,
    link:'/Outbox'
      
},
{
    title:'Closed',
    icon: <AiFillCloseCircle size='1.5rem'/>,
    link:'/Closed'
      
},
{
    title:'Draft',
    icon: <RiDraftFill size='1.5rem'/>,
    link:'/Draft'
      
}
]
