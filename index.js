 function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
      }
      function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
      }

 

  /*
  //js for nav scroll

  let prevScrollPos = window.scrollY;

  window.onscroll = () => {
    let  currentScrollPos = window.scrollY

    if (prevScrollPos > currentScrollPos){
   
         document.querySelector('.navEat').style.top = "-80px";
          
    } else {
       document.querySelector('.navEat').style.top = "0";
      
    }

    prevScrollPos = currentScrollPos;
  };
  //
 */ 


  /*

  // isb scroll type 

   window.onscroll = function (){
    scroll();
  };

 function scroll(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("navEat").style.top = "0"
  } else {
    document.getElementById("navEat").style.top = "-60px"
  }
 }

 */ 



 // js for the auto scro up

 let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100){
    scrollProgress.style.display = "grid";
  } else{
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = "0";
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 };
 window.onscroll =calcScrollValue;
 window.onload = calcScrollValue;


 //
   
