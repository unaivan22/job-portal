import React from 'react'
import Header from '../misc/Header'
import HomeFeatured from './HomeFeatured'

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
       <div className="mx-auto xs:px-8 sm:px-12 md:px-32 xl:px-32 lg:px-32 bg-white">
        
            <section className='min-h-screen grid grid-cols-1 content-center'>
                <div className='mb-12 space-y-12'>
                  <h1 className='font-bold text-5xl text-zinc-800 text-light xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl xs:text-3xl'>Cari pekerjaan yang kamu inginkan</h1>
                  {/* <input type="text" placeholder="Type here" className="input w-full border border-zinc-200 rounded-xl bg-white focus:text-zinc-900" /> */}
                  <form>
                      <div class="relative">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>
                          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search UI/UX, Backend..." required />
                          <a href="/result" type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</a>
                      </div>
                  </form>
                </div>
                <HomeFeatured />
            </section>

       </div>
    </div>
  )
}
