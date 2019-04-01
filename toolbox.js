class Toolbox {
    static createRandomString() {
        return Math.random().toString(35).substring(3).toUpperCase();
    }
}

module.exports = Toolbox;
