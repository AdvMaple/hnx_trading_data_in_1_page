// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://hnx.vn/en-gb/co-phieu-etfs/du-lieu-thi-truong-ny.html
// @icon         https://www.google.com/s2/favicons?domain=hnx.vn
// @grant        none
// ==/UserScript==

(function() {
     var x = document.getElementById("d_total_rec").textContent;
     var numberOfIndex=x.match(/\d+/);
     var element = document.getElementById("divNumberRecordOnPage");
     var option = document.createElement("option")
     option.text = numberOfIndex;
     option.value= numberOfIndex;
     element.add(option)
    // Your code here...
})();