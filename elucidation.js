function readmore(seq) {
  console.log("Hello");
  var read_more = document.getElementById("read_more_"+seq);
  var rest_content = document.getElementById("rest_content_"+seq);


  if ($("#rest_content_"+seq).css("display") === "none") {
    read_more.innerHTML = " read less";
    rest_content.style.display = "inline";
  } else {
    read_more.innerHTML = " read more...";
    rest_content.style.display = "none";
  }
}


var btn = $('#go-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

