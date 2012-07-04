/**
 combined files : 

D:\www\htdocs\kissy-demo\refund\src\refund\mods\header.js
D:\www\htdocs\kissy-demo\refund\src\refund\inits\apply.js
**/

KISSY.add("refund/mods/header", function(S) {
  return function() {
    alert("header of refund.")
  }
});

KISSY.add("refund/inits/apply", function(S, Header) {
  return function() {
    Header();
    return"refund apply"
  }
}, {requires:["../mods/header"]});


