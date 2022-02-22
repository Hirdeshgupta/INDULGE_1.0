const InputBox = ({ title, type, name, setData }) => {
  const handleChange = (e) => {
    switch (type) {
      case "checkbox":
        setData((prev) => {
          let tmp = {};
          tmp[name] = e.target.checked;

          return { ...prev, ...tmp };
        });
        break;
      default:
        setData((prev) => {
          let tmp = {};
          tmp[name] = e.target.value;

          return { ...prev, ...tmp };
        });
        break;
    }
  };

  return (
    <div className="row">
      <div className="col-8">
        <p>{title}</p>
      </div>
      <div className="col-4">
        <input type={type} name={name} id={name} onChange={handleChange} />
      </div>
    </div>
  );
};

export default InputBox;
