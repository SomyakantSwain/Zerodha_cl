import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(61, 120, 192, 1)", marginTop: "70px" }}
      >
        <div className="d-flex justify-content-between container ">
          <div className="mt-5">
            <a
              href=""
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              {" "}
              Support Portal
            </a>
          </div>
          <div className="mt-5">
            <a
              href=""
              style={{
                color: "white",
                fontSize: "17px",
                textDecoration: "underline",
                textUnderlinePosition: "under",
              }}
            >
              Track tickets
            </a>
          </div>
        </div>
        <div className="container mt-5 ">
          <div className="row ">
            <div className="col-sm col-md-6 " style={{ marginBottom: "100px" }}>
              <h2
                className="d-none d-md-block "
                style={{
                  fontSize: "23px",
                  color: "white",
                  fontWeight: "normal",
                }}
              >
                Search for an answer or browse help topics to create a <br />
                ticket
              </h2>
              <div className="input-group mt-4">
                <input 
                  type="text"
                  className="form-control "
                  placeholder="Eg:how do i activate F&O,why is my order getting rejected ..."
                  style={{ fontSize: "16px", fontFamily: "sans-serif" }}
                  
                />
              </div>

              <div className="text-center mt-4" s id="supportlinks">
                <a href="/signup" style={{color:"white"}}>Track account opening</a>
                {" "}
                <a href="support" style={{color:"white"}}>Track segment activation</a>
                <a href="support" style={{color:"white"}}>Intraday margins</a><br/>
                <a href="support" style={{color:"white"}}>Kite user manual</a>
              </div>
            </div>

            <div className="col-sm col-md-4 mt-3 " id="secondcolom">
              <h5 className="fs-4">
                <a href="support" style={{ color: "white" }}>
                  Featured
                </a>
              </h5>
              <ol >
                <li>
                  <a href="support">
                    Current Takeovers and Delisting - june 2024
                  </a>
                </li>
                <li>
                  <a href="support" >
                    Latest Intraday leaverages and Squre-off timings
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
