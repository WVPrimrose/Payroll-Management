// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
console.log(addEmployeesBtn)
let employeeTable = ["firstName", "lastName", "salary"]

// Collect employee data
const collectEmployees = function () {
  let employeeArray = []
  let continueAdding = true;

  // TODO: Get user input to create and return an array of employee objects
  while (continueAdding) {
    let firstName = prompt("Enter First Name");
    let lastName = prompt("Enter Last Name");
    let salary = prompt("Enter Salary");
    // want to add a function so the salary only accepts a nummeric value
    // options: !number or NaN
    // possible code
    // function validateSalary() {
    // if (salary.NaN){
    // alert("please enter valid number")
    // Then go back to previous salary prompt
    // }}
    continueAdding = confirm("Do you want to add another employee?");

    const employeesObject = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    }
    console.log(employeeArray)
    employeeArray.push(employeesObject)
  }
  return employeeArray;
  console.log(object.value(employees));
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0
  let allEmployees = employeesArray.length
  for (let newEmployee of employeesArray) {
totalSalary = newEmployee.salary

  }
let averageSalary = totalSalary/allEmployees

console.log(`The average employee salary between our ${allEmployees} employee(s) is $${averageSalary.toFixed(2)}`)}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
  // TODO: Select and display a random employee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {

  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");
  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");
    for (let i = 0; i < employeesArray.length; i++);

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
