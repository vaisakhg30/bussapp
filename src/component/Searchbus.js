import React, { useState } from 'react'
import Header from './Header'

const Searchbus = () => {

   const [data,setdata]=useState([
       {
           "busname":"",
           "busregno":"",
           "ownername":"",
           "contactno":""
       }
   ])

    var [route,setroute]=useState("")
    const Searchbus=()=>{
        const data={"route":route}
        console.log(data)
    }

  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(e)=>{setroute(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={Searchbus} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
{data.map((value,key)=>{
return
}

)}
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Bus Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Bus Reg No</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Owner Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Contact Number</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
        </div>
    </div>
</div>



</div>

    
  )
}

export default Searchbus