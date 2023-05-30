const menuebar=document.getElementById('menue-bar');
const navebar =document.querySelector('.navebar');
const btns =document.querySelectorAll('.nav-btn');
const slider=document.querySelectorAll('.slider-video');
const content =document.querySelectorAll('.content');
menuebar.addEventListener('click',function(){
    if(  menuebar.className=='fa  fa-bars'){

    menuebar.className='fa fa-xmark';
    navebar.classList.add('active');
}
else{
    menuebar.className='fa  fa-bars';
    navebar.classList.remove('active');
}
 

}

)
 
var slidernav=(item)=>{
    btns.forEach((btn)=>{
btn.classList.remove('active');
    })
    slider.forEach((slide)=>{
        slide.classList.remove('active');
            });

            content.forEach((con)=>{
                con.classList.remove('active');
                    });
 
    btns[item].classList.add('active');
    slider[item].classList.add('active');
    content[item].classList.add('active');
}
 btns.forEach((btn,i)=>{
btn.addEventListener('click',function(){
    slidernav(i);
})
 })