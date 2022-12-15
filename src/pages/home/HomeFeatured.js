import React from 'react'

import { joblists } from '../data/data.js';

export default function HomeFeatured() {
  const featured = joblists.filter(getjoblists =>
    getjoblists.jobtype === 'featured'
  );
  const listItems = featured.map(getjoblists =>
    <a href={getjoblists.link} key={getjoblists.id} className="w-full rounded-xl overflow-hidden shadow-sm bg-zinc-100 aspect-square bg-zinc-100">
        <div className="p-6 space-y-4 grid grid-cols-1 content-between h-full overflow-hidden">
            <div className='flex flex-col space-y-6'>
                <div className='flex items-center gap-x-4'>
                    <img className='w-8' src={getjoblists.comp_logo} />
                    <p className="text-gray-700 text-base">{getjoblists.comp_name}</p>
                </div>
                <div>
                    <h6 className="font-bold xl:text-xl lg:text-xl md:text-lg sm:text-md xs:text-sm text-zinc-900">{getjoblists.title}</h6>
                    <p className='font-light xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-xs text-zinc-700'>{getjoblists.city}, {getjoblists.location}</p>
                    <p className='font-light xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs'>{getjoblists.type} - {getjoblists.desk}</p>
                </div>
            </div>
            <div className='flex justify-between '>
                <p className='font-light text-sm text-zinc-700 xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs'>6 hours ago</p>
                <p className='font-light text-sm text-zinc-700 xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs'>{getjoblists.jobtype}</p>
            </div>
        </div>
    </a>
  );
  return <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-x-4 gap-y-4'>{listItems}</div>;
}