import Link from "next/link";

const Category = () => {
  return (
    <main>
    <div className="container home-wraper my-profile">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="browse-wrp">
                <div className="browse-ctg-head my-con-head">
                  <h2 className="sub-cate-page"> <Link href="/"><img src="images/home/left-arrow.svg" alt="" /></Link>Category</h2>
                  <div className="see-search">
                     <img src="images/home/search-icon.svg" alt="" />
                    <input type="search" placeholder="Search" />
                  </div>
                </div>
                <div className="browse-inner">
                  <ul>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/1.svg"
                            alt=""
                          />
                        </div>
                        <span>Plumbing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/2.svg"
                            alt=""
                          />
                        </div>
                        <span>Repairing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/3.svg"
                            alt=""
                          />
                        </div>
                        <span>Painting</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/4.svg"
                            alt=""
                          />
                        </div>
                        <span>Laundry</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/5.svg"
                            alt=""
                          />
                        </div>
                        <span>Appliance</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/6.svg"
                            alt=""
                          />
                        </div>
                        <span>Cleaning</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/7.svg"
                            alt=""
                          />
                        </div>
                        <span>Car Wash</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/8.svg"
                            alt=""
                          />
                        </div>
                        <span>AC Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/8.svg"
                            alt=""
                          />
                        </div>
                        <span>Furniture Work</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/8.svg"
                            alt=""
                          />
                        </div>
                        <span>Plumbing</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="wrp-img">
                        <div className="c-img">
                          <img
                            src="images/home/browse-category/8.svg"
                            alt=""
                          />
                        </div>
                        <span>Plumbing</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    </div>
  </main>
  )
}

export default Category