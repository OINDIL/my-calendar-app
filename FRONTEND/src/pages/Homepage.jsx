import React from 'react';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import ExpenseBox from '../components/ExpenseBox';
import ToDoBox from '../components/ToDoBox';

const HomePage = ({ selectedDate, totalExpense, onDateClick, setTotalExpense }) => {
  const navigate = useNavigate();
    
  const handleExpenseBoxClick = () => {
    const dateStr = selectedDate.toISOString().substr(0, 10);
    navigate(`/expenses?date=${dateStr}`);
  };

  return (
    <div className="home-page">
      <Calendar onDateClick={onDateClick} />
      <h2>Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</h2>
      <ExpenseBox selectedDate={selectedDate} totalExpense={totalExpense} setTotalExpense={setTotalExpense} onClick={handleExpenseBoxClick} />
      <ToDoBox selectedDate={selectedDate} />
    </div>
  );
};

export default HomePage;
