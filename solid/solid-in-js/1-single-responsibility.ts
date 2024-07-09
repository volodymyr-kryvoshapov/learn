// Single Responsibility Principle (S)

// According to this principle, a class or function
// should have only one reason to change, that is,
// it should have only one task or responsibility.

// Wrong:

function calculateSalary(employee) {
  let salary = employee.hoursWorked * employee.hourlyRate;
  let report = `Your salary is: ${salary}`;

  console.log(report);

  return salary;
}

// Correct:
function calculateSalary(employee) {
  return employee.hoursWorked * employee.hourlyRate;
}

function generateReport(employee, salary) {
  let report = `Your salary is: ${salary}`;
  console.log(report);
}