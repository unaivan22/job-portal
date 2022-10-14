import React from 'react'
import Header from './misc/Header'

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
       <div className="container mx-auto sm:px-24 md:px-32 xl:px-32 lg:px-32">
        
            <section className='h-screen grid grid-cols-1 content-center'>
                <div className='mb-12'>
                  <h1 className='text-7xl text-light'>Cari pekerjaan yang kamu inginkan</h1>
                  <input type="text" placeholder="Type here" class="input w-full border border-zinc-200 rounded-full" />
                </div>
                <div className='grid grid-cols-4 gap-x-4'>
                  <div class="w-full rounded-xl overflow-hidden shadow-sm bg-zinc-100">
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Product Designer</div>
                        <p class="text-gray-700 text-base">
                          Tokopedia
                        </p>
                      </div>
                    </div>
                    <div class="w-full rounded-xl overflow-hidden shadow-sm bg-zinc-100">
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Product Designer</div>
                        <p class="text-gray-700 text-base">
                          Tokopedia
                        </p>
                      </div>
                    </div>
                    <div class="w-full rounded-xl overflow-hidden shadow-sm bg-zinc-100">
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Product Designer</div>
                        <p class="text-gray-700 text-base">
                          Tokopedia
                        </p>
                      </div>
                    </div>
                    <div class="w-full rounded-xl overflow-hidden shadow-sm bg-zinc-100">
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Product Designer</div>
                        <p class="text-gray-700 text-base">
                          Tokopedia
                        </p>
                      </div>
                    </div>
                </div>
            </section>

       </div>
    </div>
  )
}
