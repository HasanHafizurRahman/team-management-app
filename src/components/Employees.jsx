import React, { useState } from "react";
import male from "../assets/maleProfile.jpg";
import female from "../assets/femaleProfile.jpg";

const Employees = () => {
  const state = [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ];
  const [employees, setEmployees] = useState(state);
  const [selectedTeam, setSelectedTeam] = useState("Team A");
  const handleChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  return (
    <main className="container">
      <div class="container">
        <select
          class="form-select form-select-lg mb-3"
          value={selectedTeam}
          onChange={handleChange}
        >
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
          <option value="Team D">Team D</option>
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {employees.map((employee) => (
          <div
            class="card"
            style={{
              width: "18rem",
              cursor: "pointer",
            }}
          >
            <img
              src={employee.gender === "male" ? male : female}
              alt="employee"
            />
            <div className="card-body">
              <p class="card-text fw-bold">Name: {employee.fullName}</p>
              <p class="card-text">Designation: {employee.designation}</p>
              <p class="card-text">Gender: {employee.gender}</p>
              <p class="card-text text-primary">Team: {employee.teamName}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Employees;
