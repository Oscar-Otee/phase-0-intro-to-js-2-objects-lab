// Write your solution in this file!

employee = { name: "Sam" }


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee };
    newEmployee[key] = value;
    return newEmployee;
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));
console.log(employee["streetAddress"]);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'));
console.log(employee);


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;
}
let newEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee["name"]);
console.log(typeof(newEmployee));
console.log(employee["name"]);


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
let newEmployee1 = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee1["name"]);
console.log(employee["name"]);
console.log(newEmployee1 === employee);