import React from 'react'
import img1 from "../../assites/0c1817d3afa266b3c9f8c81ff0ed4428.png"
import img2 from "../../assites/08463f7e8f57dd3048a2444dbfa0cb90.jpeg"
import img3 from "../../assites/2977438364a41d7e8c9d1e9a794d43ed.png"
import img4 from "../../assites/5102562cf220504d288fa568eaa816dd.png"


export default function NewArrival() {
  return <>

<div className="container mt-3">
        <h2 className="make-squre h4 fw-bolder text-main d-flex">Featured</h2>
        <p className='fs-3'>New Arrival</p>
      </div>

  <div className="container my-5">
    <div className="row">
      <div className="col-md-6">
        <div className="arivall-image">
        <img src={img1} alt="" className="p-image" />
        <div className='arivall-text'>
        <p className='fw-bold fs-5'>PlayStation 5</p>
        <p>Black and White version <br/> of the PS5 coming out on sale.</p>
        </div>
        </div>
      </div>
      <div className="col-md-6">
          <div className="container-fluide">
            <div className="row">
              <div className="col-md-12">

              <div className="arivall-image">
        <img src={img2} alt="" className="  p-cap" />
        <div className='arivall-text'>
        <p className='fw-bold fs-5'>Women’s Collections</p>
        <p>Featured woman collections that <br/>give you another vibe.</p>
        </div>
        </div>

              </div>
              <div className="col-md-6">

              <div className="arivall-image py-2">
        <img src={img3} alt="" className="  p-cap" />
        <div className='arivall-text'>
        <p className='fw-bold fs-5'>Speakers</p>
        <p>Amazon wireless speakers</p>
        </div>
        </div>
              </div>
              <div className="col-md-6">
              <div className="arivall-image py-2">
        <img src={img4} alt="" className="  p-cap" />
        <div className='arivall-text'>
        <p className='fw-bold fs-5'>Perfume</p>
        <p>GUCCI INTENSE OUD EDP</p>
        </div>
        </div>
              </div>

              


            </div>
          </div>
      </div>
    </div>
  </div>
  </>
}
