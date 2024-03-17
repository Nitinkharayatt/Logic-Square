let employees = []; 

function renderEmployeeList() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchInput) ||
    employee.department.toLowerCase().includes(searchInput)
  );

  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  filteredEmployees.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.available ? 'Available' : 'Not Available'}</td>
      <td class="actions">
        <button onclick="editEmployee(${employee.id})">Edit</button>
        <button onclick="deleteEmployee(${employee.id})">Delete</button>
      </td>
    `;
    employeeList.appendChild(row);
  });
}

function updateDashboardOverview() {
  document.getElementById('totalEmployees').textContent = employees.length;
  document.getElementById('availableEmployees').textContent = employees.filter(employee => employee.available).length;
}


// Sample data for testing
employees = [
  { id: 1, name: "Rahul sharma", department: "Frontend Development", available: true },
  { id: 2, name: "Smith clarck ", department: "Backend Development", available: false },
  { id: 3, name: "Vivek kumar", department: "Testing", available: true },
  { id: 4, name: "John Doe", department: "Deployment", available: false },
  { id: 5, name: "Ashmit rawat", department: "Backend Developmentt", available: true },
  { id: 6, name: "Roman reign", department: "Frontend Development", available: false },
  { id: 7, name: "Neeraj masiwal", department: "Testing", available: true },
  
];

renderEmployeeList();
updateDashboardOverview();
