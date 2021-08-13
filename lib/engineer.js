class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEamil() {
        return this.email;
    }
    getRole() {
        return "Engineer";
    }
    getRoleHtml() {
        return `<p class="github">Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a></p>`;
    }
}

module.exports = Engineer;
