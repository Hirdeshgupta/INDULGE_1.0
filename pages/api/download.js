import PdfForm from "../../components/PdfForm/PdfForm";
import pdfHelper from "../../helpers/pdfHelper";

export default async function handler(req, res) {
  const buffer = await pdfHelper.componentToPDFBuffer(
    <PdfForm data={"Data from api calls"} />
  );

  // with this header, your browser will prompt you to download the file
  // without this header, your browse will open the pdf directly
  res.setHeader("Content-disposition", 'attachment; filename="Inf.pdf');

  // set content type
  res.setHeader("Content-Type", "application/pdf");

  // output the pdf buffer. once res.end is triggered, it won't trigger the render method
  res.end(buffer);
}
