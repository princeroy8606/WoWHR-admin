import React from 'react'
import Sidebar from '../global/Sidebar'
import { useState } from 'react';
import assets from '../../assets/assets';
import NewPartner from './NewPartner';

const BusinessPartners = () => {
    const [openAddNewPartner, setOpenAddNewPartner] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <div className="flex w-screen h-screen bg-white">
            <Sidebar />
            <div className="relative p-4 overflow-x-scroll bg-white dashboard-content">
                {openAddNewPartner && (
                    <NewPartner cancelPopup = {()=>setOpenAddNewPartner(false)} />
                )}
                {openSidebar && <MobileSidebar />}
                <div
                    className={`w-full h-20 flex items-center justify-between `}
                >
                    <img
                        src={assets.Img.Menu_Icon}
                        alt="icon"
                        className="object-contain opacity-100 w-7 h-7 lg:opacity-0"
                        onClick={() => setOpenSidebar(true)}
                    />
                    <div className="flex items-center h-full gap-4 w-fit">
                        <img
                            src={assets.Img.Bg}
                            alt="icon"
                            className="object-cover rounded-full w-7 h-7"
                        />
                        <p className="text-[1.2rem] font-semibold text-blue-600">
                            Test User
                        </p>
                    </div>
                </div>
                <div className={`w-full h-12 flex items-center justify-between`}
                >
                    <div className="h-full w-fit">
                        <h1 className="font-bold text-[1.5rem]">Business Partners</h1>
                        <p>Lorem ipsum dolor sit Pamet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div
                    className={`w-full h-[calc(100%-3rem)] bg-white mt-4 p-2`}
                >
                    <div className="flex flex-wrap items-center justify-between w-full h-10 gap-4 mt-8 md:mt-0">
                        <div className="bg-[#edededde] w-[20rem] h-[90%] px-2 flex items-center gap-1 border rounded-md text-white border-blue-200">
                            <img
                                src={assets.Img.Search}
                                alt="search"
                                className="object-contain w-4 h-4"
                            />
                            <input
                                type="text"
                                placeholder="Find"
                                className="flex-1 pl-2 placeholder-gray-400 bg-transparent border-none outline-none text-black"
                            />
                        </div>
                        <div
                            onClick={() => setOpenAddNewPartner(true)}
                            className=" w-[8rem] h-[100%] flex items-center justify-center rounded-md bg-[#3372d7] cursor-pointer font-medium text-white"
                        >
                            Add New
                        </div>
                    </div>
                    <div className='w-full h-fit flex gap-5 flex-wrap mt-4 pt-4 border-blue-300 border-t '>
                        <div className='w-[20rem] h-[12rem] rounded-md bg-slate-200 shadow-sm'>
                            <img src={assets.Img.Bg} alt="img" className='w-full h-[80%] rounded-t-md  object-cover' />
                            <p className='mt-1 p-1 font-medium'>Company name</p>
                        </div>
                        <div className='w-[20rem] h-[12rem] rounded-md bg-slate-200 shadow-sm'>
                            <img src={assets.Img.Bg} alt="img" className='w-full h-[80%] rounded-t-md  object-cover' />
                            <p className='mt-1 p-1 font-medium'>Company name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPartners