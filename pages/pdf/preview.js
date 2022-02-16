import PdfForm from "../../components/PdfForm/PdfForm";
import Router from "next/router";

const Preview = () => {
  const handleDownload = async () => {
    Router.push("/api/download");
  };

  return (
    <div>
      <PdfForm data={"Data from api calls"} />
      <b>
        This wont be exported, hence can be used to remove hr details in final
        pdf
      </b>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Preview;
