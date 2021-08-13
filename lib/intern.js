class Intern {
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    getEamil()
    {
        return this.email;
    }
    getRole()
    {
        return "Intern";
    }
    getRoleHtml()
    {
        return `<p class="school">School: ${this.getSchool()} </p>`;
    }
}

module.exports = Intern;