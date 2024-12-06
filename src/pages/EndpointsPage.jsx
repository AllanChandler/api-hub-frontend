import React from 'react';

const EndpointsTable = () => {
  const endpoints = [
    {
      category: 'Authentication',
      method: 'GET',
      endpoint: '/auth/test',
      requestBody: 'None',
      authorization: 'None',
    },
    {
      category: 'Authentication',
      method: 'POST',
      endpoint: '/auth/register/',
      requestBody: `{
        "username": "user",
        "password": "test123"
      }`,
      authorization: 'None',
    },
    {
      category: 'Authentication',
      method: 'POST',
      endpoint: '/auth/login/',
      requestBody: `{
        "username": "user",
        "password": "test123"
      }`,
      authorization: 'None',
    },
    {
      category: 'Authentication',
      method: 'POST',
      endpoint: '/auth/user/addrole/',
      requestBody: `{
        "role": "ADMIN"
      }`,
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Destinations',
      method: 'GET',
      endpoint: '/destinations',
      requestBody: 'None',
      authorization: 'None',
    },
    {
      category: 'Destinations',
      method: 'GET',
      endpoint: '/destinations/{id}',
      requestBody: 'None',
      authorization: 'None',
    },
    {
      category: 'Destinations',
      method: 'POST',
      endpoint: '/destinations',
      requestBody: `{
        "city": "Stuttgart",
        "country": "Germany"
      }`,
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Destinations',
      method: 'PUT',
      endpoint: '/destinations/{id}',
      requestBody: `{
        "city": "Tangier",
        "country": "Marocco"
      }`,
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Destinations',
      method: 'DELETE',
      endpoint: '/destinations/{id}',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Bookings',
      method: 'GET',
      endpoint: '/bookings',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Bookings',
      method: 'GET',
      endpoint: '/bookings/{id}',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Bookings',
      method: 'POST',
      endpoint: '/bookings',
      requestBody: `{
        "destinationCity": "Tangier",
        "departureDate": "2024-12-03T10:15:30",
        "arrivalDate": "2024-12-04T10:16:30",
        "bookingDate": "2024-02-02",
        "status": "PENDING"
      }`,
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Bookings',
      method: 'PUT',
      endpoint: '/bookings/{id}',
      requestBody: `{
        "destinationCity": "Tangier",
        "departureDate": "2024-12-03T10:15:30",
        "arrivalDate": "2024-12-04T10:16:30",
        "bookingDate": "2024-02-02",
        "status": "CANCELLED"
      }`,
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Bookings',
      method: 'DELETE',
      endpoint: '/bookings/{id}',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Reviews',
      method: 'GET',
      endpoint: '/reviews',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Reviews',
      method: 'GET',
      endpoint: '/reviews/{id}',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Reviews',
      method: 'POST',
      endpoint: '/reviews',
      requestBody: `{
        "destinationId": 4,
        "rating": 5,
        "comment": "Great experience!"
      }`,
      authorization: 'Bearer {{jwt_token}}',
    },
    {
      category: 'Reviews',
      method: 'DELETE',
      endpoint: '/reviews/{id}',
      requestBody: 'None',
      authorization: 'Bearer {{jwt_token}}',
    },
  ];

  return (
    <div>
      <h2>API Endpoints</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Request Body (JSON)</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((endpoint, index) => (
            <tr key={index}>
              <td>{endpoint.category}</td>
              <td>{endpoint.method}</td>
              <td>{endpoint.endpoint}</td>
              <td>
                <pre>{endpoint.requestBody}</pre>
              </td>
              <td>{endpoint.authorization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EndpointsTable;