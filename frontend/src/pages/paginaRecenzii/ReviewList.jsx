import React from 'react'
import { FaStar } from 'react-icons/fa';
import { MdOutlineVerified } from "react-icons/md";
const ReviewList = ({props}) => {

  const dataRecenzie = props.created_at;
  const createData = new Date(dataRecenzie);
  const today = new Date();
  const diffTime = today-createData;
  const diffDay = Math.floor(diffTime/(1000*60*60*24))

  return (
    <li className='flex border px-1 py-4 border-button/40 rounded-lg '>
      <div className='flex-1 pr-3 border-r border-r-button/30'>
        <div className='flex items-center space-x-3'>
          <img className='w-8 h-8 rounded-full' src={`${import.meta.env.BASE_URL}${props.poza_profil}`} alt="" />
          <div className='text-[14px] leading-5'>
            <p className='font-medium'>{props.nume} {props.prenume}</p>
            <p className='text-gray-400'>{props.tara}, {props.oras}</p>
          </div>
        </div>
        <div className='text-[12.5px] flex items-center space-x-2 mt-3 text-lime-400'>
          <MdOutlineVerified size={16}/>
          <p>Cititor verificat</p>
        </div>
      </div>


      <div className='flex-2 px-3 pb-5'>
        <div className='flex items-center justify-between'>
          <ul className='flex space-x-1'>
            {
              [1,2,3,4,5].map(star=> <FaStar className={`${star<=props.rating?"text-yellow-400":"text-gray-400"}`}/>)
            }
          </ul>
          <div>
            <p className='text-gray-400 text-[12.5px]'>{diffDay} zile</p>
          </div>
        </div>

        <div className='mt-3'>
          <p>{props.titlu}</p>
          <p className='mt-1 text-gray-400 text-[12px]'>{props.descriere}</p>
        </div>
      </div>
    </li>
  )
}

export default ReviewList
