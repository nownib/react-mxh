import "./Dashboard.scss";
const Dashboard = () => {
  const listSubjects = [
    {
      MaMonHoc: "MH001",
      TenMonHoc: "Toán Cao Cấp",
      MaLop: "L01",
      Thu: "Thứ 2",
      Tiet: 1,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tuyến",
      CachTuan: true,
      SiSo: 50,
      PhongHoc: "P101",
    },
    {
      MaMonHoc: "MH002",
      TenMonHoc: "Vật Lý Đại Cương",
      MaLop: "L02",
      Thu: "Thứ 3",
      Tiet: 2,
      SoTinChi: 2,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: false,
      SiSo: 45,
      PhongHoc: "P102",
    },
    {
      MaMonHoc: "MH003",
      TenMonHoc: "Hóa Học Cơ Bản",
      MaLop: "L03",
      Thu: "Thứ 4",
      Tiet: 3,
      SoTinChi: 3,
      HeDaoTao: "Cao Đẳng",
      HTGD: "Trực tuyến",
      CachTuan: true,
      SiSo: 40,
      PhongHoc: "P103",
    },
    {
      MaMonHoc: "MH004",
      TenMonHoc: "Sinh Học Đại Cương",
      MaLop: "L04",
      Thu: "Thứ 5",
      Tiet: 4,
      SoTinChi: 2,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: false,
      SiSo: 38,
      PhongHoc: "P104",
    },
    {
      MaMonHoc: "MH005",
      TenMonHoc: "Lập Trình C",
      MaLop: "L01",
      Thu: "Thứ 6",
      Tiet: 1,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tuyến",
      CachTuan: true,
      SiSo: 30,
      PhongHoc: "P105",
    },
    {
      MaMonHoc: "MH006",
      TenMonHoc: "Mạng Máy Tính",
      MaLop: "L02",
      Thu: "Thứ 7",
      Tiet: 2,
      SoTinChi: 4,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: false,
      SiSo: 35,
      PhongHoc: "P106",
    },
    {
      MaMonHoc: "MH007",
      TenMonHoc: "Quản Lý Dự Án",
      MaLop: "L03",
      Thu: "Thứ 2",
      Tiet: 3,
      SoTinChi: 3,
      HeDaoTao: "Cao Đẳng",
      HTGD: "Trực tuyến",
      CachTuan: true,
      SiSo: 28,
      PhongHoc: "P107",
    },
    {
      MaMonHoc: "MH008",
      TenMonHoc: "Lịch Sử Việt Nam",
      MaLop: "L04",
      Thu: "Thứ 3",
      Tiet: 4,
      SoTinChi: 2,
      HeDaoTao: "Cao Đẳng",
      HTGD: "Trực tiếp",
      CachTuan: false,
      SiSo: 33,
      PhongHoc: "P108",
    },
    {
      MaMonHoc: "MH009",
      TenMonHoc: "Tiếng Anh Giao Tiếp",
      MaLop: "L05",
      Thu: "Thứ 4",
      Tiet: 1,
      SoTinChi: 2,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: true,
      SiSo: 50,
      PhongHoc: "P109",
    },
    {
      MaMonHoc: "MH010",
      TenMonHoc: "Pháp Luật Đại Cương",
      MaLop: "L06",
      Thu: "Thứ 5",
      Tiet: 2,
      SoTinChi: 2,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tuyến",
      CachTuan: false,
      SiSo: 40,
      PhongHoc: "P110",
    },
    {
      MaMonHoc: "MH011",
      TenMonHoc: "Kinh Tế Vi Mô",
      MaLop: "L01",
      Thu: "Thứ 6",
      Tiet: 3,
      SoTinChi: 3,
      HeDaoTao: "Cao Đẳng",
      HTGD: "Trực tiếp",
      CachTuan: true,
      SiSo: 45,
      PhongHoc: "P111",
    },
    {
      MaMonHoc: "MH012",
      TenMonHoc: "Marketing Căn Bản",
      MaLop: "L02",
      Thu: "Thứ 7",
      Tiet: 4,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tuyến",
      CachTuan: false,
      SiSo: 50,
      PhongHoc: "P112",
    },
    {
      MaMonHoc: "MH013",
      TenMonHoc: "Công Nghệ Phần Mềm",
      MaLop: "L03",
      Thu: "Thứ 2",
      Tiet: 1,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: true,
      SiSo: 38,
      PhongHoc: "P113",
    },
    {
      MaMonHoc: "MH014",
      TenMonHoc: "Quản Trị CSDL",
      MaLop: "L04",
      Thu: "Thứ 3",
      Tiet: 2,
      SoTinChi: 4,
      HeDaoTao: "Cao Đẳng",
      HTGD: "Trực tuyến",
      CachTuan: false,
      SiSo: 34,
      PhongHoc: "P114",
    },
    {
      MaMonHoc: "MH015",
      TenMonHoc: "Phân Tích Dữ Liệu",
      MaLop: "L05",
      Thu: "Thứ 4",
      Tiet: 3,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: true,
      SiSo: 32,
      PhongHoc: "P115",
    },
    {
      MaMonHoc: "MH016",
      TenMonHoc: "Lập Trình Web",
      MaLop: "L06",
      Thu: "Thứ 5",
      Tiet: 4,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tuyến",
      CachTuan: false,
      SiSo: 47,
      PhongHoc: "P116",
    },
    {
      MaMonHoc: "MH017",
      TenMonHoc: "Trí Tuệ Nhân Tạo",
      MaLop: "L01",
      Thu: "Thứ 6",
      Tiet: 1,
      SoTinChi: 4,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: true,
      SiSo: 36,
      PhongHoc: "P117",
    },
    {
      MaMonHoc: "MH018",
      TenMonHoc: "Phân Tích Thiết Kế HT",
      MaLop: "L02",
      Thu: "Thứ 7",
      Tiet: 2,
      SoTinChi: 3,
      HeDaoTao: "Cao Đẳng",
      HTGD: "Trực tuyến",
      CachTuan: false,
      SiSo: 42,
      PhongHoc: "P118",
    },
    {
      MaMonHoc: "MH019",
      TenMonHoc: "Khoa Học Máy Tính",
      MaLop: "L03",
      Thu: "Thứ 2",
      Tiet: 3,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tiếp",
      CachTuan: true,
      SiSo: 39,
      PhongHoc: "P119",
    },
    {
      MaMonHoc: "MH020",
      TenMonHoc: "Quản Lý Dữ Liệu",
      MaLop: "L04",
      Thu: "Thứ 3",
      Tiet: 4,
      SoTinChi: 3,
      HeDaoTao: "Đại Học",
      HTGD: "Trực tuyến",
      CachTuan: false,
      SiSo: 41,
      PhongHoc: "P120",
    },
  ];

  return (
    <main>
      <div className="sub-container">
        <div className="custom-container">
          <div className="row">
            <div className="col-12">
              {/* body sub */}
              <div className="custom-table">
                {/* table sub */}
                <table className="table">
                  <thead>
                    <tr>
                      <th className="th-start">Mã Môn Học</th>
                      <th>Tên Môn Học</th>
                      <th>Mã Lớp</th>
                      <th>Thứ</th>
                      <th>Tiết</th>
                      <th>Số Tín Chỉ</th>
                      <th>Hệ Đào Tạo</th>
                      <th>HTGD</th>
                      <th>Cách tuần</th>
                      <th>Sỉ số</th>
                      <th className="th-end">Phòng học</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listSubjects &&
                      listSubjects.length > 0 &&
                      listSubjects.map((sub, index) => (
                        <tr key={index}>
                          <td>{sub.MaMonHoc}</td>
                          <td>{sub.TenMonHoc}</td>
                          <td>{sub.MaLop}</td>
                          <td>{sub.Thu}</td>
                          <td>{sub.Tiet}</td>
                          <td>{sub.SoTinChi}</td>
                          <td>{sub.HeDaoTao}</td>
                          <td>{sub.HTGD}</td>
                          <td>{sub.CachTuan}</td>
                          <td>{sub.SiSo}</td>
                          <td>{sub.PhongHoc}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* end table sub */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
