import React from 'react'

const Chat = () => {
    return (
        <div className='flex items-center justify-center h-full'>
            <div className='w-1/3 h-[500px] bg-white relative'>
                <div className='w-full h-16 bg-gray-700 flex items-center p-3'>
                    <div className='w-12 h-12 bg-white rounded-full'></div>
                </div>
                <div className='w-full h-[400px] overflow-y-auto'>
                    <div className='w-1/2 h-16 p-2 bg-blue-600 text-white text-sm m-2 rounded-xl rounded-br-none'>
                        <div>Message</div>
                        <div className='w-full flex justify-end text-xs'>Arif 22:21</div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='w-1/2 h-16 p-2 bg-green-600 text-white text-sm m-2 rounded-xl rounded-br-none'>
                        <div>Message</div>
                        <div className='w-full flex justify-end text-xs'>Arif 22:21</div>
                    </div>
                    </div>
                    
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <input className='w-3/4 h-12 border outline-none p-3' type="text" placeholder='message send' />
                    <button className='w-1/4 bg-indigo-600 text-white h-12 hover:opacity-70'>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Chat