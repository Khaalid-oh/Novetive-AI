// import Buttons from '@/components/Buttons'
import SelectAccount from '@/components/SelectAccount'
import { Button } from '@/components/ui/button'
import { Bell, Filter, GanttChart, Instagram, Search, User } from 'lucide-react'
import React from 'react'

const page = () => {

  const userMessage = [
    {
      image:<User />,
      name:'Usman Aliyu',
      text:'Post caption',
      icon1:<Instagram color='red' size={15}/>,
      options:<GanttChart/>
    },
    {
      image:<User />,
      name:'Usman Aliyu',
      text:'Post caption',
      icon1:<Instagram color='red' size={15}/>,
      options:<GanttChart/>
    },
    {
      image:<User />,
      name:'Usman Aliyu',
      text:'Post caption',
      icon1:<Instagram color='red' size={15}/>,
      options:<GanttChart/>
    },
    {
      image:<User />,
      name:'Usman Aliyu',
      text:'Post caption',
      icon1:<Instagram color='red' size={15}/>,
      options:<GanttChart/>
    },
    {
      image:<User />,
      name:'Usman Aliyu',
      text:'Post caption',
      icon1:<Instagram color='red' size={15}/>,
      options:<GanttChart/>
    },
   
  ]
  return (
    <div className='w-full bg-slate-50 h-screen text-gray-800'>
      <div className='flex flex-col h-full'>
      {/* <div className='flex flex-col h-full'></div> */}

            {/* tittle section */}

            <div className='flex w-full py-6 px-8 shadow-sm  bg-white '>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-lg font-bold'>Reviews</h1>
                    <div className='flex justify-center items-center '>
                        <div className='flex px-4 pr-24 bg-slate-100 shadow-sm py-2 rounded-3xl items-center '>
                          <Search size={15} className='text-slate-400'/>
                          <p className='px-2 font-thin text-sm text-slate-400 p-1'>Search post..</p>
                        </div>
                        <div className='flex mx-4 border-2 rounded-full px-1 py-1 border-slate-200 shadow-sm'>
                          <Bell className=' rounded-full py-1 px-1'/>
                        </div> 
                        <div className='flex mr-4 border-2 border-blue-500 rounded-full px-1 py-1 shadow-sm'>
                          <User className=' rounded-full px-1 py-1'/>
                        </div> 
                    </div>
                </div>
            </div>

            {/* body section */}

            <div className='flex w-full  bg-slate-50 h-full '>
              <div className='flex justify-between w-1/2 '>
                <div className='flex bg-slate-50 w-full pt-8 px-8 flex-col'>
                  <div className='bg-white rounded-lg px-4 py-2 flex justify-between items-center'>
                    <h1 className='text-lg font-bold'>Instagram's post</h1>
                    <div>
                      <SelectAccount />
                    </div>
                  </div>
                  <div className='flex h-full w-full bg-white  rounded-lg mt-6 py-4 px-2 flex-col'>
                    <div className='flex justify-between w-full items-center'>
                      <div className='flex px-2'>
                        <Button variant={'secondary'} className='mr-4 '>Post</Button>
                        <Button variant={'outline'} >Comments</Button>
                      </div>
                      <Filter color='gray'/>
                    </div>
                    <div className='w-full h-full mt-4 flex flex-col overflow-y-auto'>
                      {userMessage.map(message => {
                        return (
                          <div className='flex justify-between w-full my-2'>
                              <div className='flex items-center'>
                                <div className='px-1 py-1 border rounded-full mx-2'>{message.image}</div>
                                <div className='flex flex-col mx-4'>
                                  <h2 className='font-bold '>{message.name}</h2>
                                  <p className=''>{message.text}</p>
                                </div>
                              </div>
                              <div className='flex items-center'>
                              <div className='mx-4 text-gray-800'>{message.icon1}</div>
                              <div className='mx-4 text-gray-800'>{message.options}</div>
                              </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <span className='h-full w-[2px] bg-slate-400'></span>
              </div>
              <div className='flex justify-between w-1/2 '>
                <div className='flex bg-slate-50 w-full pt-8 px-8 flex-col'>
                  <div className='bg-white px-4 py-2 flex justify-between items-center rounded-lg'>
                    <h1 className='text-lg font-bold text-gray-800'>Novetive AI Review</h1>
                    <div>
                      <GanttChart />
                    </div>
                  </div>
                  {/* <div className='flex h-full w-full bg-white mt-6 py-2 px-2 flex-col'>
                    <div className='flex justify-between w-full items-center'>
                      <div className='flex px-2'>
                        <Button variant={'secondary'} className='mr-4 '>Post</Button>
                        <Button variant={'outline'} >Comments</Button>
                      </div>
                      <Filter color='gray'/>
                    </div>
                    <div className='w-full h-full mt-4 flex flex-col overflow-y-auto'>
                      {userMessage.map(message => {
                        return (
                          <div className='flex justify-between w-full my-2'>
                              <div className='flex items-center'>
                                <div className='px-1 py-1 border rounded-full mx-2'>{message.image}</div>
                                <div className='flex flex-col mx-4'>
                                  <h2 className='font-bold '>{message.name}</h2>
                                  <p className=''>{message.text}</p>
                                </div>
                              </div>
                              <div className='flex items-center'>
                              <div className='mx-4'>{message.icon1}</div>
                              <div className='mx-4'>{message.options}</div>
                              </div>
                          </div>
                        )
                      })}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default page