import React from "react";
import { MDBDataTable } from "mdbreact";
import PropTypes from "prop-types";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const CustomTable = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Job profile",
        field: "role",
        sort: "asc",
        width: 100,
      },
      {
        label: "CTC/Stipend",
        field: "salary",
        sort: "asc",
        width: 100,
      },
      {
        label: "Graduation year",
        field: "year",
        sort: "asc",
        width: 100,
      },
      {
        label: "JNF/INF",
        field: "JNF_INF",
        sort: "asc",
        width: 100,
      },
      {
        label: "HR Details",
        field: "HR",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Sprinklr",
        role: "Software development engineer intern",
        salary: "2,00,000INR",
        year: "2023",
        JNF_INF: "INF",
        HR: "primary: Priyanka Dubey , priyank29@sprinklr.com , 8648753192",
      },
      {
        name: "Sprinklr",
        role: "Product engineer intern",
        salary: "1,00,000INR",
        year: "2023",
        JNF_INF: "INF",
        HR: "primary: Ritesh Kulakarni , ritesh33@sprinklr.com , 9975874723",
      },
      {
        name: "Sprinklr",
        role: "Software development engineer Full-time",
        salary: "2,00,000INR",
        year: "2022",
        JNF_INF: "JNF",
        HR: "primary: Priyanka Dubey , priyank29@sprinklr.com , 8648753192",
      },
      {
        name: "Google",
        role: "Software development engineer intern",
        salary: "80,000INR",
        year: "2023",
        JNF_INF: "INF",
        HR: "primary: Shobha Shrivastav , shobha56@google.com , 8070669622",
      },
      {
        name: "Flipkart",
        role: "Software development engineer Full-time",
        salary: "1,00,000INR",
        year: "2022",
        JNF_INF: "JNF",
        HR: "primary: Anjali Singh , anjali77singh@flipkart.com , 7904685632",
      },
    ],
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default CustomTable;

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

// CustomTable.propTypes = {
//   tableHeaderColor: PropTypes.oneOf([
//     "warning",
//     "primary",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray",
//   ]),
//   tableHead: PropTypes.arrayOf(PropTypes.string),
//   tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
// };
