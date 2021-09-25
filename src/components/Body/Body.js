import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Salary from '../Salary/Salary';
import './Body.css';

const Body = () => {
    const [employees, setEmployees] = useState([]);
    // Load Data
    useEffect(() => {
        fetch('./employee.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);
    return (
        <div className="employee-container">
            <div className="employee-card">
                {
                    employees.map(employee => <Employee key={employee.key} employee={employee}></Employee>)
                }
            </div>
            <div className="salary-container">
                <Salary></Salary>
            </div>
        </div>
    );
};

export default Body;