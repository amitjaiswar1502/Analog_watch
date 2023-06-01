
// addEventListener('DOMContentLoaded', (event) => {});

addEventListener('DOMContentLoaded', (event) => {
   console.log(event);
   let audio1 = document.getElementById("sample1");
   let audio2 = document.getElementById("sample2");
   
   setInterval(() => {   
      d = new Date();
      htime = d.getHours();
      mtime = d.getMinutes();
      stime = d.getSeconds();
      hrotation = 30 * htime + mtime / 2;
      mrotation = 6 * mtime;
      srotation = 6 * stime;

      hours.style.transform = `rotate(${hrotation}deg)`;
      minutes.style.transform = `rotate(${mrotation}deg)`;
      seconds.style.transform = `rotate(${srotation}deg)`;

      if (stime % 2) {
         audio1.src="sample1.wav"
         audio1.autoplay= true;
         audio2.autoplay= false;
      } else {
         audio2.src="sample2.wav"
         audio1.autoplay= false;
         audio2.autoplay= true;
      }
   
   }, 1000)
});



