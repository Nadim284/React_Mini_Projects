import React from 'react'
import { Bookmark } from 'react-feather';

function card({jobs}) {



    return (
        <div className="card">
            <div className="top">
            <img 
                src={jobs.logoUrl}
                alt="Logo"
            />
            <button>Save <Bookmark size={15} /></button>
            </div>
    
            <div className="center">
                <h3>{jobs.company} <span>{jobs.postedAgo}</span></h3>
                <h2>{jobs.title}</h2>
                <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
    
            </div>
            </div>
    
            <div className="bottom">
            <div>
                
                <h3>{jobs.rate}</h3>
                <p>Sylhet,bd</p>
                
                
            </div>
            <button>Apply Now</button>
            </div>
    
        </div>
)
}

export default card