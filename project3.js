const contentContainer = document.querySelectorAll(".content-container");
// console.log(contentContainer[0].innerHTML)
for(let i = 0; i < contentContainer.length; i++) {
    contentContainer[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
};