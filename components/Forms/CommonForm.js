import React from "react";
import "./CommonForm.css";
function CommonForm() {
  return (
    <div className="container">
      <form>
        <div className="heading">
          <h1>COMPANY OVERVIEW</h1>
        </div>
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Name of Company</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Category/Sector</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Category/Sector"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Website</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="https://abc.com"
            />
          </div>
        </div>
        <div className="heading">
          <h1>INTERN/JOB DETAILS</h1>
        </div>
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Designation</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Place of Posting</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Place of Posting"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Job Description</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Job Description"
            />
          </div>
        </div>
        {/* <!-- <button type="submit" class="btn btn-primary">Sign in</button> --> */}
        <div className="heading">
          <h1>ELIGIBLE COURSES/DISCIPLINES</h1>
          <p>
            (List of courses and disciplines offered at IIT (ISM) are shown
            below. Please highlight or check by clicking as per your
            requirement)
          </p>
        </div>
        <div>
          <div className="heading-2">
            <h4>
              <u>4-Year B.Tech Programs</u>
            </h4>
            <p>Admitted through JEE (Advanced)</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>
                      <label for="chemical">Chemical Engineering</label>
                    </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="Chemical" id="chemical" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>
                      <label for="">Civil Engineering</label>
                    </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="Civil" id="Civil" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <p>Computer Science and Engineering</p>
                  </div>
                  <div class="col-4">
                    <input type="checkbox" name="CSE" id="CSE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Electrical Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="EE" id="EE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Electronics & Communication Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="ECE" id="ECE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Engineering Physics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="EP" id="EP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Environmental Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="Env" id="Env" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mechanical Engineering </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="mech" id="mech" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mineral & Metallurgical Engineering </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="mme" id="mme" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mining Engineering </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="me" id="me" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mining Machinery Engineering</p>
                  </div>
                  <div class="col-4">
                    <input type="checkbox" name="min_mac" id="min_mac" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <p>Petroleum Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="petro" id="petro" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="heading-2">
            <h4>
              <u>5-Year Dual Degree/ Integrated M.Tech Programs</u>
            </h4>
            <p>Admitted through JEE (Advanced)</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Computer Science and Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="CSE" id="CSE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mathematics & Computing</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="mnc" id="mnc" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Applied Geology</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGl" id="AGl" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Applied Geophysics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="heading-2">
            <h4>
              <u>Skill Based Hiring</u>
            </h4>
            <p>
              Students with certified technical expertise in the following
              skills (from Coursera, Udemy etc.)
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div clasName="col-8">
                    <p>C, C++, Java, Python etc.</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="CSE" id="CSE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Full Stack Development (Frontend/Backend)</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="mnc" id="mnc" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>AI/ ML/DL, Data Science</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGl" id="AGl" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Business/ Data Analytics, Product Management</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Other Skills(Please Specify)</p>
                  </div>
                  <div className="col-4">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="heading-2">
            <h4>
              <u>3-Year MSc.Tech Programs</u>
            </h4>
            <p>Admitted through JAM</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Applied Geology</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGL" id="AGl" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Applied Geophysics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>
                      <label for="chemical">Chemical Engineering</label>
                    </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="Chemical" id="chemical" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>
                      <label for="">Civil Engineering</label>
                    </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="Civil" id="Civil" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Computer Science and Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="CSE" id="CSE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="heading-2">
            <h4>
              <u>2-Year M.Tech Programs</u>
            </h4>
            <p>Admitted through GATE</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Applied Geology</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGL" id="AGl" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Applied Geophysics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Chemical Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="chemical" id="chemical" />
                  </div>
                </div>
                <div clasName="row">
                  <div className="col-8">
                    <p>Civil Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="civil" id="civil" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Computer Science and Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="CSE" id="CSE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Data Analytics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Electrical Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="EE" id="EE" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Electronics & Communication Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="ECE" id="ECE" />{" "}
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Engineering Physics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="EP" id="EP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Environmental Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="Env" id="Env" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mechanical Engineering </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="mech" id="mech" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mineral & Metallurgical Engineering </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="mme" id="mme" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mining Engineering </p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="me" id="me" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mining Machinery Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="min_mac" id="min_mac" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Petroleum Engineering</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="petro" id="petro" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="heading-2">
            <h4>
              <u>2-Year MBA Programs</u>
            </h4>
            <p>Admitted through CAT</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Business Analytics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGL" id="AGl" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Finance</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Human Resources</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="chemical" id="chemical" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Marketing</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="civil" id="civil" />
                  </div>
                </div>
                <div class="row">
                  <div className="col-8">
                    <p>Operations</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="CSE" id="CSE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="heading-2">
            <h4>
              <u>2-Year M.Sc. Programs</u>
            </h4>
            <p>Admitted through JAM</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-8">
                    <h5>COURSES</h5>
                  </div>
                  <div className="col-4">
                    <h6>SELECT</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Chemistry</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGL" id="AGl" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Mathematics & Computing</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="AGP" id="AGP" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <p>Physics</p>
                  </div>
                  <div className="col-4">
                    <input type="checkbox" name="chemical" id="chemical" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heading">
          <h1>SELECTION PROCEDURE</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p>Resume Shortlisting</p>
            </div>
            <div className="col-2">
              <label for="yes">Yes</label>
              <input type="checkbox" name="yes" id="chemical" />
            </div>
            <div className="col-2">
              <label for="no">No</label>
              <input type="checkbox" name="No" id="chemical" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p>Type of Test</p>
            </div>
            <div className="col-2">
              <div>
                <label for="yes">Technical</label>
                <input type="checkbox" name="technical" id="chemical" />
              </div>
              <div>
                <label for="yes">Both</label>
                <input type="checkbox" name="technical" id="chemical" />
              </div>
            </div>
            <div className="col-2">
              <div>
                <label for="no">Aptitude</label>
                <input type="checkbox" name="aptitude" id="chemical" />
              </div>
              <div>
                <label for="no">None</label>
                <input type="checkbox" name="aptitude" id="chemical" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-8">
              <p>Total Number of Rounds</p>
            </div>
            <div className="col-4">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p>
                Number of offers available for IIT(ISM) students (Range would be
                sufficient)
              </p>
            </div>
            <div className="col-4">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p>Eligibilty Criteria(if any) </p>
            </div>
            <div className="col-4">
              <input type="text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommonForm;
