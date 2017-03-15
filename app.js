require("./instantHello");
var goodbye = require("./talk/goodbye");
var talk = require("./talk");
var question = require("./talk/question");

talk.intro();
talk.hello("Simon");

var answer = question.ask("How to get a job?");
console.log(answer);

goodbye();