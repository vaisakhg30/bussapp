import React, { useState } from 'react'
import Header from './Header'

const Viewbus = () => {
    var Viewbus=[{"route":"kumbazha",
    "busname":"safari",
    "busregno":"1234",
    "ownername":"vaisak",
    "contactno":"9645367791"
    }
    ]

    
  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Bus Reg No</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Contact Number</th>
    </tr>
  </thead>
  <tbody>
      {Viewbus.map((value,key)=>{
          return <tr>
              <td>{value.route}</td>
              <td>{value.busname}</td>
              <td>{value.busregno}</td>
              <td>{value.ownername}</td>
              <td>{value.contactno}</td>

          </tr>


      }



      )



      }
    
  </tbody>
</table>

    </div></div></div></div></div></div>
  )
}

export default Viewbus