"use client";


import { title } from "process"
import  {topServices,featuredCategory,allServices} from "../../json/services.json"
import { useRouter } from "next/navigation";

export default function ClientComponent (){ 
    
  const router = useRouter()

    return (
        <>
        
        <main>
      <div className="container home-wraper my-profile" style={{height:" auto"}}>
     
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-wrp">
                  <div className="browse-ctg-head my-con-head">
                    <h2 className="sub-cate-page">
                      <a     
                          onClick={(e) => {
                          e.preventDefault();
                          router.back();
                        }}><img src="images/home/left-arrow.svg" alt=""/></a>
                      Services
                    </h2>
                    <div className="your-location-top">
                      <input type="text" placeholder="Search" className="top-srch"/>
                      <select name="" id="">
                        <option value="0">All Category</option>
                        <option value="1">Plumbing</option>
                        <option value="2">Repairing</option>
                        <option value="3">Painting</option>
                        <option value="4">Laundry</option>
                      </select>
                    </div>
                  </div>
                  <div className="services-sec-wrp">
                    <h3>Top Services</h3>
                    <div className="top-services-slider"   >
                     
                     { topServices?.map((item)=>(
                        <div className="top-services-slider-item" key={item?.id} onClick={() => router.push("/serviceDetails")}>
                        <div className="upcoming-my-slide">
                          <a href="#">
                            <div className="upcoming-img">
                              <img src="images/home/home-slider/1.svg" alt=""/>
                            </div>
                            <div className="upcoming-data ser">
                              <p className="up-text">{item?.title}</p>
                              <p className="up-date">{item?.description}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                     )) }
                     
                   
                    </div>
                  </div>
                  <div className="services-sec-wrp">
                    <h3>Featured Category</h3>
                    <div className="featured-category-slider">
                    
                         {featuredCategory.map((item) => (
                      <div className="featured-category-slider-item">
                        <div className="browse-inner">
                          <ul>
                         
                            <li key={item?.id}  onClick={() => router.push("/serviceDetails")}>
                                <a href="#" className="wrp-img">
                                <div className="c-img">
                                    <img src={item?.icon} alt={item?.title} />
                                </div>
                                <span>{item?.title}</span>
                                </a>
                            </li>
                          
                          </ul>
                        </div>

                      </div>
                            ))}
                     
                   
                     
                    </div>
                  </div>
                  <div className="services-sec-wrp">
                    <h3>All Services</h3>
                    <div className="services-sec-in">
                      
                     { allServices.map((item) => (
                      <div className="upcoming-my-slide" key={item?.id} onClick={() => router.push("/serviceDetails")}>
                        <a href="#">
                          <div className="upcoming-img">
                            <img src={item?.image} alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">{item?.title}</p>
                            <p className="up-date">{item?.description}.</p>
                          </div>
                        </a>
                      </div>))
                      }

                      
                      
                      {/* <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/home/home-slider/1.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Tap / Shower Repair</p>
                            <p className="up-date">Repair or replace faulty taps & showers.</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/services/service-img.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Wall Painting</p>
                            <p className="up-date">Premium paint & labour.</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/home/home-slider/1.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Pipe Leakage Repair</p>
                            <p className="up-date">Fix leakage in concealed or exposed pipes.</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/home/home-slider/1.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Pipe Leakage Repair</p>
                            <p className="up-date">Fix leakage in concealed or exposed pipes.</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/home/home-slider/1.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Tap / Shower Repair</p>
                            <p className="up-date">Repair or replace faulty taps & showers.</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/services/service-img.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Wall Painting</p>
                            <p className="up-date">Premium paint & labour.</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="upcoming-my-slide">
                        <a href="#">
                          <div className="upcoming-img">
                            <img src="images/home/home-slider/1.svg" alt="" />
                          </div>
                          <div className="upcoming-data ser">
                            <p className="up-text">Pipe Leakage Repair</p>
                            <p className="up-date">Fix leakage in concealed or exposed pipes.</p>
                          </div>
                        </a>
                      </div> */}
           
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
      </div>

    
    </main>
        </>
    )
}