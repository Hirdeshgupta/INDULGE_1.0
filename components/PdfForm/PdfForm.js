
const PdfForm = ({ data }) => {
  return (
    <html>
      <head>
        <meta charSet="utf8" />
        <link rel="stylesheet" href="http://localhost:1234/static/pdf.css" />
      </head>
      <body>
        <div>
          Hey, this is the form page, edit this template to create dynamic page{" "}
          {data}
        </div>
      </body>
    </html>
  );
};

export default PdfForm;
