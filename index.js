// console.log("linked");
// const t1Title = document.getElementById("title");
// console.log(t1Title);

// const contentElements = document.getElementsByClassName("content");
// console.log(contentElements[0]);
// console.log(contentElements[1]);

// const allLists = document.getElementsByTagName("li");

// console.log(allLists);

// //  Ticket 1 D ****************

// const firstHighlight = document.querySelector(".highlight");
// console.log(firstHighlight);

// const highlightList = document.querySelectorAll(".highlight");
// console.log(highlightList);

// // Ticket 2 ****************

// const firstListItem = document.querySelector("#itemList li");

// const parentList = firstListItem.parentNode;

// console.log(parentList);

// // ticket 2b ****************

// const itemList = document.querySelector("#itemList");

// console.log(itemList.childNodes);

// // ticket 2c ****************

// const ulItemList = document.getElementById("itemList");
// console.log("ticke2c");
// console.log(ulItemList.children);

// // ticke 2d ***********

// console.log(ulItemList.firstChild);
// console.log(ulItemList.lastElementChild);

// // ticket 2e **********

// const cherryLi = document.querySelector("li.highlight");

// console.log("newline");
// console.log(cherryLi);
// console.log(cherryLi.nextSibling);
// console.log(cherryLi.previousSibling);
// console.log(cherryLi.nextElementSibling);

//  ticket 3a ...............
const pageTitle = document.getElementById("title");

pageTitle.style.color = "red";
pageTitle.style.fontSize = "30px";

// ticket 3b **************
const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a dynamically added paragraph";

document.body.appendChild(newParagraph);

// ticket 3c *****************



// ticket 3d .........

const secondPContent = document.querySelector("p.content").nextElementSibling;

secondPContent.setAttribute("title", "Hover over me!");

// ticket 3e *********************

const ulItemListID = document.getElementById("itemList");

ulItemListID.classList.add("styled-list");

const liContentBanana = document.querySelector("li.highlight").previousElementSibling;

liContentBanana.classList.remove("list-item");


// ticket 3f **********************
const liContentDate = document.querySelector("li.highlight").nextElementSibling;

liContentDate.parentNode.removeChild(liContentDate);