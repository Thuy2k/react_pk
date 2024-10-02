import React, { createContext, useState } from "react";

// Tạo một Context
export const BookingContext = createContext();

// Tạo Provider cho Context
export const BookingProvider = ({ children }) => {
    // Biến chứa danh sách ca đặt lịch phòng khám
    const [bookings, setBookings] = useState([
        { id: 1, name: "Patient A", time: "10:00 AM", date: "2024-10-02" },
        { id: 2, name: "Patient B", time: "11:00 AM", date: "2024-10-02" },
        { id: 3, name: "Patient C", time: "12:00 PM", date: "2024-10-02" },
    ]);

    // Hàm thêm bản ghi mới
    const addBooking = (newBooking) => {
        setBookings([...bookings, { ...newBooking, id: bookings.length + 1 }]);
    };

    // Hàm chỉnh sửa bản ghi
    const editBooking = (updatedBooking) => {
        setBookings(
            bookings.map((booking) =>
                booking.id === updatedBooking.id ? updatedBooking : booking
            )
        );
    };

    // Hàm xóa bản ghi
    const deleteBooking = (id) => {
        setBookings(bookings.filter((booking) => booking.id !== id));
    };


    return (
        <BookingContext.Provider value={{ bookings, addBooking, editBooking, deleteBooking  }}>
            {children}
        </BookingContext.Provider>
    );
};