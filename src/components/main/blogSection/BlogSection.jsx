import React from 'react'

const BlogSection = () => {
  return (
    <section className='flex flex-wrap'>
        <div className='lg:w-1/6 min-w-[170px] lg:h-[200px] w-1/2 h-[180px] border border-black flex justify-center items-center'>
            <span className='text-red-600 font-bold text-4xl'>Il Blog</span>
        </div>
        <div className='lg:w-1/6 min-w-[170px] lg:h-[200px] w-1/2 h-[180px] border border-black flex flex-col gap-4 justify-center items-center'>
            <div className='w-20 h-20'>
                <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-lg'>Il Becco dell'oca</span>
                <span className='font-light text-sm'>Di Paolo Dell'Oca</span>
            </div>
        </div>
        <div className='lg:w-1/6 min-w-[170px] lg:h-[200px] w-1/2 h-[180px] border border-black flex flex-col gap-4 justify-center items-center'>
            <div className='w-20 h-20'>
                <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-lg'>Disarmato</span>
                <span className='font-light text-sm'>Di Pasquale Pugliese</span>
            </div>
        </div>
        <div className='lg:w-1/6 min-w-[170px] lg:h-[200px] w-1/2 h-[180px] border border-black flex flex-col gap-4 justify-center items-center'>
            <div className='w-20 h-20'>
                <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-lg'>Battitiperminuto</span>
                <span className='font-light text-sm'>Di Lorenzo Maria Alvaro</span>
            </div>
        </div>
        <div className='lg:w-1/6 min-w-[170px] lg:h-[200px] w-1/2 h-[180px] border border-black flex flex-col gap-4 justify-center items-center'>
            <div className='w-20 h-20'>
                <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-lg'>La Zanzarella</span>
                <span className='font-light text-sm'>Di Elena Zanella</span>
            </div>
        </div>
        <div className='lg:w-1/6 min-w-[170px] lg:h-[200px] w-1/2 h-[180px] border border-black flex flex-col gap-4 justify-center items-center'>
            <div className='w-20 h-20'>
                <img className='rounded-full' src="https://picsum.photos/200" alt="User image" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='font-bold text-lg'>Impact Q&amp;A</span>
                <span className='font-light text-sm'>Di Laura Orestano</span>
            </div>
        </div>
    </section>
  )
}

export default BlogSection