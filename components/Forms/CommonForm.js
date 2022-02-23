import React, { useState } from "react";
import "./CommonForm.css";

const dualDegreeMTechCourses = [
  { title: "Computer Science and Engineering", type: "checkbox", name: "CSE" },
  { title: "Mathematics & Computing", type: "checkbox", name: "MNC" },
  { title: "Applied Geology", type: "checkbox", name: "ag" },
  { title: "Applied Geophysics", type: "checkbox", name: "gp" },
];

const fields = [
  {
    heading: "4-Year B.Tech Programs",
    details: "Admitted through JEE (Advanced)",
    data: [
      {
        title: "Chemical Engineering",
        type: "checkbox",
        name: "chemical",
      },
      {
        title: "Civil Engineering",
        type: "checkbox",
        name: "civil",
      },
      {
        title: "Computer Science and Engineering",
        type: "checkbox",
        name: "cse",
      },
      {
        title: "Electrical Engineering",
        type: "checkbox",
        name: "ee",
      },
      {
        title: "Electronics & Communication Engineering",
        type: "checkbox",
        name: "ece",
      },
      {
        title: "Engineering Physics",
        type: "checkbox",
        name: "ep",
      },
      {
        title: "Environmental Engineering",
        type: "checkbox",
        name: "env",
      },
      {
        title: "Mechanical Engineering",
        type: "checkbox",
        name: "mech",
      },
      {
        title: "Mineral & Metallurgical Engineering",
        type: "checkbox",
        name: "fmme",
      },
      {
        title: "Mining Engineering",
        type: "checkbox",
        name: "me",
      },
      {
        title: "Mining Machinery Engineering",
        type: "checkbox",
        name: "mme",
      },
      {
        title: "Petroleum Engineering",
        type: "checkbox",
        name: "pe",
      },
    ],
  },

  {
    heading: "5-Year Dual Degree/ Integrated M.Tech Programs",
    details: "Admitted through JEE (Advanced)",
    data: [
      {
        title: "Computer Science and Engineering",
        type: "checkbox",
        name: "CSE",
      },
      { title: "Mathematics & Computing", type: "checkbox", name: "MNC" },
      { title: "Applied Geology", type: "checkbox", name: "AG" },
      { title: "Applied Geophysics", type: "checkbox", name: "GP" },
    ],
  },

  {
    heading: "Skill Based Hiring",
    details:
      " Students with certified technical expertise in the following skills (from Coursera, Udemy etc.)",
    data: [
      {
        title: "C, C++, Java, Python etc.",
        type: "checkbox",
        name: "proglang",
      },
      {
        title: "Full Stack Development (Frontend/Backend)",
        type: "checkbox",
        name: "fullstack",
      },
      {
        title: "AI/ ML/DL, Data Science",
        type: "checkbox",
        name: "machinelearning",
      },
      {
        title: "Business/ Data Analytics, Product Management",
        type: "checkbox",
        name: "prodmanagement",
      },
      {
        title: "Other Skills(Please Specify)",
        type: "text",
        name: "otherskills",
      },
    ],
  },

  {
    heading: "3-Year MSc.Tech Programs",
    details: "Admitted through JAM",
    data: [
      {
        title: "Applied Geology",
        type: "checkbox",
        name: "agl",
      },
      {
        title: "Applied Geophysics",
        type: "checkbox",
        name: "agp",
      },
      {
        title: "Chemical Engineering",
        type: "checkbox",
        name: "chemical",
      },
      {
        title: "Civil Engineering",
        type: "checkbox",
        name: "civil",
      },
      {
        title: "Computer Science and Engineering",
        type: "checkbox",
        name: "cse",
      },
    ],
  },

  {
    heading: "2-Year M.Tech Programs",
    details: "Admitted through GATE",
    data: [
      {
        title: "Applied Geology",
        type: "checkbox",
        name: "agl",
      },
      {
        title: "Applied Geophysics",
        type: "checkbox",
        name: "agp",
      },
      {
        title: "Chemical Engineering",
        type: "checkbox",
        name: "chemical",
      },
      {
        title: "Civil Engineering",
        type: "checkbox",
        name: "civil",
      },
      {
        title: "Computer Science and Engineering",
        type: "checkbox",
        name: "cse",
      },
      {
        title: "Data Analytics",
        type: "checkbox",
        name: "dataanalyst",
      },
      {
        title: "Electrical Engineering",
        type: "checkbox",
        name: "ee",
      },
      {
        title: "Electronics & Communication Engineering",
        type: "checkbox",
        name: "ece",
      },
      {
        title: "Engineering Physics",
        type: "checkbox",
        name: "ep",
      },
      {
        title: "Environmental Engineering",
        type: "checkbox",
        name: "env",
      },
      {
        title: "Mechanical Engineering",
        type: "checkbox",
        name: "mech",
      },
      {
        title: "Mineral & Metallurgical Engineering",
        type: "checkbox",
        name: "mle",
      },
      {
        title: "Mining Engineering",
        type: "checkbox",
        name: "me",
      },
      {
        title: "Mining Machinery Engineering",
        type: "checkbox",
        name: "mme",
      },
      {
        title: "Petroleum Engineering",
        type: "checkbox",
        name: "pe",
      },
    ],
  },
  {
    heading: "2-Year MBA Programs",
    details: "Admitted through CAT",
    data: [
      {
        title: "Business Analytics",
        type: "checkbox",
        name: "ba",
      },
      {
        title: "Finance",
        type: "checkbox",
        name: "finance",
      },
      {
        title: "Human Resources",
        type: "checkbox",
        name: "hr",
      },
      {
        title: "Marketing",
        type: "checkbox",
        name: "marketing",
      },
      {
        title: "Operations",
        type: "checkbox",
        name: "operations",
      },
    ],
  },
  {
    heading: "2-Year M.Sc. Programs",
    details: "Admitted through JAM",
    data: [
      {
        title: "Chemistry",
        type: "checkbox",
        name: "chem",
      },
      {
        title: "Mathematics and Computing",
        type: "checkbox",
        name: "mnc",
      },
      {
        title: "Physics",
        type: "checkbox",
        name: "physics",
      },
    ],
  },
];

import Category from "./Category";

function CommonForm() {
  // s2 = Section2 [5-Year Dual Degree/ Integrated M.Tech Programs]
  const [s2, setS2] = useState({
    CSE: false,
    MNC: false,
    ag: false,
    gp: false,
  });

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

        {fields.map((field, index) => (
          <Category
            id={index}
            heading={field.heading}
            details={field.details}
            data={field.data}
            setData={setS2}
          />
        ))}

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
