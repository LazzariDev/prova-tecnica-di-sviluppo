import React from 'react'
import storieLuca from '../../../assets/stories/storie-luca.jpeg'
import storieEmiliano from '../../../assets/stories/storie-emiliano.jpeg'
import storieDiletta from '../../../assets/stories/storie-diletta.jpeg'
import storieAnna from '../../../assets/stories/storie-anna.jpeg'

const imageMap = {
    storieLuca: storieLuca,
    storieEmiliano: storieEmiliano,
    storieDiletta: storieDiletta,
    storieAnna: storieAnna,
}

const StorieCardDesktop = ({storie}) => {
    const imageSrc = imageMap[storie?.backgroundPic];
    
  return (
    <div className={`
            h-[436px]
            bg-cover
            ${storie.important ? 'col-span-2' : ''}
        `}
        style={{
            backgroundImage: `url(${imageSrc})`
        }}
        >

        {/* Overlay */}
        <div className='w-full h-full bg-black bg-opacity-40'>
            <div className="w-full h-full flex flex-col items-start justify-end px-10 pb-10 gap-10">
                <span className='uppercase font-semibold text-black bg-[#e2f1e8] px-2 py-1 rounded-md'>{storie.tag}</span>
                <h3 className='text-2xl font-bold text-white'>{storie?.title}</h3>
                <div className='flex flex-col gap-3'>
                    <div className='w-12 h-12'>
                        <img className='rounded-full' src={storie?.user?.profilePic} alt="User image"/>
                    </div>
                    <div className='flex flex-col text-white justify-between'>
                        <span>{`Di ${storie?.user?.fullName}`}</span>
                        <span className='font-light text-xs'>{storie?.user?.pubDateStr}</span>
                    </div>
                    <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StorieCardDesktop