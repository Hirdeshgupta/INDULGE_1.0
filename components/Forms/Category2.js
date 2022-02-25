const Category2 = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <p>{data.heading}</p>
        </div>
        <div className="col-2">
          <label for={data.label1}>{data.label1}</label>
          <input
            type={data.type}
            name={data.label1}
            id={data.label1}
            onChange={handleChange}
          />
        </div>
        <div className="col-2">
          <label for={data.label2}>{data.label2}</label>
          <input
            type={data.type}
            name={data.label2}
            id={data.label2}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Category2;
