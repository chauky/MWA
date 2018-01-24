String.prototype.filterWords = function (chars) {
    var word = this;
    chars.forEach(element => {
       word = word.replace(element, "***")
    });
    console.log(` ${word}`);

};

"This house is nice!".filterWords(["house", "nice"]);