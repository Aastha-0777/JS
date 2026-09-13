var data = [
    {
        name: "Tata Consultancy Services",
        employees: [
            {
                name: "Rahul Sharma",
                position: "Software Developer",
                salary: 800000
            },
            {
                name: "Priya Patel",
                position: "Project Manager",
                salary: 1500000
            },
            {
                name: "Amit Kumar",
                position: "QA Engineer",
                salary: 700000
            }
        ]
    },
    {
        name: "Infosys",
        employees: [
            {
                name: "Neha Shah",
                position: "Frontend Developer",
                salary: 750000
            },
            {
                name: "Rohit Verma",
                position: "Backend Developer",
                salary: 900000
            },
            {
                name: "Sneha Joshi",
                position: "HR Manager",
                salary: 1200000
            }
        ]
    },
    {
        name: "Reliance Industries",
        employees: [
            {
                name: "Vikas Mehta",
                position: "Data Analyst",
                salary: 850000
            },
            {
                name: "Kajal Singh",
                position: "Business Analyst",
                salary: 1000000
            },
            {
                name: "Arjun Desai",
                position: "Senior Manager",
                salary: 1800000
            }
        ]
    }
];

// Find the company whose name is "Infosys".
// Get all employees from all companies into a single array.
// Find the employee whose name is "Neha Shah".
// Get all employees whose salary is greater than 1000000.
// Create an array containing only the names of all companies.
// Get all employee names from every company in a single array.
// Get all employees whose position contains "Developer".
// Create an array containinglevery company's name and total number of employees.


var company = data.find((c) => c.name = "Infosys")
console.log(company);

var emp = data.flatMap((c) => c.employees).map((e) => e.name);
console.log(emp);

// var spEmpCom = data.flatMap((d) => d.employees).map((e) => e.name = "Neha Shah")
// console.log(spEmpCom);

var empSal = data.flatMap((d) => d.employees).filter((e) => e.salary > 1000000)
console.log(empSal);

var com = data.flatMap((d) => d.name)
console.log(com);

var emp = data.flatMap((c) => c.employees).filter((e) => e.position.includes("Developer")).flatMap((e) => e.name);
console.log(emp);

var com = data.flatMap((d) => [d.name, d.employees.length])
console.log(com);


