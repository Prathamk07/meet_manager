import React from 'react'

const CreateMeeting = () => {
  return (
    <div>
        <div className='w-3/5 mx-auto bg-slate-200 rounded-xl p-5 my-5'>
            
            <h3 className='text-xl'>
                New Meeting
            </h3>

            <input className='text-md p-2 rounded-xl my-2 w-1/2' type="text" placeholder='Title of the Meeting' />
            <input className='text-md p-2 rounded-xl my-2 mx-2 w-1/5' type="time" placeholder='Time' />
            <input className='text-md p-2 rounded-xl my-2 mx-2 w-1/4' type="date" placeholder='Date' />
            <textarea name="description" placeholder='description' className='rounded-xl p-2 w-full' rows={10} id=""></textarea>
            <div className='flex justify-center'>

            <button className='bg-blue-800 text-white w-2/5 px-3 py-2 rounded-xl '>Create</button>
            </div>
        </div>
    </div>
  )
}

export default CreateMeeting
