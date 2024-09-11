import React from 'react'

const Meeting = () => {
    return (
        <div>
            <div className='bg-slate-100 py-2 w-4/5 mx-auto my-5 rounded-xl'>
                <div className='w-5/6 mx-auto my-5'>
                    <div className='flex my-2'>
                        <div className=''>
                            <h3 className='text-lg text-slate-500 flex'>Title :</h3>
                        </div>
                        <div className='5/6'>
                            <h3 className='text-xl text-slate-800 mx-2'>
                                Time Table for the upcoming project
                            </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/5'>
                            <h5 className='text-sm text-slate-500'>Description : </h5>
                        </div>
                        <div className=''>
                            <h5>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nemo repellendus autem quos assumenda dignissimos. Nisi animi ex iure, quidem exercitationem autem nobis quaerat, possimus dicta hic eius, fuga doloremque.
                                    Odio aperiam corporis veritatis voluptate. Ea eos nulla assumenda officiis illo autem unde aliquid rerum. Odio magni molestias eum dolore, asperiores accusamus ad libero nemo, saepe maxime nesciunt sunt harum?
                                    Facilis iusto debitis velit numqua</span>
                            </h5>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div className='bg-white rounded-xl p-3 w-4/5 text-center my-2'>
                            Pre Meeting Documents
                        </div>
                        <div className='bg-white rounded-xl p-3 w-4/5 text-center my-2'>
                            Agenda
                        </div>
                        <div className='bg-white rounded-xl p-3 w-4/5 text-center my-2'>
                            Tracking
                        </div>
                        <div className='bg-white rounded-xl p-3 w-4/5 text-center my-2'>
                            Summary
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meeting
