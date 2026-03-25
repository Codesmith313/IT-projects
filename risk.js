[...document.getElementsByClassName("progress-bar")].forEach(b=>{
    let pro=b.getAttribute("data-progress");
    b.style.width=`${pro}%`;
})

