const Engineer = require("../lib/engineer");
const engineer = require("../lib/engineer");

describe('engineer', () => {
    it('getName', () => {
        const expected = "steve";
        const engineer = new Engineer(expected, "1","");
        const actual = engineer.name;
        expect (actual).toEqual(expected)

    });
})

describe('engineer', () => {
    it('getId', () => {
        const expected = "123";
        const engineer = new Engineer(expected, "1","");
        const actual = engineer.id;
        expect (actual).toEqual(expected)

    });
})

describe('engineer', () => {
    it('getEmail', () => {
        const expected = "email@email.com";
        const engineer = new Engineer(expected, "1","");
        const actual = engineer.email;
        expect (actual).toEqual(expected)

    });
})

describe('engineer', () => {
    it('getRole', () => {
        const expected = "123";
        const engineer = new Engineer(expected, "1","");
        const actual = engineer.getRole;
        expect (actual).toEqual(expected)

    });
})

describe('engineer', () => {
    it('getRoleHtml', () => {
        const expected = "Engineer";
        const engineer = new Engineer(expected, "1","");
        const actual = engineer.getRoleHtml;
        expect (actual).toEqual(expected)

    });
})