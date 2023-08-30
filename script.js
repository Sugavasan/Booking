const slide=document.querySelectorAll('.slide');
const previous=document.getElementById('previous');
const next=document.getElementById('next');

let index=0;
function show(input){
    slide.forEach((slide,i)=>{
        if(i===index){
            slide.style.display='block';
        }else{
            slide.style.display='none';
        }
    });
}

previous.addEventListener("click",()=>{
    index = (index - 1 +slide.length)%slide.length;
    show(index);
});
next.addEventListener("click",()=>{
    index = (index+1)%slide.length;
    show(index);
});

