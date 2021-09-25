import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Salary from '../Salary/Salary';
import './Body.css';

const Body = () => {
    const [employees, setEmployees] = useState([]);
    const [salary, setSalary] = useState([]);

    // Load Data
    useEffect(() => {
        fetch('./employee.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    const paySalary = employee => {
        const newSalary = [...salary, employee];
        setSalary(newSalary);
    }
    return (
        <div className="employee-container">
            <div className="employee-card">
                {
                    employees.map(employee => <Employee key={employee.key} employee={employee} paySalary={paySalary}></Employee>)
                }
            </div>
            <div className="salary-container">
                <Salary salary={salary}></Salary>
            </div>
        </div>
    );
};

export default Body;