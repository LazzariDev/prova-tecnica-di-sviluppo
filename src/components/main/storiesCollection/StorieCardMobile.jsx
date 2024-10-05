import React from 'react'
import storieAnna from '../../../assets/stories/storie-anna.jpeg'

const imageMap = {
    storieAnna: storieAnna,
}

const StorieCardMobile = ({storie}) => {
    let imgSrc = imageMap[storie?.backgroundPic]

    return (
        <>
            {!storie.important &&
            <div className='flex flex-col w-full p-10 gap-4 border-b-2 border-black'>
                <div>
                    <span className='uppercase px-2 py-1 bg-[#ffffff] rounded-md border border-black border-b-2 border-l-2'>{storie.tag}</span>
                </div>
                <h3 className='text-xl font-bold text-black'>{storie.title}</h3>
                <div className='flex gap-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                    </div>
                    <div className='flex flex-col text-black justify-between'>
                        <span>{`Di ${storie?.user?.fullName}`}</span>
                        <span className='font-light text-xs'>14 Luglio 2022</span>
                    </div>
                </div>
                
            </div>}

            {storie.important &&
            <div className='flex flex-col w-full p-10 gap-4 border-b-2 border-black'>
                <div
                    className='w-full h-[300px] bg-cover bg-left border border-black'
                    style={{ backgroundImage: `url(${imgSrc})`}}
                >
                </div>
                <div>
                    <span className='uppercase px-2 py-1 bg-[#ffffff] rounded-md border border-black border-b-2 border-l-2'>{storie.tag}</span>
                </div>
                <h3 className='text-xl font-bold text-black'>{storie.title}</h3>
                <div className='flex gap-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
                    </div>
                    <div className='flex flex-col text-black justify-between'>
                        <span>{`Di ${storie?.user?.fullName}`}</span>
                        <span className='font-light text-xs'>14 Luglio 2022</span>
                    </div>
                </div>
                
            </div>}
        </>
    )
}

export default StorieCardMobile