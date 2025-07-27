
// js for sidebar

function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
      }
      function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
      }

  // 


  // js for isb scrolltype

  window.onscroll = function (){
    scroll();
  };

  function scroll (){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("UseBar").style.top = "0";
    } else {
      document.getElementById("UseBar").style.top = "-60px";
    }
  };

  //


  

