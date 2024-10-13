import React, { useState } from 'react';
import { Calendar as AntCalendar, ConfigProvider, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    navigate('/book', { state: { date } });
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#FF69B4',
        },
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Select a Date</h2>
        <AntCalendar
          onSelect={(date) => handleDateSelect(date.toDate())}
          fullscreen={false}
        />
      </div>
    </ConfigProvider>
  );
};

export default Calendar;