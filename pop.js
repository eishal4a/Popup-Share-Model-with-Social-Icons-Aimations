const viewBtn = document.querySelector(".view-modal"), 
    popup = document.querySelector(".popup"),
    close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");

viewBtn.onclick = () => {
    popup.classList.add("show");
};

close.onclick = () => {
    popup.classList.remove("show");
};

copy.onclick = () => {
    input.select();
    document.execCommand("copy");
    
    field.classList.add("active");
    copy.innerText = "Copied";
    
    setTimeout(() => {
        window.getSelection().removeAllRanges();
        field.classList.remove("active");
        copy.innerText = "Copy";
    }, 3000);
};
