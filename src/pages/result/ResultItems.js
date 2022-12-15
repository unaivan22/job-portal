import React from 'react'

import { joblists } from '../data/data.js';

export default function ResultItems() {
  const featured = joblists.filter(getjoblists =>
    getjoblists.tags === 'product'
  );
  const listItems = featured.map(getjoblists =>
    <a href={getjoblists.link} key={getjoblists.id} className="w-full rounded-xl overflow-hidden border border-zinc-200 bg-white">
        <div className="p-6 space-y-4 grid grid-cols-1 content-between h-full overflow-hidden">
            <div className='flex flex-col space-y-6'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-8' src={getjoblists.comp_logo} />
                    <p className="text-gray-700 text-base">{getjoblists.comp_name}</p>
                </div>
                <div>
                    <h6 className="font-bold text-xl text-zinc-900 xl:text-xl lg:text-xl md:text-lg sm:text-md xs:text-md">{getjoblists.title}</h6>
                    <p className='font-light text-zinc-700 xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-md'>{getjoblists.city}, {getjoblists.location}</p>
                    <p className='font-light text-sm xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs'>{getjoblists.type} - {getjoblists.desk}</p>
                </div>
                <div>
                    <p className='text-blue-500 xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs font-base'>{getjoblists.salary}</p>
                </div>
            </div>
            <div className='flex justify-between '>
                <p className='font-light text-sm text-zinc-700 xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs'>6 hours ago</p>
                <p className='font-light text-sm text-zinc-700 xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs'>{getjoblists.jobtype}</p>
            </div>
        </div>
    </a>
  );
  return <div className='grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4'>
    <p className='text-zinc-800 font-base'>4 jobs found</p>
    {listItems}
  </div>;
}