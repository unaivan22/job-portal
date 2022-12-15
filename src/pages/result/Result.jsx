import React from 'react'

import ResultItems from './ResultItems'
import BackArrow from '../utils/BackArrow'

export default function Result() {
  return (
    <div className='mx-auto xs:px-8 sm:px-12 md:px-32 xl:px-32 lg:px-32 bg-white min-h-screen'>
      <div className='mt-12 mb-4'>
          <BackArrow />
      </div>
      <div className='flex flex-col space-y-4 mb-12'>
        <h1 className='xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl text-zinc-900 font-bold'>Result for "<span>UX Engineer</span>"</h1>
        <input type="text" placeholder="Type here" className="input w-full border border-zinc-200 rounded-xl bg-white focus:text-zinc-900" value="UX Engineer" />
      </div>
      <ResultItems />
    </div>
  )
}
