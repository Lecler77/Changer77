// ==UserScript==
// @name         Changer
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

var замены = [
  ["1859", "3512"],
  ["Клим", "Никита"],
  ["Лучкин", "Якасов"],
  ["+7 912 468-93-59", "+7 987 552-67-03"]
  ["0,01", "15000"]
];

замены.forEach(function(пара) {
  document.body.innerHTML = document.body.innerHTML.replace(
    new RegExp(пара[0], "g"), пара[1]
  );
});
