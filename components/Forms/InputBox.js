import { useEffect } from "react";

const InputBox = ({ title, type, name, parentName, setData }) => {
  useEffect(() => {
    switch (type) {
      case "checkbox":
        setData((prev) => {
          let tmp;
          if (prev && prev[parentName]) {
            tmp = prev[parentName];
            if (!tmp[name]) {
              tmp[name] = null;
            }
          } else {
            tmp = {};
            tmp[name] = null;
          }

          let update = {};
          update[parentName] = tmp;

          return { ...prev, ...update };
        });
        break;
      default:
        setData((prev) => {
          let tmp;
          if (prev && prev[parentName]) {
            tmp = prev[parentName];
            if (!tmp[name]) {
              tmp[name] = null;
            }
          } else {
            tmp = {};
            tmp[name] = null;
          }

          let update = {};
          update[parentName] = tmp;

          return { ...prev, ...update };
        });
        break;
    }
  }, []);

  const handleChange = (e) => {
    switch (type) {
      case "checkbox":
        setData((prev) => {
          let tmp;
          if (prev && prev[parentName]) {
            tmp = prev[parentName];
          } else {
            tmp = {};
          }

          tmp[name] = e.target.checked;
          let update = {};
          update[parentName] = tmp;

          return { ...prev, ...update };
        });
        break;
      default:
        setData((prev) => {
          let tmp;
          if (prev && prev[parentName]) {
            tmp = prev[parentName];
          } else {
            tmp = {};
          }
          tmp[name] = e.target.value;
          let update = {};
          update[parentName] = tmp;

          return { ...prev, ...update };
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
