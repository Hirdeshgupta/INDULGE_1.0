const Category3 = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <p>{data.title} </p>
        </div>
        <div className="col-4">
          <input
            type={data.type}
            name={data.name}
            id={data.name}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Category3;
