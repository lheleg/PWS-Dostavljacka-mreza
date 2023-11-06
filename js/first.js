function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }

  function contactMe() {
  var name = document.getElementById("contact_name").value;
  var emailSender = document.getElementById("contact_email").value;
  var subject = document.getElementById("contact_subject").value;
  var message = document.getElementById("contact_message").value;
  var email = "aadostava3@gmail.com"

  var body = message + "\n\n" + "Sincerely, " + name + "\n"
  var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + encodeURIComponent(body);
  if(name.length > 0 && message.length > 0) {
    event.preventDefault();
    window.open(mailtoLink);
  }
}

var language; 
function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('eng') : false;
$.ajax({ 
url:  '/js/' +  localStorage.getItem('language') + '.json', 
dataType: 'json', async: false, dataType: 'json', 
success: function (lang) { language = lang } });
}

function setLanguage(lang) {
localStorage.setItem('language', lang);
}