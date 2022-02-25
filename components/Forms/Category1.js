import InputBox from "./InputBox";

const Category1 = ({ heading, details, name, data, setData }) => {
  return (
    <div>
      <div className="heading-2">
        <h4>
          <u>{heading}</u>
        </h4>
        <p>{details}</p>
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

            {data.map((d, index) => (
              <InputBox
                id={index}
                title={d.title}
                type={d.type}
                name={d.name}
                parentName={name}
                setData={setData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category1;
