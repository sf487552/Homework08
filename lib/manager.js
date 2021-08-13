class Manager {
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
        return "Manager";
    }
    getRoleHtml()
    {
        return `<p class="office">Office Number: ${this.getOfficeNumber()}</p>`;
    }
}

module.exports = Manager;