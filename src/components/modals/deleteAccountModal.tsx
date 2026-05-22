"use client";

import React from 'react';
import {useRouter} from 'next/navigation';

const DeleteAccountModal = () => {

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/delete-account");
  }

  return (
    <div className="modal fade delete-account" id="deleteAccountModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Why would you like to delete your account</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body delete-account-bdy">
          <ul className="list-group list-group-flush">

    <li className="list-group-item custom-item" onClick={handleRedirect} style={{cursor: "pointer"}}>
      <span>I no longer use the app</span>
      <a href="#" className="arrow"><img src="images/inner-page/right-side-move.svg" alt="" /></a>
    </li>

    <li className="list-group-item custom-item">
      <span>I’m concerned about my data privacy</span>
       <a href="#" className="arrow"><img src="images/inner-page/right-side-move.svg" alt="" /></a>
    </li>

    <li className="list-group-item custom-item">
      <span>I found another app I prefer</span>
       <a href="#" className="arrow"><img src="images/inner-page/right-side-move.svg" alt="" /></a>
    </li>

    <li className="list-group-item custom-item">
      <span>The app doesn’t meet my needs</span>
       <a href="#" className="arrow"><img src="images/inner-page/right-side-move.svg" alt="" /></a>
    </li>

    <li className="list-group-item custom-item">
      <span>I want to remove all my personal data</span>
       <a href="#" className="arrow"><img src="images/inner-page/right-side-move.svg" alt="" /></a>
    </li>

  </ul>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default DeleteAccountModal