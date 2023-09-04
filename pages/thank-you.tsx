import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import React from 'react'

const ThankYouPage = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className=' bg-[#abd1c6] flex  items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1400px] max-w-full mx-auto mt-32 rounded-md shadow-lg border border-gray-200'>
          <div className='mx-auto text-center rounded-lg p-4 '>
            <h2 className='font-bold pt-20  text-gray-800 text-4xl leading-[48px] text-center'>
              Thank you for your order!
            </h2>
            <p className='pt-10 lg:pt-20 text-gray-800 text-lg leading-[28px] text-center'>
              We have received your order and will begin processing it soon.
            </p>
            <p className='pt-10 lg:pt-20 text-gray-800 text-lg leading-[28px] text-center'>
              Please allow 30 minutes for your order to be ready for pickup.
            </p>
            <p className='pt-10 lg:pt-20 text-gray-800 text-lg leading-[28px] text-center'>
              Please call us at <a href='tel:1-800-555-5555'>1-800-555-5555</a>{' '}
              if you have any questions.
            </p>

            <h2 className='font-bold pt-20  text-gray-800 text-4xl leading-[48px] text-center'>
              Have a wonderful day!
            </h2>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ThankYouPage
