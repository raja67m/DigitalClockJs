var h=document.querySelector('.h');
var m=document.querySelector('.s');
var s=document.querySelector('.m');
var days=document.querySelector('.daysspan');
var date=document.querySelector('.date');
var month=document.querySelector('.month');
var span=document.querySelector('.meridian');

function runClock(){
var time=new Date();

var da=time.getDate();
da=da<10?'0'+da:da;


var mo=time.getMonth()+1;
mo=mo<10? '0'+mo:mo;
var ye=time.getFullYear();
console.log(da,mo,ye);
//date
date.innerHTML=`${da}-${mo}-${ye}`;
console.log(time.getDay());
//day
days[time.getDay()].classList.add('day-active');

}
runClock();