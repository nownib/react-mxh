// src/Timetable.js
import React from "react";

const timetableData = [
  { Thu: "Thứ 2", Tiet: 1, MonHoc: "Toán Cao Cấp" },
  { Thu: "Thứ 3", Tiet: 1, MonHoc: "Mạng Xã Hội" },
  { Thu: "Thứ 4", Tiet: 1, MonHoc: "Lập Trình Web" },
  { Thu: "Thứ 5", Tiet: 1, MonHoc: "Giáo Dục Thể Chất" },
];

const TKB = () => {
  // Tạo một cấu trúc cho bảng
  const timeSlots = Array.from({ length: 10 }, (_, i) => i + 1); // 6 tiết
  const weekdays = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

  return (
    <div>
      <h2>Thời Khóa Biểu</h2>
      <table
        className="table table-bordered"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Tiết</th>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot) => (
            <tr key={slot}>
              <td>{slot}</td>
              {weekdays.map((day) => {
                const subject = timetableData.find(
                  (item) => item.Thu === day && item.Tiet === slot
                );
                return (
                  <td rowSpan={1} key={day}>
                    {subject ? subject.MonHoc : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TKB;
