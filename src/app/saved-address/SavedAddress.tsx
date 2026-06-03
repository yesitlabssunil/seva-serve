import DeleteAddressModal from '@/components/modals/Address/DeleteAddressModal'
import EditAddressModal from '@/components/modals/Address/EditAddressModal'
import NewAddressModal from '@/components/modals/Address/NewAddressModal'
import Link from 'next/link'
import React from 'react'

const SavedAddress = () => {
  return (
    <>
      <main>
      <div className="container home-wraper my-profile">
      
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-wrp">
                  <div className="browse-ctg-head my-con-head">
                    <h2 className="sub-cate-page">
                      <Link href="/home"><img src="images/home/left-arrow.svg" alt=""/></Link>
                      Saved Address
                    </h2>
                    <a type="button" data-bs-target="#add-address-popup" data-bs-toggle="modal" className="primary-cta"><i
                        className="fa-solid fa-plus"></i> Add New Address</a>
                  </div>
                 
                  <div className="saved-addresses-wrp">
                    <h3>Your Saved Addresses</h3>
                    <div className="saved-addresses-in">
                      <div className="saved-addresses-icon">
                        <img src="images/saved-addresses/1.svg" alt=""/>
                      </div>
                      <div className="saved-addresses-data">
                        <h4>Home</h4>
                        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                      </div>
                      <div className="saved-addresses-cta">
                        <button type="button" data-bs-target="#edit-address-popup" data-bs-toggle="modal">
                          <img src="images/saved-addresses/edit.svg" alt=""/>
                        </button>
                        <button type="button" data-bs-target="#delete-address-popup" data-bs-toggle="modal">
                          <img src="images/saved-addresses/delete.svg" alt=""/>
                        </button>
                      </div>
                    </div>
                    <div className="saved-addresses-in">
                      <div className="saved-addresses-icon">
                        <img src="images/saved-addresses/2.svg" alt=""/>
                      </div>
                      <div className="saved-addresses-data">
                        <h4>Office</h4>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                      </div>
                      <div className="saved-addresses-cta">
                        <button type="button" data-bs-target="#edit-address-popup" data-bs-toggle="modal">
                          <img src="images/saved-addresses/edit.svg" alt=""/>
                        </button>
                        <button type="button" data-bs-target="#delete-address-popup" data-bs-toggle="modal">
                          <img src="images/saved-addresses/delete.svg" alt=""/>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      

      </div>
    
    </main>


    <NewAddressModal/>
    <EditAddressModal/>
    <DeleteAddressModal/>
    </>
  )
}

export default SavedAddress
