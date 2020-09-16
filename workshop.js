
	function changeStatus(ele, to_be_changed){
		checked = ele.checked;
		if (checked){
			$(to_be_changed).show();
			if(to_be_changed == '.submit-block'){
				$(to_be_changed).append('<h1 class="title is-4 final-response"></h1><button id="submit" type="submit">Submit</button>');
			}
		}
		else{
			$(to_be_changed).hide();
			if(to_be_changed == '.submit-block'){
				$(to_be_changed).empty();
			}
		}
	}

 
  const fileInput = document.querySelector('#file-js-example input[type=file]');
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
    	file = fileInput.files[0].name;
    	var allowedExtensions =  /(\.doc|\.docx|\.odt|\.txt)$/i; 
            if (!allowedExtensions.exec(file)) {
                alert('Invalid file type');
                return;
            }
      const fileName = document.querySelector('#file-js-example .file-name');
      fileName.textContent = fileInput.files[0].name;
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

  
   (function()
      {
      	var burger=document.querySelector('.burger');
      	var nav=document.querySelector('#'+burger.dataset.target);


      	burger.addEventListener('click', function()
      	{
      		burger.classList.toggle('is-active');
      		nav.classList.toggle('is-active' );
      		


      	});
      })();
  
  
  	function redirect(url){
  		window.location.href = url;
  	}

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzDN837pLawek9pRW4Xf4yGH-TVJ7ptLA2NafGVSQ/exec'
    const form = document.forms['workshop_form']

    form.addEventListener('submit', e => {
            e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	console.log('Success!', response);
      	$("#submit").text("Thank You");
      	setTimeout(redirect, 2000, "index.html");
      })
      .catch(error => {
      	console.error('Error!', error.message);
      	$("#submit").text("Error");
      	setTimeout(redirect, 2000, "snapform.html");
      })
    })



    $(function()
      {
        $("form").submit(function()
            {
              $("#submit").text("Wait")
                .addClass("is-static");
              $("fieldset").attr("disabled","disabled");
            }
          )
      });

  
  
	var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  	function validateStep1(){
  		if (!$('#name').val()){
  			alert("Please enter your name");
  			return ["Error"];
  		}
  		if (!$('#email').val()){
  			alert("Please enter your email");
  			return ["Error"];
  		}
		if(!mailformat.test($('#email').val()))
		{
  			alert("Please enter a valid email");
  			return ["Error"];
		}
  		if ((!$('#phone').val()) || (!($('#phone').val().length == 10))){
  			alert("Please enter a valid contact number");
  			return ["Error"];
  		}
  		if (!$('#dob').val()){
  			alert("Please enter your date of birth");
  			return ["Error"];
  		}
  		if (!$('#address').val()){
  			alert("Please enter your address");
  			return ["Error"];
  		}
  		return true;
  	}

  	function validateStep2(){
  		if (!$('#course').val()){
  			alert("Please enter the course");
  			return ["Error"];
  		}
  		if (!$('#college').val()){
  			alert("Please enter your college");
  			return ["Error"];
  		}
  		if (!$('#university').val()){
  			alert("Please enter your university");
  			return ["Error"];
  		}
      if($('[name="working"]:checked').length > 0){
        if (!$('#domain').val()){
          alert("Please tell us the domain you work in");
          return ["Error"];
        }
        if (!$('#company').val()){
          alert("Please tell us your company");
          return ["Error"];
        }
        if (!$('#workex').val()){
          alert("How much work experience do you have in "+($('#domain').val()));
          return ["Error"];
        }
      }

  		return true;
  	}

  	function validateStep3(){
  		if (!$('#careerInterests').val()){
  			alert("Please tell us some of your interests");
  			return ["Error"];
  		}
  		if (!$('#whySNAP').val()){
  			alert("Please tell us why do you want to enroll in SNAP");
  			return ["Error"];
  		}
  		if (!$('#fileContent').val()){
  			alert("Please upload any of your writing sample here");
  			return ["Error"];
  		}
  		return true;
  	}

  	function validateStep4(){
  		if(!($('[name="contentWriting"]:checked').length > 0) || (!($('[name="ITSkills"]:checked').length > 0)) || !($('[name="resumeBuilding"]:checked').length > 0) || !($('[name="softSkills"]:checked').length > 0) || !($('[name="digitalMarketing"]:checked').length > 0) || !($('[name="communication"]:checked').length > 0) || !($('[name="groupDiscussion"]:checked').length > 0) ){
  			alert("Please tick all the boxes");
  			return ["Error"];
  		}
  		return true;
  	}
 var steps = new bulmaSteps.attach("#stepsDemo", {
    beforeNext: function( step_id ) {
        switch( step_id ) {
          case 0:
          	return validateStep1();
            break;
          case 1:
          	return validateStep2();
          	break;
          case 2:
          	return validateStep3();
            break;
          case 3:
          	return validateStep4();
          	break;
          }
      },
    onShow: (id) => console.log(id)
//	  onFinish
//	  onError*/
    });
 console.log(steps);