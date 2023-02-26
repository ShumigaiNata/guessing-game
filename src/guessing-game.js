class GuessingGame {
    a = 0;
    b = 1000;
    averageNumber;

    setRange = (min, max) => {
        this.a = min
        this.b = max;
    }

    guess = () => {
        return this.averageNumber = Math.round((this.a + this.b) / 2)
    }

    lower = () => {
        this.b = this.averageNumber
    }

    greater = () => {
        this.a = this.averageNumber
    }
}

module.exports = GuessingGame;