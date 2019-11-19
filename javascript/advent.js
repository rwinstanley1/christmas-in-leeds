var calenderLinks = document.getElementsByClassName('link');

for(let i = 0; i < calenderLinks.length; i++) {
  calenderLinks[i].addEventListener("mouseover", function() {
    console.log("Mouseover index: " + i);
    calenderLinks[i].style.color = "red";
  })
  calenderLinks[i].addEventListener("mouseout", function() {
    console.log("Mouseout index: " + i);
    calenderLinks[i].style.color = "white";
  })
}
