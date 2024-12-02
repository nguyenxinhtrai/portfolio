// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});


// Lấy các phần tử trong DOM
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Mở cửa sổ modal khi nhấn nút "Mở Cửa Sổ"
openBtn.onclick = function() {
  modal.style.display = "block"; // Hiển thị modal
  setTimeout(() => {
    modal.classList.add("show"); // Thêm lớp "show" sau khi modal hiển thị
    document.querySelector(".modal-content").classList.add("show"); // Hiệu ứng cho nội dung modal
  }, 10); // Thêm lớp sau một khoảng thời gian ngắn để hiệu ứng hoạt động
}

// Đóng cửa sổ modal khi nhấn nút "X"
closeBtn.onclick = function() {
  modal.classList.remove("show"); // Xóa lớp "show" để bắt đầu hiệu ứng biến mất
  document.querySelector(".modal-content").classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none"; // Ẩn modal sau khi hiệu ứng hoàn tất
  }, 300); // Thời gian trễ để chờ cho hiệu ứng hoàn tất
}

// Đóng cửa sổ modal nếu người dùng nhấn ra ngoài cửa sổ modal
window.onclick = function(event) {
  if (event.target === modal) {  // Nếu người dùng nhấn vào vùng nền ngoài modal
    modal.classList.remove("show");
    document.querySelector(".modal-content").classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Thời gian trễ để chờ cho hiệu ứng hoàn tất
  }
}


