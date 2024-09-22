function clicked(btn,text, pic,image) {
let button = document.getElementById(btn);    
let para = document.getElementById(text); 
let picture = document.getElementById(pic)   
let images = document.getElementById(image)   

button.addEventListener("click",()=>{
    para.classList.toggle("para-2");
    picture.classList.toggle("hidden");
    images.classList.toggle("hidden");
})

}
clicked("btn-1","text-1","pic-1","pic-2-1")
clicked("btn-2","text-2","pic-2","pic-2-2")
clicked("btn-3","text-3","pic-3","pic-2-3")
clicked("btn-4","text-4","pic-4","pic-2-4")