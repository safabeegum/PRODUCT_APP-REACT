import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const[data,changeData]=useState(
        [
            {
                "pcode":"101",
                "name":"Shoes",
                "brand":"Adidas",
                "price":"3000"
            }
        ]
    )

    const fetchData= () => {
        axios.get("").then((response)=>
            {
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }

    useEffect(() => {fetchData()},[])

  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">
                <thead>
    <tr>
      <th scope="col">PRODUCT CODE</th>
      <th scope="col">NAME</th>
      <th scope="col">BRAND</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
    {
        data.map(
            (value,index) => {
                return <tbody>
                <tr>
                  <td>{value.pcode}</td>
                  <td>{value.name}</td>
                  <td>{value.brand}</td>
                  <td>{value.price}</td>
                </tr>
              </tbody>
            }
        )
    }
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View