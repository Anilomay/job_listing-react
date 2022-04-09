import React from 'react'
/*{
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
*/

const JobBoardComponent = ({job,handleTagClick}) => {
    const tags = [job.role,job.level]

    if(job.languages) {
        tags.push(...job.languages)
    }

    if(job.tools) {
        tags.push(...job.tools)
    }


    return(
        <div className={`flex flex-col gap-5 bg-white shadow-md my-8 mr-5 ml-5 p-4 justify-between items-center lg:flex-row lg:mr-40 lg:ml-40
            ${job.featured && 'border-l-4 border-teal-500 border-solid '} `}
        >  
            <div className='flex relative flex-row items-center gap-5 w-full'>
                <img src={job.logo} className='-mr-0 -ml-0  w-12 h-12 absolute bottom-24 right-82 md:relative md:right-0 md:left-0 md:bottom-0 md:w-20 md:h-20'/>
                <div className='flex flex-col justify-center gap-1'>
                    <div className='flex flex-row items-center gap-4 mt-3'>
                        <h3 className='text-cyan-600 font-bold'>{job.company}</h3>
                        {job.new && (
                            <p className='text-white text-xs bg-cyan-700 rounded-full px-2 py-1 font-semibold'>NEW!</p>
                        )}
                        {job.featured && (
                            <p className='text-white text-xs bg-black rounded-full px-2 py-1 font-semibold'>FEATURED</p>
                        )}
                    </div>
                    <div className='font-bold text-xl hover:text-cyan-600 transition ease-in-out cursor-pointer' >
                        {job.position}
                    </div>
                    <div className='items-center flex flex-row gap-2 items-center text-gray-500'>
                        {job.postedAt} <p className='pb-2'>.</p> {job.contract} < p className='pb-2'>.</p> {job.location}
                    </div>
                    <span className='bg-black h-px w-full md:w-10/12 lg:hidden absolute top-28'></span>
                </div>
            </div>
            <div className='flex  justify-start items-center gap-3 lg:flex-row lg:gap-5 '>
                <h4 className='flex flex-wrap gap-4 lg:flex-row xl:flex-nowrap lg:w-full'>
                    {tags ? (
                        tags.map((tag) => <span onClick={() => handleTagClick(tag)} className='bg-teal-100 text-cyan-600 rounded-lg font-bold px-2 py-1 hover:bg-cyan-700 hover:text-white cursor-pointer ease-in-out transition'>{tag}</span>)
                    ) : ('')}
                </h4> 
            </div>  
        </div>
    )
}
export default JobBoardComponent
