import React from 'react';
import { Table } from 'antd';
import './TableComponent.css'; // Import file css của bạn

const TableComponent = ({ columns, data }) => {
  return (
    <div className="custom-table-container">
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ pageSize: 5 }} 
        className="custom-table"
      />
    </div>
  );
};

export default TableComponent;