class Toolbox {
    static createRandomString() {
        Math.random().toString(35).substring(8);
    }
}

module.exports = Toolbox;
