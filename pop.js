const viewBtn document.querySelector(".view-modal"),

popup document.querySelector(".popup"),

close popup.querySelector(".close"),

field popup.querySelector(".field"),

input field.querySelector("input"),

copy field.querySelector("button");

viewBtn.onclick ()={

popup.classList.toggle("show");

}

close.onclick = (){

ViewBtn.click();

}

copy.onclick = ()(

input.select(); //select saput value

if(document.execCommand("copy")) { // the selected text is copied

field.classList.add("active");

copy.innerText = "Copied";

setTimeout((){

window.getSelection().removeAllRanges(); //remove setection from page

field.classList.remove("active");

copy.innerText = "Copy";

}, 3000);