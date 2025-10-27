import React from 'react'
import { Bookmark } from 'react-feather';
import Card from './components/card';
import './App.css';

function App() {


const jobs = [
  {
    id: 1,
    company: "Amazon",
    postedAgo: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part Time",
    level: "Senior Level",
    rate: "$120/hr",
    location: "Sylhet, BD",
    applyUrl: "#",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    saved: false
  },
  {
    id: 2,
    company: "Google",
    postedAgo: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    rate: "$95/hr",
    location: "Dhaka, BD",
    applyUrl: "#",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    saved: false
  },
  {
    id: 3,
    company: "Microsoft",
    postedAgo: "1 week ago",
    title: "Backend Engineer",
    type: "Remote",
    level: "Senior Level",
    rate: "$110/hr",
    location: "Chattogram, BD",
    applyUrl: "#",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    saved: false
  },
  {
    id: 4,
    company: "ShopUp",
    postedAgo: "3 days ago",
    title: "Full Stack Developer",
    type: "Contract",
    level: "Mid Level",
    rate: "$85/hr",
    location: "Dhaka, BD",
    applyUrl: "#",
    logoUrl: "https://www.bing.com/images/search?view=detailV2&ccid=snh9fK8O&id=29E18B769C4996B233A26FEB49C77E86EE0BC9D5&thid=OIP.snh9fK8Ow6yi_NPjrFO3AgHaHa&mediaurl=https%3a%2f%2fimages.yourstory.com%2fcs%2fimages%2fcompanies%2f508814768130113457075606099269892974837760n-1603357298028.png%3ffm%3dauto%26ar%3d1%3a1%26mode%3dfill%26fill%3dsolid%26fill-color%3dfff&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b2787d7caf0ec3aca2fcd3e3ac53b702%3frik%3d1ckL7oZ%252bx0nrbw%26pid%3dImgRaw%26r%3d0&exph=960&expw=960&q=ShopUp+logo&FORM=IRPRST&ck=DF05AA70DD88DCF312E2B8F23B6FEB2A&selectedIndex=1&itb=0https://images.seeklogo.com/logo-png/44/1/shopup-logo-png_seeklogo-441573.png",
    saved: false
  },
  {
    id: 5,
    company: "Pathao",
    postedAgo: "6 hours ago",
    title: "Product Designer",
    type: "Full Time",
    level: "Junior Level",
    rate: "$60/hr",
    location: "Rajshahi, BD",
    applyUrl: "#",
    logoUrl: "https://cdn.brandfetch.io/pathao.com/icon/av2v4qs5et.png",
    saved: false
  },
  {
    id: 6,
    company: "Tesla",
    postedAgo: "4 days ago",
    title: "Machine Learning Engineer",
    type: "Remote",
    level: "Senior Level",
    rate: "$150/hr",
    location: "Khulna, BD",
    applyUrl: "#",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/732/732250.png",
    saved: false
  }
];



  return (
    <div className='parent'>
      
        {jobs.map((job) => (
          <Card jobs={job} />
        ))}
        
    </div>
  )
}

export default App
