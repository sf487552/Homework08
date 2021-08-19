const Intern = require("../lib/intern");
const intern = require("../lib/intern");

describe('intern', () => {
    it('getName', () => {
        const expected = "steve";
        const intern = new Intern(expected, "1","");
        const actual = intern.name;
        expect (actual).toEqual(expected)

    });
})

describe('intern', () => {
    it('getId', () => {
        const expected = "123";
        const intern = new Intern(expected, "1","");
        const actual = intern.id;
        expect (actual).toEqual(expected)

    });
})

describe('intern', () => {
    it('getEmail', () => {
        const expected = "email@email.com";
        const intern = new Intern(expected, "1","");
        const actual = intern.email;
        expect (actual).toEqual(expected)

    });
})

describe('intern', () => {
    it('getRole', () => {
        const expected = "123";
        const intern = new Intern(expected, "1","");
        const actual = intern.getRole;
        expect (actual).toEqual(expected)

    });
})

describe('intern', () => {
    it('getRoleHtml', () => {
        const expected = "123";
        const intern = new Intern(expected, "1","");
        const actual = intern.getRoleHtml;
        expect (actual).toEqual(expected)

    });
})