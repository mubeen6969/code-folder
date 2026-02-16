import React from 'react'



const clientData = [
    {
        number: "300+",
        title: "Natural Destinatons",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nihil. Rem nesciunt amet, fugiat "
    },
    {
        number: "12K+",
        title: "Satisfied Explorers",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nihil. Rem nesciunt amet, fugiat "
    },
    {
        number: "100%",
        title: "Authentic Experiences",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nihil. Rem nesciunt amet, fugiat "
    }
]

const ClientNumbers = () => {
    return (
        <>
            <div className='flex sm:flex-row flex-col justify-between items-center min-h-[40vh] w-full gap-2 px-6 mt-8 '>
                {clientData.map((data, index) => (
                    <div key={index} className="flex items-start flex-col justify-between sm:w-[30vw] w-full gap-2 bg-[#FFFFFF] p-3 rounded-3xl ">
                        <h1>{data.number}</h1>
                        <h3 className='text-[#919191] '>{data.title} </h3>
                        <p className='text-[#919191] '>{data.para} </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ClientNumbers
