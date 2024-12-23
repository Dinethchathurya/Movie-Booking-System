import React, { useEffect, useState } from "react";
import './style/OrderDetails.css';

const OrderDetails = () => {
    const [orders, setOrders]  = useState([]);
    useEffect(() => {
        const sampleOrder =[
            {
                id: 'ORD001',
                date: '2024-11-30',
                total: 120.5,
                filmName: 'The Lion King',
                seatNumbers: ['A1', 'A2', 'A3'],
            },
            {
                id: 'ORD002',
                date: '2024-12-01',
                total: 45.0,
                filmName: 'Avengers: Endgame',
                seatNumbers: ['B1', 'B2'],
            },
            {
                id: 'ORD003',
                date: '2024-12-02',
                total: 78.9,
                filmName: 'Inception',
                seatNumbers: [],
              },
              {
                id: 'ORD004',
                date: '2024-12-03',
                total: 95.5,
                filmName: 'Interstellar',
                seatNumbers: undefined,
              },
        ];
        const fetchOrder = async () => {
            await new Promise((resolve) => setTimeout(resolve,500));
            setOrders(sampleOrder);
        };
        fetchOrder();
    },[]);

    return(
        <div className="order-details">

      {orders.length > 0 ? (
        <table className="order-details-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total ($)</th>
              <th>Film Name</th>
              <th>Seat Numbers</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.total.toFixed(2)}</td>
                <td>{order.filmName}</td>
                <td>{Array.isArray(order.seatNumbers) && order.seatNumbers.length > 0 ? order.seatNumbers.join(', ') : 'No Seats Assigned'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading orders...</p>
      )}
    </div>
    );
}
export default OrderDetails;