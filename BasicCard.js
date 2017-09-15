// require fs
var fs = require("fs");

//degines node module to export constructor for basic cards
module.exports = BasicFlashcard;

// constructor for basic card
function BasicFlashcard(front, back) {
    this.front = front;
    this.back = back;
    this.create = function() {
        // flashcard object to be appended to file
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
        };
        // add card to log
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            if (error) {
                console.log(error);
            }
        });
    };
}