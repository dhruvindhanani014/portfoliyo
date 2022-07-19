import React from "react";
import avtar from "./../images/logo.png";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="container pt-5 d-flex flex-column align-items-center">
        <img src={avtar} width={200} alt="Dhruvin Dhanani" />
        <h1>Dhruvin Dhanani</h1>
        <h4>(Student)</h4>
        <p className="text-center border-bottom pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          repellat commodi porro natus eos. Cum nobis, magnam vel, culpa sequi
          quia facere ipsam quaerat id qui, laudantium tenetur quis ea.
        </p>
        <p className="text-center">
          <span className="d-mobile-block">
            Email: dhruvindhanai014@gmail.com
          </span>
          <span className="d-none d-web-contents"> | </span>
          <span className="d-mobile-block">Phone: 7600021181</span>
        </p>
        <p className="text-center">
          Address: Madhavpark, Opp raghuvir school, Ahmedabad. IN - 222222
        </p>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold pb-3">Skills</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <p className="mb-0">HTML</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="pt-3">
                      <p className="mb-0">CSS</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }}
                        >
                          60%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <p className="mb-0">Python</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="pt-3">
                      <p className="mb-0">REACTJS</p>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }}
                        >
                          60%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                <span class="badge bg-primary me-3 mb-3 p-2">Cricket</span>
                <span class="badge bg-secondary me-3 mb-3 p-2">Design</span>
                <span class="badge bg-success me-3 mb-3 p-2">Gaming</span>
                <span class="badge bg-danger me-3 mb-3 p-2">Movie</span>
                <span class="badge bg-warning text-dark me-3 mb-3 p-2">
                  Traveling
                </span>
                <span class="badge bg-info text-dark me-3 mb-3 p-2">Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
