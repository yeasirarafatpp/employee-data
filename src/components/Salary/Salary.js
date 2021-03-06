import React from 'react';
import './Salary.css';

const Salary = (props) => {
    const { salary } = props;
    let totalSalary = 0;
    for (const info of salary) {
        totalSalary = totalSalary + info.salary;
    }
    return (
        <div className="salary">
            <h2>Employees Total Salary</h2>
            <h4>Salary Paid: {salary.length} Employee</h4>
            <ul>
                {salary.map(info => <li>Employee Name: {info.name}
                    <br /> Employee Salary: {info.salary}
                </li>)}
            </ul>
            <p>Total Payment: {totalSalary}</p>
        </div>
    );
};

export default Salary;