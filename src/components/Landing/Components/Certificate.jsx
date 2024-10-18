import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Ribbon from '../assets/Images/ribbon.png'
import BgSvg from '../assets/SVG/certificate-bg.svg'
import Certify from '../assets/SVG/certify.svg'

const Certificate = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <div className='w-full h-fit'>
        <div className='w-[80%] mx-auto '>
          <div className='w-full flex justify-between mt-8'>
            <div>
              <h3 className='font-[500] text-[4rem] font-special italic text-[#0f1d43]'>Exclusive  for Management Students</h3>
              <h2 className='font-[600] text-[1.5rem] text-[#324ea1] mt-3 '>CERTIFICATION ON HR-OPERATIONS</h2>
            </div>
            <img src={Certify} alt="certify" className='w-[10rem] h-[15rem] object-contain' />
          </div>
          <div>
            <h2 className='text-[1.8rem]'>Facilitators</h2>
            <div className='w-[20rem] h-[10rem] flex gap-2 mt-4 rounded-md p-2 shadow-md bg-gray-400 items-baseline justify-between' >
              <div className='w-[10rem] h-[10rem]'>
                <h2>User Name</h2>
              </div>
              <img src={Certify} alt="profile" className='w-[10rem] h-full' />
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-around'>
            <div className='mt-20 w-[25rem] h-fit rounded-md border border-blue-500 p-4'>
              <h2 className='text-[1.8rem]'>Program Highlights</h2>
              <ul className='w-full list-disc pl-8 mt-4 flex flex-col gap-7 text-[1.1rem]'>
                <li className=''>Case study based learning</li>
                <li className=''>25hr live session</li>
                <li className=''>2 days session in Star hotel</li>
                <li className=''>Corporate HR exposure</li>
                <li className=''>Study Materials</li>
                <li className=''>Course completion certificate</li>
                <li className=''>Training in end to end HR operations</li>
              </ul>

            </div>
            <div className='mt-20 w-[25rem] h-fit rounded-md border border-[#9CA3AF] p-4 mb-8'>
              <h2 className='text-[1.8rem] font-medium'>Modules</h2>
              <ul className='w-full list-disc pl-8 mt-4 flex flex-col gap-4 text-[1.1rem]'>
                <li>Introduction</li>
                <li>Onboarding</li>
                <li>End to End payroll management</li>
                <li>Statutory  Management</li>
                <li>Employee Relation</li>
                <li>Study Materials</li>
                <li>Performance Appraisal</li>
                <li>HIRIS</li>
                <li>Exit Management</li>
              </ul>
            </div>
          </div>
          <div className='mt-14 w-full h-fit mb-8'>
              <h2 className='text-[2rem]'>Register With Us</h2>
              <div className='w-full pl-8 mt-4 flex gap-4 text-[1.1rem] justify-between'>
                <p className=''>follow 👉🏼 : https/</p>
                <p>For more details write to<span className='italic text-blue-600 hover:text-blue-500 cursor-pointer'> connect@wowhr.in</span></p>
              </div>
            </div>
        </div>
      </div>

      {/* <div className='w-[100vw]  h-[100vh] p-8 '>
        <div className='w-full h-full bg-[#a8cdd9bd] rounded-lg shadow-xl overflow-hidden relative '>
          <div className='w-full h-[70%] p-4'>
            <div className='w-full min-h-[10rem] flex px-10 '>
              <div className='w-[60%] h-full flex flex-col'>
                <h1 className='font-[700] text-[5rem]'>CERTIFICATE</h1>
                <h2 className='font-[600] text-[3rem] text-[#324ea1]'><span className='font-[600] text-[3rem] text-black'>ON</span> HR-OPERATIONS</h2>
                <p className='font-[500] text-[1rem] tracking-widest pl-2 italic font-sans'>We hereby present this certificate to</p>
              </div>
              <img src={Ribbon} alt="ribbon" className='w-[10rem] h-[25rem] object-contain absolute -top-7 z-50 right-20' />
            </div>
            <div className=' w-full h-[15rem] pl-10 flex flex-col justify-center mt-10'>
              <h1 className='font-[500] text-[6rem] font-special italic text-[#0f1d43]'>John Doe</h1>
              <div className='w-[40%] h-[3px] bg-[#0f1d43] rounded-full' />
              <p className='font-[500] text-[1rem] tracking-widest italic font-sans mt-2'>for completing the specific course that you have completed with commitment and excellence</p>
            </div>
          </div>

          <div className='w-full h-[30%] bg-[#2a7b96] relative'>
            <img src={BgSvg} alt="bg" className='w-full h-full object-cover opacity-30 ' />
            <div className=' w-full h-full absolute top-0 z-10 px-14 pt-4 flex text-gray-800 '>
              <div className='w-[50%] h-full'>
                <h1 className='font-bold'>Program Highlights</h1>
                <ul className='w-full px-3 text-[0.89rem] flex flex-wrap gap-2 mt-4 ' style={{ listStyleType: 'disc' }}>
                  <li className='font-thin w-[15rem]'>Case study based learning</li>
                  <li className='font-thin w-[15rem]'>25hr live session</li>
                  <li className='font-thin w-[15rem]'>2 days session in Star hotel</li>
                  <li className='font-thin w-[15rem]'>Corporate HR exposure</li>
                  <li className='font-thin w-[15rem]'>Study Materials</li>
                  <li className='font-thin w-[15rem]'>Course completion certificate</li>
                  <li className='font-thin w-[15rem]'>Training in end to end HR operations</li>
                </ul>
              </div>
              <div className='w-[50%] h-full'>
                <h1 className='font-bold'>Modules</h1>
                <ul className='w-full px-3 text-[0.89rem] flex flex-wrap gap-2  mt-4 ' style={{ listStyleType: 'disc' }}>
                  <li className='font-thin w-[15rem]'>Introduction</li>
                  <li className='font-thin w-[15rem]'>Onboarding</li>
                  <li className='font-thin w-[15rem]'>End to End payroll management</li>
                  <li className='font-thin w-[15rem]'>Statutory  Management</li>
                  <li className='font-thin w-[15rem]'>Employee Relation</li>
                  <li className='font-thin w-[15rem]'>Study Materials</li>
                  <li className='font-thin w-[15rem]'>Performance Appraisal</li>
                  <li className='font-thin w-[15rem]'>HIRIS</li>
                  <li className='font-thin w-[15rem]'>Exit Management</li>
                </ul>
              </div>
              <div className='w-[20%] h-full'>
                <h1 className='font-bold'>Register With Us</h1>
                <h2 className='mt-4'>URL :-  </h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default Certificate