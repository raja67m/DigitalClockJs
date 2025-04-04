var h=document.querySelectorAll('.h');
var m=document.querySelectorAll('.s');
var s=document.querySelectorAll('.m');
var days=document.querySelectorAll('.days span');
var date=document.querySelector('.date');
var month=document.querySelectorAll('.month span');
var span=document.querySelectorAll('.meridian span');

function runClock(){
var time=new Date();

var da=time.getDate();
da=da<10?'0'+da:da;


var mo=time.getMonth()+1;
mo=mo<10? '0'+mo:mo;
var ye=time.getFullYear();

//date
date.innerHTML=`${da}-${mo}-${ye}`;

//day
days[time.getDay()].classList.add('days-active');
// month
month[time.getMonth()].classList.add('month-active');

// time function
var hrs=time.getHours();
var min=time.getMinutes();
var sec=time.getSeconds();

if(hrs>12){
   hrs=hrs-12;
   span[1].classList.add('active');
  
}
else{
   if(hrs==0){
      hrs=12;
   }
   span[0].classList.add('active');
 

}


hrs=hrs<10?'0'+hrs:hrs;
min=min<10?'0'+min:min;
sec=sec<10?'0'+sec:sec;

hrs=hrs.toString();
min=min.toString();
sec=sec.toString();

h[0].innerHTML=hrs[0];
h[1].innerHTML=hrs[1];

m[0].innerHTML=min[0];
m[1].innerHTML=min[1];

s[0].innerHTML=sec[0];
s[1].innerHTML=sec[1];


}
setInterval(runClock,1000);