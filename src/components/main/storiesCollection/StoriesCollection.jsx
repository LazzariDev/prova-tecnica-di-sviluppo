import React from 'react'
import StorieCardDesktop from './StorieCardDesktop'
import StorieCardMobile from './StorieCardMobile'

const StoriesCollection = () => {

    const stories = [
        {
            title: '“Qui Odessa”, fotografie, progetti e solidarietà',
            important: false,
            tag: {
                title: "Progetto Arca",
                color: "#ffffff"
            },
            link: "/",
            user: {
                profilePic: "https://picsum.photos/200",
                fullName: "Redazione",
                pubDateStr: "13 Luglio 2022",
            },
            backgroundPic: "storieEmiliano",
        },
        {
            title: 'Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne',
            important: false,
            tag: {
                title: "Adolescenti",
                color: "#e2f0f1"
            },
            link: "/",
            user: {
                profilePic: "https://picsum.photos/200",
                fullName: "Luca Cereda",
                pubDateStr: "13 Luglio 2022",
            },
            backgroundPic: "storieLuca",
        },
        {
            title: '“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento',
            important: false,
            tag: {
                title: "Economia Civile",
                color: "#f0e2f1"
            },
            link: "/",
            user: {
                profilePic: "https://picsum.photos/200",
                fullName: "Emiliano Moccia",
                pubDateStr: "13 Luglio 2022",
            },
            backgroundPic: "storieEmiliano",
        },
        {
            title: 'Troppi abusi nello sport minorile, il governo interviene',
            important: false,
            tag: {
                title: "Sport",
                color: "#f0e2f1"
            },
            link: "/",
            user: {
                profilePic: "https://picsum.photos/200",
                fullName: "Diletta Grella",
                pubDateStr: "13 Luglio 2022",
            },
            backgroundPic: "storieDiletta",
        },
        {
            title: 'Donne e nuove generazioni: con loro riparte l’Italia',
            important: true,
            tag: {
                title: "Società",
                color: "#e2f0f1"
            },
            link: "/",
            user: {
                profilePic: "https://picsum.photos/200",
                fullName: "Anna Spena",
                pubDateStr: "13 Luglio 2022",
            },
            backgroundPic: "storieAnna",
        }
    ]


  return (
    <>
        {/* Mobile */}
        <div className='lg:hidden flex flex-col w-full'>
            {stories.map((el, index) => (
                <StorieCardMobile key={index} storie={el} />
            ))}
        </div>

        {/* Desktop */}
        <div className='hidden lg:grid  lg:grid-cols-3 gap-1'>
            {stories.map((el, index) => (
                <StorieCardDesktop key={index} storie={el} />
            ))}
        </div>
    
    </>
  )
}

export default StoriesCollection