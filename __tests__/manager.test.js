const Manager = require("../lib/manager");
const manager = require("../lib/manager");

describe('manager', () => {
    it('getName', () => {
        const expected = "steve";
        const manager = new Manager(expected, "1","");
        const actual = manager.name;
        expect (actual).toEqual(expected)

    });
})

describe('manager', () => {
    it('getId', () => {
        const expected = "123";
        const manager = new Manager(expected, "1","");
        const actual = manager.id;
        expect (actual).toEqual(expected)

    });
})

describe('manager', () => {
    it('getEmail', () => {
        const expected = "email@email.com";
        const manager = new Manager(expected, "1","");
        const actual = manager.email;
        expect (actual).toEqual(expected)

    });
})

describe('manager', () => {
    it('getRole', () => {
        const expected = "123";
        const manager = new Manager(expected, "1","");
        const actual = manager.getRole;
        expect (actual).toEqual(expected)

    });
})

describe('manager', () => {
    it('getRoleHtml', () => {
        const expected = "123";
        const manager = new Manager(expected, "1","");
        const actual = manager.getRoleHtml;
        expect (actual).toEqual(expected)

    });
})