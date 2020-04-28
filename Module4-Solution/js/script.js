
( function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var n in names) {
  var firstLetter = names[n].charAt(0);
  if ( firstLetter.toLowerCase() == 'j') {
    byeSpeaker.speak(names[n]);
  } else {
    helloSpeaker.speak(names[n]);
  }
}

})();