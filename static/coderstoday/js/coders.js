function scrollToSection(hash){
  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
}



function switchTab(tab_id, bg_class){
	$('#stakeholders-container-id').removeClass();
	$('#stakeholders-container-id').addClass('stakeholders-container '+bg_class);

	$('.tab').removeClass('active');
	$('.tab-content').removeClass('active');
	$('#'+tab_id).addClass('active');
	$('#'+tab_id+'-content').addClass('active');
}


function detailsOnHover(event){
	$('.overlay').removeClass('visible');
	$($(event.target).next()[0]).addClass('visible');
}


const mentors = [{
	"name": 'Abhishek Munjal',
	"image": '../static/coderstoday/images/mentors/abhishek_munjal.jpg',
	"image_type": 'jpg',
	"designation": 'Python Developer',
	"webp_image": "",
	"linkedin": 'https://www.linkedin.com/in/abhishek-munjal-619017a9/'
},
{
	"name": 'Deepa Rohilla',
	"image": '../static/coderstoday/images/mentors/deepa_rohilla.jpeg',
	"image_type": 'jpg',
	"designation": 'Java Developer',
	"webp_image": "",
	"linkedin": 'https://www.linkedin.com/in/deepa-rohilla-158422185/'
},
{
	"name": 'Shreya Pandey',
	"image": '../static/coderstoday/images/mentors/shreya_pandey.jpeg',
	"image_type": 'jpg',
	"designation": 'MERN Stack Developer',
	"webp_image": "",
	"linkedin": 'https://www.linkedin.com/in/shreya-kumari-pandey-4b7b6214b/'
},
{
	"name": 'Raghav Saini',
	"image": '../static/coderstoday/images/mentors/raghav_saini.jpg',
	"image_type": 'jpg',
	"designation": 'UI/UX Developer',
	"webp_image": "",
	"linkedin": 'https://www.linkedin.com/in/raghav-saini/'
},
{
	"name": 'Jagjeet Gandhi',
	"image": '../static/coderstoday/images/mentors/jagjeet_gandhi.jpg',
	"image_type": 'jpg',
	"designation": 'iOS Developer',
	"webp_image": "",
	"linkedin": 'https://www.linkedin.com/in/jagjeet-gandhii/'
}];


$(document).ready(function(){
	let html = '';
	mentors.map(
		function(iter){
			html = html + `
					<div class="mentor-block">
						<div class="mentor-image">
							<picture>
							  <!--source type="image/webp" srcset="static/webp_images/logo.webp"-->
							  <source type="image/`+iter['image_type']+`" srcset="`+iter['image']+`">
							  <img src="`+iter['image']+`">
							</picture>					
						</div>
						<div class="mentor-text">
							<div class="mentor-title">
								`+iter['name']+`
							</div>
							<div class="mentor-designation">
								`+iter['designation']+`
							</div>
							<div class="linkedin-profile">
								<a href="`+iter['linkedin']+`" target="_blank">
									<img src="../static/coderstoday/images/icons/linkedin.png">
								</a>
							</div>
						</div>
					</div>
			` + ' ';
		})
	$('#mentors-container-id').html(html);
});

/*
$(document).ready(function () {
  var $magic = $(".logo_magic"),
    magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function (e) {
    $magic.css({ left: e.pageX - magicWHalf, top: e.pageY - magicWHalf });
  });
});
*/

function addFileToForm(){

	const fileInput = $('form[name="POPUP_FORM"] input[name="cv"]')[0];
	console.log(fileInput);
	fileInput.onchange = () => {
	if (fileInput.files.length > 0) {
		file = fileInput.files[0].name;
		var allowedExtensions =  /(\.doc|\.docx|\.odt|\.txt|\.pdf)$/i; 
	        if (!allowedExtensions.exec(file)) {
	            alert('Invalid file type');
	            return;
	        }
	  const fileName = $('form[name="POPUP_FORM"] label.cv_label')[0];
	  console.log(fileName);
	  fileName.innerHTML = fileInput.files[0].name;
	  var reader = new FileReader();
	  var file = fileInput.files[0];
	  reader.onload = function() {
	  	console.log(reader.result);
	    document.getElementById('fileContent').value = reader.result;
	    document.getElementById('fileName').value = file.name;
	  }
	  reader.readAsDataURL(file);
	}
	}

}

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('page_loader').style.visibility="visible";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('page_loader').style.visibility="hidden";
      },1000);
  }
}


function redirect(url){
	window.location.href = url;
}

function addListenerToForm(form, form_type){

	form.addEventListener('submit', e => {
	    e.preventDefault();
	    value = form_validation(form, form_type);
	    if(!value){
	    	return value;
	    }
      $("#"+form_type+"_form_button").text("Wait");
      $("#"+form_type+"_form_button").attr("disabled","disabled");
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	  .then(response => {
	  	console.log('Success!', response);
	  	$("#"+form_type+"_form_button").text("Thank You");
  	 	setTimeout(function(){location.reload()}, 1500);
	  })
	  .catch(error => {
	  	console.error('Error!', error.message);
	  	$("#"+form_type+"_form_button").text("Error");
  	 	setTimeout(function(){location.reload()}, 1500);
	  })
	})

}


const scriptURL = "https://script.google.com/macros/s/AKfycbyOlI_EYZ8HGGOsUgwKyDxWgMDmsL8XW1X5JKSGfCX2b5oJYCJnxi50q1fzyp2SlSegsA/exec";
let form = document.forms['GENERAL_FORM'];
addListenerToForm(form, "general");
form = document.forms['POPUP_FORM'];
addListenerToForm(form,"popup");


function form_validation(form, form_type){
	console.log(form, form_type);
	names_list = ['name','email','description'];
	if(form_type=='GENERAL'){
		names_list.push('subject');
	}
	else if(form_type=='MENTOR'){
		names_list.push('availability');
		names_list.push('phone');
	}
	else if(form_type=='CLIENT'){
		names_list.push('availability');
		names_list.push('phone');
	}
	else if(form_type=='COLLEGE'){
		names_list.push('availability');
		names_list.push('phone');
		names_list.push('college');
	}
	for(var i=0;i<names_list.length;i++){
		if(!$(form[names_list[i]])[0].value){
			console.log(names_list[i]);
			alert("Please fill all the values");
			return false;
		}
	}
	return true;
}



/* If the device is touch enabled */
function is_touch_enabled() {
    return ( 'ontouchstart' in window );/* || 
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );*/
}


if (is_touch_enabled())
{
	$('.try-now.common-button').hide();
	$('.join-club.common-button').css('margin','0');
}

/* If the device is touch enabled */
