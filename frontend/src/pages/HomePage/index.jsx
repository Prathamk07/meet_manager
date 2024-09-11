import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className='grid w-3/5 my-5 mx-auto'>
      <div className='flex justify-between my-2'>

        <h3 className='text-2xl'>Meetings </h3>  
        <a href='/create-meeting' className='bg-slate-200 px-3 py-2 rounded-xl'>Create New Meeting</a>
      </div>
        <a href="/meeting">

        <div className='w-full bg-slate-200 px-3 py-2 rounded-xl relative'>
        <span className='text-md'>11/09/2024 - 11:48</span>
        <br />
        <h4 className='text-xl mx-auto text-center my-5'>Topic</h4>
        <p className='w-4/5 mx-auto text-slate-500 mb-10'>Lorem, ipsum.
        Voluptate, expedita.
        Optio, eum!
        Repellat, et?
        Voluptatem, sit.
        Dolores, dolore.
        Nemo, officia.
        Veniam, blanditiis?Lorem, ipsum.
        Voluptate, expedita.
        Optio, eum!
        Repellat, et?
        Voluptatem, sit.
        Dolores, dolore.
        Nemo, officia.
        Veniam, blanditiis?</p>
        <div className='grid '>
          {/* <div className='bg-white my-2 rounded-xl px-2 py-1 w-4/5 mx-auto text-center'>
            Pre-Meeting Documents
          </div>
          <div className='bg-white my-2 rounded-xl px-2 py-1 w-4/5 mx-auto text-center'>
            Agenda
          </div>
          <div className='bg-white my-2 rounded-xl px-2 py-1 w-4/5 mx-auto text-center'>
            Meeting Minutes
          </div>
          <div className='bg-white my-2 rounded-xl px-2 py-1 w-4/5 mx-auto text-center'>
            Summary
          </div> */}
          <div className='w-full flex justify-end'>
            
          </div>
        </div>
        </div>
        </a>
      </div>
    </div>
  )
}

export default HomePage
