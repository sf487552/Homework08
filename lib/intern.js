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
}

module.exports = Intern;