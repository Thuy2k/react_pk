import React, { useContext, useState } from "react";
// import * as React from 'react';
import { BookingContext } from "../../Provider/BookingProvider";
import "./DashboardPage.css";  // Import file CSS

const DashboardPage = props => {
  React.useEffect(() => {

  }, []);

  // Lấy dữ liệu từ BookingContext
  const { bookings, addBooking, editBooking, deleteBooking  } = useContext(BookingContext);

  // State để quản lý việc mở/đóng popup
  const [showPopup, setShowPopup] = useState(false);
  const [newBooking, setNewBooking] = useState({
    name: "",
    time: "",
    date: "",
  });


  const [isEditing, setIsEditing] = useState(false); // phục vụ cho sửa dữ liệu
  const [editingBooking, setEditingBooking] = useState(null); // phục vụ cho sửa dữ liệu

  const [deleteId, setDeleteId] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);


  // Hàm để xử lý thay đổi trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBooking((prev) => ({ ...prev, [name]: value }));
  };
  // Hàm để thêm bản ghi mới
  const handleAddBooking = () => {
    addBooking(newBooking);
    setShowPopup(false); // Đóng popup sau khi thêm
    setNewBooking({ name: "", time: "", date: "" }); // Reset form
  };

  // Hàm mở popup chỉnh sửa
  const handleEditClick = (booking) => {
    setNewBooking(booking);
    setEditingBooking(booking);
    setIsEditing(true);
    setShowPopup(true);
  };

  // Hàm cập nhật bản ghi đã chỉnh sửa
  const handleEditBooking = () => {
    editBooking({ ...newBooking, id: editingBooking.id });
    setShowPopup(false);
    setNewBooking({ name: "", time: "", date: "" });
    setIsEditing(false);
  };

  // Mở popup xác nhận xóa
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeletePopup(true);
  };

  // Hàm để xóa bản ghi
  const handleDeleteBooking = () => {
    deleteBooking(deleteId);
    setShowDeletePopup(false);
  };



  return (
    <React.Fragment>
      <div className="table-container">
        <h1>Ca đặt lịch phòng khám</h1>
        <button className="add-button" onClick={() => setShowPopup(true)}>
          Thêm bản ghi
        </button>

        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.time}</td>
                <td>{booking.date}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => handleEditClick(booking)}
                  >
                    ✏️ Sửa
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteClick(booking.id)}
                  >
                    ❌ Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Popup form thêm mới hoặc chỉnh sửa */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>{isEditing ? "Sửa ca đặt lịch" : "Thêm ca đặt lịch mới"}</h2>
              <form>
                <label>
                  Tên bệnh nhân:
                  <input
                    type="text"
                    name="name"
                    value={newBooking.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Giờ:
                  <input
                    type="text"
                    name="time"
                    value={newBooking.time}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Ngày:
                  <input
                    type="date"
                    name="date"
                    value={newBooking.date}
                    onChange={handleChange}
                  />
                </label>
                {isEditing ? (
                  <button type="button" onClick={handleEditBooking}>
                    Cập nhật
                  </button>
                ) : (
                  <button type="button" onClick={handleAddBooking}>
                    Thêm
                  </button>
                )}
                <button type="button" onClick={() => setShowPopup(false)}>
                  Đóng
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Popup xác nhận xóa */}
        {showDeletePopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Xác nhận xóa</h2>
              <p>Bạn có chắc chắn muốn xóa bản ghi này không?</p>
              <button onClick={handleDeleteBooking}>Xóa</button>
              <button onClick={() => setShowDeletePopup(false)}>Hủy</button>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );

}

export default DashboardPage;
