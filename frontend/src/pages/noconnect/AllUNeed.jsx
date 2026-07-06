import React from 'react'
import { RiShieldCheckLine } from "react-icons/ri";
import AllUNeedList from './AllUNeedList';
import allUNeed from './allUNeed.json'
const AllUNeed = () => {
  const createAllUNeedList = (component)=>{
    return <AllUNeedList 
      id= {component.id}
      key = {component.key}
      icon = {component.icon}
      nume = {component.nume}
      info = {component.info}
    />
  }
  return (
    <div className='max-w-screen-2xl mx-auto px-15 max-modf:px-10 max-modf1:px-8 max-modf8:px-3  py-4'>
      <ul className='flex flex-wrap space-x-3'>
        {allUNeed && allUNeed.map(createAllUNeedList)}
      </ul>
    </div>
    
  )
}

export default AllUNeed
