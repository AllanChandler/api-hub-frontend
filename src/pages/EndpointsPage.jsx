// pages/EndpointsPage.jsx
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const EndpointsPage = () => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <TableHeader>Endpoint</TableHeader>
            <TableHeader>Description</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>/api/users</TableCell>
            <TableCell>Get all users</TableCell>
          </tr>
          <tr>
            <TableCell>/api/journeys</TableCell>
            <TableCell>Get journey details</TableCell>
          </tr>
          <tr>
            <TableCell>/api/destinations</TableCell>
            <TableCell>Get popular destinations</TableCell>
          </tr>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default EndpointsPage;
