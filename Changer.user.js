// ==UserScript==
// @name         Changer
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

var замены = [
  ["1020", "7777"],
  ["Расул", "Эльвира"],
];

замены.forEach(function(пара) {
  document.body.innerHTML = document.body.innerHTML.replace(
    new RegExp(пара[0], "g"), пара[1]
  );
});
