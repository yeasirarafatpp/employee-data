import React from 'react';
import { createElement } from 'react';
import './Salary.css';

const Salary = (props) => {
    const { salary } = props;
    let name = '';
    let Salary = 0;
    let totalSalary = 0;
    for (const info of salary) {
        name = info.name;
        Salary = info.salary;
        totalSalary = totalSalary + info.salary;
    }
    return (
        <div className="salary">
            <h2>Employees Total Salary</h2>
            <h4>Salary Paid: {salary.length} Employee</h4>
            <p>Employee Name: {name}</p>
            <p>Salary: {Salary}</p>
            <p>Total Payment: {totalSalary}</p>
        </div>
    );
};

export default Salary;