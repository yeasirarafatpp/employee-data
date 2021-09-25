import React from 'react';
import './Employee.css';

const Employee = (props) => {
    const { name, img, post, town, mobNO, salary } = props.employee;
    return (
        <div>
            <div className="single-employee">
                <img src={img} alt="EmployeeImage" />
                <h2>{name}</h2>
                <h3>{post}</h3>
                <p>Phone: {mobNO}</p>
                <h5>Salary: {salary}</h5>
                <p>Town: {town}</p>
                <button className="pay-btn">Pay Salary</button>
            </div>
        </div>
    );
};

export default Employee;