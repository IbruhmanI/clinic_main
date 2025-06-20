const nextBtn = document.querySelector('.arrow-btn2');
const prevBtn = document.querySelector('.arrow-btn')
const picArr = [
  "pics/doctor_using_mechanical_tensiometer_medium_shot_1200x675.jpg",
  "pics/thumbnail-2.webp",
  "pics/mqdefault_6s.webp"
];
let currentIndex = 0;
prevBtn.addEventListener('click', PrevImage);
nextBtn.addEventListener('click', NextImage);
function ShowImage(index){
  const img = document.getElementById('doctor-image');
  img.src = picArr[index];
}
function PrevImage(){
  currentIndex = (currentIndex + 1) % picArr.length;
  ShowImage(currentIndex);
}
function NextImage(){
  currentIndex = (currentIndex - 1 + picArr.length)% picArr.length;
  ShowImage(currentIndex);
}
const contacts = document.getElementById('contacts');
const numberTooltip = document.querySelector('.contacts-tooltip')
contacts.addEventListener('click', ()=> {
  numberTooltip.classList.toggle('active');
})
document.addEventListener('click', (e) => {
  if(!contacts.contains(e.target))
    numberTooltip.classList.remove('active');
});
numberTooltip.addEventListener('mouseenter',()=>
{
  contacts.classList.add('no-hover.');
});
numberTooltip.addEventListener('mouseleave', ()=>{
  contacts.classList.remove('no-hover');
});
