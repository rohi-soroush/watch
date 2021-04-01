// particlesJs.load('particles-js', 'particles.json', function(){
//     console.log('particles.json loaded correctly...');
// });

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded........");
});

var typed = new Typed(".job", {
  strings: [
    "Competitive Programmer",
     "WEB Developer",
     "ML Engineer"

    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
