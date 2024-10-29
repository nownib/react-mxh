const Home = () => {
  return (
    <div className="p-5">
      <input
        type="file"
        accept=".xlsx, .xls"
        // onChange={handleFileUpload}
        style={{ display: "none" }}
        id="excel-upload"
      />
      <label htmlFor="excel-upload" className="btn btn-primary">
        Upload Excel File
      </label>
    </div>
  );
};

export default Home;
