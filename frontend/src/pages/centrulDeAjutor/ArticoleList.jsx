import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const ArticoleList = (props) => {
  return (
    <li className='mx-10 max-modf8:mx-3  py-2 border-b'>
      <Link to={props.path} className=' flex items-center justify-between py-2'>
        <p className=''>{props.name}</p>
        <IoIosArrowForward />
      </Link>
    </li>
  )
}

export default ArticoleList
