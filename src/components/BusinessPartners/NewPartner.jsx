import React, { useEffect, useState } from 'react'

const NewPartner = ({ cancelPopup }) => {
    const [newPartnerData, setNewPartnerData] = useState({ companyName: '', companyLogo: null })
    const [base64Logo, setBase64Logo] = useState(null)

    useEffect(() => {
        if (newPartnerData.companyLogo && typeof newPartnerData.companyLogo === "object") {
            const reader = new FileReader();
            reader.onload = (e) => {
                setBase64Logo(e.target.result);
            };
            reader.readAsDataURL(newPartnerData.companyLogo);
        }
    }, [newPartnerData.companyLogo])

    return (
        <div className="absolute w-screen h-screen lg:w-full lg:h-full z-10 top-0 left-0 bg-[#50525580] flex justify-center items-center">
            <div className="w-fit lg:w-[50%] h-full md:h-fit bg-white rounded-md p-4 md:p-8 flex flex-col gap-8">
                <input
                    type="text"
                    className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
                    placeholder="Company Name"
                    value={newPartnerData.companyName}
                    onChange={(e) =>
                        setNewPartnerData({
                            ...newPartnerData,
                            companyName: e.target.value,
                        })
                    }
                /><div className="w-full md:w-[100%] h-[10rem] rounded-md bg-slate-300 relative flex justify-center items-center">
                    <input
                        type="file"
                        accept=".jpg,.png"
                        className="absolute top-0 left-0 z-10 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) =>
                            setNewPartnerData({
                                ...newPartnerData,
                                companyLogo: e.target.files[0],
                            })
                        }
                    />
                    {newPartnerData.companyLogo ? (
                        <img
                            src={base64Logo}
                            alt="image"
                            className="absolute top-0 left-0 object-cover w-full h-full rounded-md z-1"
                        />
                    ) : (
                        <p className="font-medium text-gray-500">Add company logo +</p>
                    )}
                </div>
                <div className="w-full h-[2.5rem] flex justify-between items-center mt-8">
                    <button
                        type="button"
                        onClick={() => {
                            cancelPopup();
                        }}
                        className="w-[5rem] h-full rounded-md bg-red-500 flex items-center justify-center cursor-pointer shadow-md shadow-red-100"
                    >
                        <p>Cancel</p>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleUploadMentor()}
                        className="w-[9rem] h-full rounded-md bg-blue-500 flex items-center justify-center cursor-pointer shadow-md shadow-blue-100"
                    >
                        <p className="font-medium text-white">Upload Partner</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewPartner