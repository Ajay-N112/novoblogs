import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
function LandingPage() {
  return (
    <div className='bbody'>


   <div lg={6}  >
    
    <h1 className='t8'>NOVA BLOGS</h1>


<br />
<h3 lg={6} className='b2 '>
 You have a specific industry or type of company in mind, please let me know,<br />
 and I can provide more targeted information. Otherwise, if you're looking for general information <br />
  about successful or well-known companies, some examples include technology giants like Apple, Google, and Microsoft, <br />
  or multinational conglomerates like Procter & Gamble and Johnson & Johnson. However, the assessment of a "best" company can  <br />
  vary based on different criteria such as financial performance, innovation, corporate responsibility, and more. <br />
  a specific industry or type of company in mind, I can provide more tailored information. Additionally, individual preferences and priorities <br />
   may influence what someone considers the "best" company.
 </h3>

<br />
<br /><br />
<br /><br /><br /><br /><br />
<div  className='e3'>
<Link to={'/login'} style={{textDecoration:'none', color:'black'}}  > <h1>Get Start <i class="fa-solid fa-arrow-right fa-fade"></i></h1>

   </Link>
   </div>
 
<br /><br /><br /><br /><br /><br /><br /><br />
{/* <h6>View More Projects </h6> */}

  </div>

    </div>
  )
}

export default LandingPage