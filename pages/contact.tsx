import { useForm } from '@formspree/react';
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';

export default function Contact() {
  const [state, handleSubmit] = useForm('mpzgrrob');
  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <Layout>
          <p className='text-3xl flex h-screen mt-96 justify-center align-middle font-bold tracking-tight text-white sm:text-4xl'>
            We will be in contact soon!
          </p>
        </Layout>
      </>
    );
  }

  return (
    <div className='bg-white'>
      <Navbar />
      <Layout>
        <main>
          {/* Contact form */}
          <div className='relative isolate bg-cyprus-950'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
              <div className='relative px-6 pt-14 lg:static lg:px-8'>
                <div className='mx-auto max-w-xl pb-20 pt-24 sm:pt-32 lg:mx-0 lg:max-w-lg lg:py-48'>
                  <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2'>
                    <svg
                      className='absolute inset-0 h-full w-full stroke-cyprus-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                      aria-hidden='true'
                    >
                      <defs>
                        <pattern
                          id='54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2'
                          width={200}
                          height={200}
                          x='100%'
                          y={-1}
                          patternUnits='userSpaceOnUse'
                        >
                          <path d='M130 200V.5M.5 .5H200' fill='none' />
                        </pattern>
                      </defs>
                      <svg
                        x='100%'
                        y={-1}
                        className='overflow-visible fill-gray-800/20'
                      >
                        <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                      </svg>
                      <rect
                        width='100%'
                        height='100%'
                        strokeWidth={0}
                        fill='url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)'
                      />
                    </svg>
                    <svg
                      className='absolute -left-56 top-[calc(100%-13rem)] w-[72.1875rem] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]'
                      viewBox='0 0 1155 678'
                      aria-hidden='true'
                    >
                      <path
                        fill='url(#0a9a5302-e517-46c6-85f0-d826aa6a313e)'
                        fillOpacity='.2'
                        d='M317.219 159.025 203.852 0 0 239.659l317.219-80.634 204.172 286.402c1.307-132.337 45.083-346.658 209.733-145.248C936.936 551.942 882.053 772.234 1031.02 636.67c119.18-108.452 130.68-295.338 121.53-375.224L855 379l21.173-362.054-558.954 142.079Z'
                      />
                      <defs>
                        <linearGradient
                          id='0a9a5302-e517-46c6-85f0-d826aa6a313e'
                          x1='1155.49'
                          x2='-78.208'
                          y1='677.823'
                          y2='203.355'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#51f7da' />
                          <stop offset={1} stopColor='#058074' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                    Get in touch
                  </h1>
                  <p className='mt-6 text-lg leading-8 text-gray-300'>
                    Proin volutpat consequat porttitor cras nullam gravida at.
                    Orci molestie a eu arcu. Sed ut tincidunt integer elementum
                    id sem. Arcu sed malesuada et magna.
                  </p>
                  <dl className='mt-10 space-y-4 text-base leading-7 text-gray-300'>
                    <div className='flex gap-x-4'>
                      <dt className='flex-none'>
                        <span className='sr-only'>Address</span>
                        <BuildingOffice2Icon
                          className='h-7 w-6 text-gray-500'
                          aria-hidden='true'
                        />
                      </dt>
                      <dd>
                        123 Main St.
                        <br />
                        Zoo Town, MT 12345
                      </dd>
                    </div>
                    <div className='flex gap-x-4'>
                      <dt className='flex-none'>
                        <span className='sr-only'>Telephone</span>
                        <PhoneIcon
                          className='h-7 w-6 text-gray-500'
                          aria-hidden='true'
                        />
                      </dt>
                      <dd>
                        <a
                          className='hover:text-white'
                          href='tel:+1 (406) 234-5678'
                        >
                          +1 (406) 234-5678
                        </a>
                      </dd>
                    </div>
                    <div className='flex gap-x-4'>
                      <dt className='flex-none'>
                        <span className='sr-only'>Email</span>
                        <EnvelopeIcon
                          className='h-7 w-6 text-gray-500'
                          aria-hidden='true'
                        />
                      </dt>
                      <dd>
                        <a
                          className='hover:text-white'
                          href='mailto:hello@example.com'
                        >
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className='px-6 lg:px-8 lg:pt-14'
              >
                <div className='mx-auto max-w-xl pb-24 pt-20 sm:pb-32 lg:mr-0 lg:max-w-lg lg:py-48'>
                  <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                    <div>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-semibold leading-6 text-white'
                      >
                        First name
                      </label>
                      <div className='mt-2.5'>
                        <input
                          type='text'
                          name='first-name'
                          id='first-name'
                          autoComplete='given-name'
                          className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyprus-500'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-semibold leading-6 text-white'
                      >
                        Last name
                      </label>
                      <div className='mt-2.5'>
                        <input
                          type='text'
                          name='last-name'
                          id='last-name'
                          autoComplete='family-name'
                          className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyprus-500'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-semibold leading-6 text-white'
                      >
                        Email
                      </label>
                      <div className='mt-2.5'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          autoComplete='email'
                          className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyprus-500'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='phone-number'
                        className='block text-sm font-semibold leading-6 text-white'
                      >
                        Phone number
                      </label>
                      <div className='mt-2.5'>
                        <input
                          type='tel'
                          name='phone-number'
                          id='phone-number'
                          autoComplete='tel'
                          className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyprus-500'
                        />
                      </div>
                    </div>
                    <div className='sm:col-span-2'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-semibold leading-6 text-white'
                      >
                        Message
                      </label>
                      <div className='mt-2.5'>
                        <textarea
                          name='message'
                          id='message'
                          rows={4}
                          className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-sm leading-6 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-cyprus-500'
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-8 flex justify-end'>
                    <button
                      type='submit'
                      className='block w-full text-center px-10 py-3 text-base font-medium text-gray-500 bg-cyprus-700 rounded-lg hover:bg-[#F7FE72] hover:text-cyprus-950 transition-colors duration-200 shadow-md hover:shadow-lg'
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact details */}
          <div className='mx-auto mt-24 max-w-7xl px-6 sm:mt-48 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-200'>
                Our offices
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-200'>
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames.
              </p>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
              <div>
                <h3 className='border-l border-cyprus-600 pl-6 font-semibold text-gray-200'>
                  Zoo Coast
                </h3>
                <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-200'>
                  <p>4556 Brendan Ferry</p>
                  <p>Los Angeles, CA 90210</p>
                </address>
              </div>
              <div>
                <h3 className='border-l border-cyprus-600 pl-6 font-semibold text-gray-200'>
                  Zoo York
                </h3>
                <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-200'>
                  <p>886 Walter Street</p>
                  <p>New York, NY 12345</p>
                </address>
              </div>
              <div>
                <h3 className='border-l border-cyprus-600 pl-6 font-semibold text-gray-200'>
                  Zoo North
                </h3>
                <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-200'>
                  <p>7363 Cynthia Pass</p>
                  <p>Toronto, ON N3Y 4H8</p>
                </address>
              </div>
              <div>
                <h3 className='border-l border-cyprus-600 pl-6 font-semibold text-gray-200'>
                  Zoo International
                </h3>
                <address className='border-l border-gray-200 pl-6 pt-2 not-italic text-gray-200'>
                  <p>114 Cobble Lane</p>
                  <p>London N1 2EF</p>
                </address>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
