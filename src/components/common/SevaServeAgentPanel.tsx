import React from 'react'

const SevaServeAgentPanel = () => {
  return (
    <div className="offcanvas offcanvas-end agent-off-canvas-wrp" tabIndex="-1" id="agent-msg-offcanvasRight"
    aria-labelledby="offcanvasRightLabel">
    <div className="messages-inbox-in">
      <div className="offcanvas-header agent-header-tab">
        <button type="button" className="btn-close my-cross" data-bs-dismiss="offcanvas" aria-label="Close">
          <img src="/images/off-canvas/cross-icon-off-canvas.svg" alt="" />
        </button>
        <div className="agent-header">
          <img src="/images/off-canvas/agent-profile-img.svg" alt="" />
          <div className="seve-agt-avl">
            <p className="user-seva-text">SevaServe Agent</p>
            <p className="available"><span></span>Available</p>
          </div>
        </div>
        <h5 className="agent-call-icon" id="offcanvasRightLabel">
          <img src="/images/off-canvas/agent-call-icon.svg" alt="" />
        </h5>
      </div>
      <div className="offcanvas-body agent-body">
        <h2 className="">How can I help you today?</h2>
        <div className="agent-service">
          <button type="submit">
            <img src="/images/home/top-right-plumbing.svg" alt="" />
            Plumbing
          </button>
          <button type="submit">
            <img src="/images/home/top-right-plumbing.svg" alt="" />
            Cleaning
          </button>
          <button type="submit">
            <img src="/images/home/top-right-plumbing.svg" alt="" />
            Furniture Work
          </button>
          <button type="submit">
            <img src="/images/home/top-right-plumbing.svg" alt="" />
            Laundry
          </button>
          <button>
            <img src="/images/home/top-right-plumbing.svg" alt="" />
            Painting
          </button>
        </div>
        <div className="water-leakage">
          <div className="ineer-srv">
            <span><img src="/images/home/service-icon.svg" alt="" /></span>
            <p>What service do I need for a water leakage?</p>
          </div>
          <div className="ineer-srv">
            <span><img src="/images/home/service-icon.svg" alt="" /></span>
            <p>What service do I need for a water leakage?</p>
          </div>
          <div className="ineer-srv">
            <span><img src="/images/home/service-icon.svg" alt="" /></span>
            <p>What service do I need for a water leakage?</p>
          </div>
          <div className="ineer-srv">
            <span><img src="/images/home/service-icon.svg" alt="" /></span>
            <p>What service do I need for a water leakage?</p>
          </div>
          <div className="ineer-srv">
            <span><img src="/images/home/service-icon.svg" alt="" /></span>
            <p>What service do I need for a water leakage?</p>
          </div>
        </div>
        <div className="messages-inbox-grp">
          <div className="right-side-wrp">
            <div className="right-side">
              <div className="chat">
                What service do I need for a water leakage?
              </div>
            </div>
            <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
          </div>
          <div className="msg-img-wrper">
            <div className="text-btn-inner">
              <div className="left-side left">
                <div className="pro-stat">

                </div>
                <div className="chat">
                  It looks like you're facing a water leakage issue. To
                  help you better, I need a bit more info.
                </div>
              </div>
              <div className="agent-service-left">
                <button type="submit">
                  <img src="/images/home/top-right-plumbing.svg" alt="" />
                  Bathroom Leakage
                </button>
                <button type="submit">
                  <img src="/images/home/top-right-plumbing.svg" alt="" />
                  Tap Leakage
                </button>
                <button type="submit">
                  <img src="/images/home/top-right-plumbing.svg" alt="" />
                  Toilet Leakage
                </button>
                <button type="submit">
                  <img src="/images/home/top-right-plumbing.svg" alt="" />
                  Wall Seepage
                </button>
                <button>
                  <img src="/images/home/top-right-plumbing.svg" alt="" />
                  Pipe Joint Leakage
                </button>
              </div>
            </div>
            <div className="ai-agent-picture">
              <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
            </div>
          </div>
          <div className="right-side-wrp">
            <div className="right-side">
              <div className="chat">Bathroom Leakage</div>
            </div>
            <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
          </div>
          <div className="msg-img-wrper">
            <div className="text-btn-inner">
              <div className="left-side left">
                <div className="pro-stat">

                </div>
                <div className="chat">
                  Great! Describe the issue briefly so we can understand
                  better.
                </div>
              </div>
            </div>

            <div className="ai-agent-picture">
              <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
            </div>
          </div>
          <div className="right-side-wrp">
            <div className="right-side">
              <div className="chat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </div>
            </div>
            <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
          </div>
          <div className="msg-img-wrper">
            <div className="text-btn-inner">
              <div className="left-side left">
                <div className="pro-stat">

                </div>
                <div className="chat">
                  Thanks! Your description is noted.<br /><br />

                  Do you want to upload an image or video?
                </div>
              </div>
            </div>

            <div className="ai-agent-picture">
              <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
            </div>
          </div>
          <div className="right-side-wrp">
            <div className="right-side img-inner">
              <div className="chat">
                <img src="/images/home/img-agent-pic.svg" alt="" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </div>
            </div>
            <span><img src="/images/home/msg-edit-icon.svg" alt="" /></span>
          </div>
          <div className="msg-img-wrper">
            <div className="text-btn-inner">
              <div className="left-side left">
                <div className="pro-stat">

                </div>
                <div className="chat">
                  I’ve analyzed the image. It seems related to Pipe Joint
                  Leakage.  <br /><br />

                  Do you want to review all entered details?<br />
                  <a href="issue-details.html">View Details</a>
                </div>
              </div>
            </div>

            <div className="ai-agent-picture">
              <img src="/images/home/chat-ai-agent-picture.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="send-msg-wrp">
        <form action="">
          <div className="messages-type-send-in">
            <input type="text" placeholder="Tell SevaServe your problem" className="" />
            <label>
              <img src="/images/home/attach-file.svg" alt="" />
              <input type="file" hidden="" />
            </label>
            <button type="submit" className="">
              <img src="/images/home/msg-send.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  )
}

export default SevaServeAgentPanel