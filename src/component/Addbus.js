import React, { useState } from 'react'
import Header from './Header'

const Addbus = () => {
    var [route,setroute]=useState("")
    var [busname,setbusname]=useState("")
    var [busregno,setbusregno]=useState("")
    var [ownername,setownername]=useState("")
    var [contactnumber,setcontactnumber]=useState("")

    const addbus=()=>{
        const data={"route":route,"busname":busname,"busregno":busregno,"ownername":ownername,"contactnumber":contactnumber}
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
                    <label for="" className="form-label">Bus Name</label>
                    <input onChange={(e)=>{setbusname(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Bus Reg No</label>
                    <input onChange={(e)=>{setbusregno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Owner Name</label>
                    <input onChange={(e)=>{setownername(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>{setcontactnumber(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addbus} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbus