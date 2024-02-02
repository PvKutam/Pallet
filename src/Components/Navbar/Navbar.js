  import React,{useState} from 'react'
  import Img from "../../img/ol4-PhotoRoom.png-PhotoRoom.png"
  import "./Navbar.css"
  import { Link } from 'react-router-dom';


  const Navbar = () => {
    const [change,setChange] = useState(false)
    const toggleBlog=()=>{
      setChange(!change)
    }
    return (
      <div className='Main-Nav'>
          <img src={Img} className='Logo'/>
          <Link to="/Blog">
          <h3>Blog</h3>
          </Link>
      </div>
    )
  }

  export default Navbar
