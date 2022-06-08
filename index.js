// describe('employees', function() {
//     describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
//       beforeEach(function () {
//         for (const key in employee) {
//           delete employee[key];
//         }
  
//         employee.name = 'Sam';
//       });
  
const employee = {name: 'Sam', streetAddress: '123 mainstreet'};

// it('returns an employee with the original key value pairs and the new key value pair', function () {
//     expect(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')).to.eql({
//       name: 'Sam',
//       streetAddress: '11 Broadway'
//     });
//   });

function updateEmployeeWithKeyAndValue(object, key, value) {
    let newObj = {...employee}
      newObj[key] = value
            return newObj

}

//describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    // it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
    //   expect(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')).to.eql({
    //     name: 'Sam',
    //     streetAddress: '12 Broadway'
    //   });

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
        return employee
}

// describe('deleteFromEmployeeByKey(employee, key)', function () {
//     it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
//       let newEmployee = deleteFromEmployeeByKey(employee, 'name');

//       expect(newEmployee['name']).to.equal(undefined);
//       expect(typeof newEmployee).to.equal('object');
//     });

function deleteFromEmployeeByKey(employee, key) {
    let newEmployeeObj = {...employee} 
        delete newEmployeeObj[key]
    return newEmployeeObj 
}

// describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
//     it('returns employee without the deleted key/value pair', function () {
//       let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

//       expect(newEmployee['name']).to.equal(undefined);
//     });

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
        return employee
}