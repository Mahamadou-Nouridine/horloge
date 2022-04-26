setInterval(clock, 1000)
function clock(){
  let d;
  let hr;
  let min;
  let sec;
  let hr_angle;
  let sec_angle;
  let min_angle;
  d= new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec= d.getSeconds();
  sec_angle = (sec/60);
  min_angle = ((min + sec_angle)/60);
  hr_angle= ((hr + min_angle)/12);
  document.querySelector('.hand.second').style.transform =`rotate(${sec_angle * 360}deg) `;
  document.querySelector('.hand.minute').style.transform =`rotate(${min_angle * 360}deg) `;
  document.querySelector('.hand.hour').style.transform =`rotate(${(hr_angle ) * 360}deg) `;
  console.log(sec_angle)
}