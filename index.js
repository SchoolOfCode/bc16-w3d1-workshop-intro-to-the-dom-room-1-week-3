console.log("linked");
const t1Title = document.getElementById("title");
console.log(t1Title);

const contentElements = document.getElementsByClassName("content");
console.log(contentElements[0]);
console.log(contentElements[1]);

const allLists = document.getElementsByTagName("li");

console.log(allLists);

//  Ticket 1 D ****************

const firstHighlight = document.querySelector(".highlight");
console.log(firstHighlight);

const highlightList = document.querySelectorAll(".highlight");
console.log(highlightList);

// Ticket 2 ****************

const firstListItem = document.querySelector("#itemList li");

const parentList = firstListItem.parentNode;

console.log(parentList);

// ticket 2b ****************

const itemList = document.querySelector("#itemList");

console.log(itemList.childNodes);