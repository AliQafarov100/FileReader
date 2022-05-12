let input = document.querySelector(".select");
let row = document.querySelector(".row");
let zone = document.querySelector(".drop-zone");
let click = document.querySelector(".clicks");

click.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change",(e) => {
    let files = Array.from(e.target.files);
    
    files.forEach((file)=>{
        showImage(file);
    });
});

function showImage(file){
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("loadend",() => {
        let col2 = document.createElement("div");
        col2.className = "col-lg-2 image";


        let img = document.createElement("img");
        img.src = fileReader.result;
        img.style.width = "100%";
        img.style.height = "100px";
        img.classList.add("image");

        let icon = document.createElement("i");
        icon.className = "fa-solid fa-trash";
        icon.classList.add("icon");
        icon.classList.add("delete");
        col2.appendChild(icon);

        icon.addEventListener("click",() => {
            col2.remove();
        })
        
        col2.appendChild(img);
        row.appendChild(col2);
    })
}

zone.addEventListener("dragover",(e)=>{
      e.preventDefault();
})

zone.addEventListener("drop",(e) =>{
    e.preventDefault();
    let files = Array.from(e.dataTransfer.files);
    files.forEach(file=>{
        showImage(file);
    });
});
