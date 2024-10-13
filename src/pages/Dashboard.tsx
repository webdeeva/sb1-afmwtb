import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ConfigProvider, theme } from 'antd';
import { getAppointments, getClientById, Appointment, Client } from '../db/database';

interface AppointmentWithClientName extends Appointment {
  clientName: string;
}

const columns = [
  {
    title: 'Client Name',
    dataIndex: 'clientName',
    key: 'clientName',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentWithClientName[]>([]);

  useEffect(() => {
    const fetchAppointments = () => {
      const appointmentsData = getAppointments();
      const appointmentsWithClientNames = appointmentsData.map(appointment => {
        const client = getClientById(appointment.clientId);
        return {
          ...appointment,
          clientName: client ? client.name : 'Unknown Client'
        };
      });
      setAppointments(appointmentsWithClientNames);
    };
    fetchAppointments();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#FF69B4',
        },
      }}
    >
      <div>
        <h2 className="text-3xl font-bold mb-6 gradient-text">Appointment Dashboard</h2>
        <Table dataSource={appointments} columns={columns} rowKey="id" />
      </div>
    </ConfigProvider>
  );
};

export default Dashboard;