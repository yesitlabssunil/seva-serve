import React from 'react';
import Link from 'next/link';

const MyProfile = () => {
  return (
    <main>
    <div className="container home-wraper my-profile">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="browse-wrp">
                <div className="browse-ctg-head my-con-head">
                  <h2 className="sub-cate-page"> <a href="#"><img src="images/home/left-arrow.svg" alt="" /></a>My Profile </h2>
                  
                </div>
                <div className="my-profile-wrapper">
                  <div className="my-profile-page">
                  <img className="bg-img" src="images/inner-page/profile-bg-icon.svg" alt="" />          
              </div>

              <div className="">
                <form className="">
                <div className="input-data-file">
                    <div className="user-img-circle">
                      <img src="images/inner-page/user-profile.svg" alt="" />
                      
                  </div>
                      <input type="file" id="fileInput" />

                      <label htmlFor="fileInput" className="upload-icon">
                      <img src="images/inner-page/upload-file-icon.svg" alt="" />
                      </label>

                  </div>
               <div className="roger-data">

                  <div className="input-group">
                    <img src="images/inner-page/roger-walker-img.svg" alt="" />
                    <input type="text" placeholder="Roger Walker" defaultValue="Roger Walker" />
                  </div>

                  <div className="input-row">
                    <div className="input-group">
                      <img src="images/inner-page/contact-icon.svg" alt="" />
                      <input type="text" placeholder="+1 555 232 254" defaultValue="+1 555 232 254" />
                    </div>

                    <div className="input-group">
                      <img src="images/inner-page/mail-icon.svg" alt="" />
                      <input type="email" placeholder="roger@gmail.com" defaultValue="roger@gmail.com" />
                    </div>
                  </div>

                  <div className="input-group">
                    <img src="images/home/profile-date-icon.svg" alt="" />
                    <input type="text" placeholder="Oct 2026" defaultValue="Oct 2026" />
                  </div>

                  <Link href="/edit-profile" className="primary-cta edit-profile" type="button"><img src="images/inner-page/edit-icon.svg" alt="" />Edit Profile</Link>

                </div>
              </form>
              </div>
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

export default MyProfile