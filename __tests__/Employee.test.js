const Employee = require("../lib/employee");
const employee = require("../lib/employee");

describe('employee', () => {
    it('getName', () => {
        const expected = "steve";
        const employee = new Employee(expected, "1","");
        const actual = employee.name;
        expect (actual).toEqual(expected)
    });
})

describe('employee', () => {
    it('getId', () => {
        const expected = "123";
        const employee = new Employee(expected, "1","");
        const actual = employee.id;
        expect (actual).toEqual(expected)
    });
})

describe('employee', () => {
    it('getEmail', () => {
        const expected = "email@email.com";
        const employee = new Employee(expected, "1","");
        const actual = employee.email;
        expect (actual).toEqual(expected)
    });
})

describe('employee', () => {
    it('getRole', () => {
        const expected = "123";
        const employee = new Employee(expected, "1","");
        const actual = employee.getRole;
        expect (actual).toEqual(expected)
    });
})

