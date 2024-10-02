import TableComponent from '../../Components/TableComponent';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookingPage.css'; // Nhập file CSS của bạn
import { Modal, Button, Form, Input, DatePicker, TimePicker, message } from 'antd';
import moment from 'moment';

const BookingPage = props => {
  const [listBook, setListBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  const [checkAddOrEdit, setCheckAddOrEdit] = useState('add'); // 'add' hoặc 'edit'
  const [form] = Form.useForm(); // Sử dụng form từ antd



  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bookings');
      setListBook(response.data);
    } catch (err) {
      setError(err);
      message.error('Failed to fetch bookings.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (changedValues) => {
    setEditingBooking((prev) => ({ ...prev, ...changedValues }));
  };

  const handleSubmit = async (values) => {
    try {
      const bookingData = {
        date: values.date.format('YYYY-MM-DD'),
        time: values.time.format('HH:mm'),
        service: values.service,
        customer: values.customer,
      };

      if (editingBooking && checkAddOrEdit === 'edit') {
        // Cập nhật thông tin đặt chỗ hiện tại
        await axios.put(`http://localhost:3001/bookings/${editingBooking.id}`, bookingData);
        message.success('Booking updated successfully!');
      } else {
        // Thêm mới đặt chỗ
        await axios.post('http://localhost:3001/bookings', bookingData);
        message.success('Booking added successfully!');
      }

      // Reset form và đóng modal
      form.resetFields();
      setEditingBooking(null);
      setModalVisible(false);
      fetchBookings();
    } catch (err) {
      setError(err);
      message.error('Failed to save booking.');
    }
  };

  const openModal = (booking = null) => {
    setEditingBooking(booking);
    if (booking) {
      setCheckAddOrEdit('edit'); // Đang chỉnh sửa
      // Nếu có booking, điền vào form
      form.setFieldsValue({
        date: booking.date ? moment(booking.date) : null,
        time: booking.time ? moment(booking.time, 'HH:mm') : null,
        service: booking.service,
        customer: booking.customer,
      });
    } else {
      setCheckAddOrEdit('add'); // Đang thêm mới
      // Nếu không có booking, đặt lại form
      form.resetFields();
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingBooking(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
    { title: 'Service', dataIndex: 'service', key: 'service' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => openModal(record)}>Edit</Button>
          <Button type="link" onClick={() => handleDelete(record.id)}>Delete</Button>
        </>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/bookings/${id}`);
      message.success('Booking deleted successfully!');
      fetchBookings();
    } catch (err) {
      message.error('Failed to delete booking.');
    }
  };


  return (
    <React.Fragment>
      <div>
        <Button type="primary" onClick={() => openModal(null)} className="add-booking-button">Add Booking</Button>
        <TableComponent columns={columns} data={listBook} />

        <Modal
          title={editingBooking ? "Edit Booking" : "Add New Booking"}
          visible={modalVisible}
          onCancel={closeModal}
          footer={null}
        >
          <Form
            layout="vertical"
            form={form} // Sử dụng form từ antd
            onFinish={handleSubmit}
            onValuesChange={handleInputChange}
          >
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: 'Please select a date!' }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="time"
              label="Time"
              rules={[{ required: true, message: 'Please select a time!' }]}
            >
              <TimePicker format="HH:mm" />
            </Form.Item>
            <Form.Item
              name="service"
              label="Service"
              rules={[{ required: true, message: 'Please enter a service!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="customer"
              label="Customer"
              rules={[{ required: true, message: 'Please enter a customer name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Save Booking</Button>
              <Button style={{ marginLeft: 8 }} onClick={closeModal}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </React.Fragment>
  );

}

export default BookingPage;
