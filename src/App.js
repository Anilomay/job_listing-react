import  React , {useState , useEffect} from 'react'
import JobBoardComponent from './components/JobBoardComponent';
import data from './assets/data.json';
import Navbar from './components/Navbar';


function App() {
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data) , [])

 

  const filterFunc = ({role,level,tools,languages}) => {
    
    if (filters.length ===0 ) {
      return true
    }

    const tags = [role,level];
    
    if(languages) {
      tags.push(...languages)
    }

    if(tools) {
      tags.push(...tools)
    }

    return tags.some(tag => filters.includes(tag))
  }
  const handleTagClick = (tag) => {
    // avoid reading the tag
    if (filters.includes(tag)) return;

    setFilters([...filters,tag]); 
  }
  const handleDeleteClick = (passedFilter) => {
    setFilters(filters.filter(f => f!== passedFilter))
  }

  const filteredJobs = jobs.filter(filterFunc)

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <Navbar />
      {filters.length > 0 && 
        <div className={`justify-between absolute z-10 top-[85px] w-11/12 ml-auto mr-auto lg:top-32 left-0 right-0 lg:w-9/12 flex gap-4 bg-white shadow-md p-3 rounded`}>
          <span className='flex gap-5 flex-wrap'>{filters.map((filter) => (<span onClick={()=> handleDeleteClick(filter)} className="bg-slate-100 text-cyan-600 rounded-l-sm font-bold pl-2 py-1  cursor-pointer ease-in-out transition">{filter}
          <span className='bg-teal-500 font-bold pl-2 pt-1 pb-1 pr-2 rounded-r-sm text-white ml-1'>X</span>
          </span>))}</span>
          <button onClick={clearFilters} className='font-semibold hover:text-cyan-600'>Clear</button>
        </div>}
      {jobs.length === 0 ? (
        <p>Jobs are fetching</p>
      ): (
        filteredJobs.map((job) => <JobBoardComponent job = {job} key ={job.id} handleTagClick={handleTagClick}/>)
      )}

    </div>
  );
}

export default App;
