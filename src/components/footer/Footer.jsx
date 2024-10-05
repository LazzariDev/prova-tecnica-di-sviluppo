import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='px-10 bg-[#f4f4f4]'>
            {/* Mobile */}
            <div className='lg:hidden flex flex-col w-full h-[360px] justify-around items-start'>
                <ul className='flex flex-col gap-4'>
                    <li><a href="/"> Il Gruppo </a></li>
                    <li><a href="/"> Note Legali </a></li>
                    <li><a href="/"> Chi Siamo </a></li>
                    <li><a href="/"> Condizioni d'uso </a></li>
                    <li><a href="/"> Privacy </a></li>
                    <li><a href="/"> Scrivici </a></li>
                    <li><a href="/"> Pubblicità </a></li>
                </ul>
                <span>&copy; 1994-2022 Vita Società Editoriale S.p.A.</span>
            </div>

            {/* Desktop */}
            <div className='hidden lg:flex w-full h-32 justify-between items-center'>
                <ul className='flex gap-4'>
                    <li><a href="/"> Il Gruppo </a></li>
                    <li><a href="/"> Note Legali </a></li>
                    <li><a href="/"> Chi Siamo </a></li>
                    <li><a href="/"> Condizioni d'uso </a></li>
                    <li><a href="/"> Privacy </a></li>
                    <li><a href="/"> Scrivici </a></li>
                    <li><a href="/"> Pubblicità </a></li>
                </ul>
                <span>&copy; 1994-2022 Vita Società Editoriale S.p.A.</span>
            </div>
        </footer>
    </>
  )
}

export default Footer