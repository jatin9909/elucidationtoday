	function setHW(height, width, header_width){
		if($('#my-botui-app').height() == 0){
			$('#my-botui-app').height(height);
			$('#my-botui-app').width(width);
			$('.bot-icon .message-icon').css('opacity','0');
			$('.bot-icon .cross-icon').css('opacity','1');
			$('.bot-app .bot-header').width(header_width);
		}
		else{
			$('#my-botui-app').height(0);
			$('#my-botui-app').width(0);
			$('.bot-icon .message-icon').css('opacity','1');
			$('.bot-icon .cross-icon').css('opacity','0');
			$('.bot-app .bot-header').width(0);
		}
	}

    function displayBot(){
    	if($(window).width() > 768){
    		setHW('360','300','300');
    	}
    	else{
    		setHW('70%', '90%', '100%');
    	}
    }


	function goBack(where){
	  	botui.action.button({
	  		action: [
	  		{
	  			text: "Go Back",
	  			value: 'GB'
	  		},
	  		{
	  			text: "Main Menu",
	  			value: 'MM'
	  		}
	  		]
	  	}).then(function(res){
	  		if (res.value == 'GB'){
	  			if (where == 'about'){
	  				about()
	  			}
	  			else if(where == 'personal'){
	  				personal()
	  			}
	  			else if(where == 'business'){
	  				business()
	  			}
	  			else{
	  				action()
	  			}
	  		}
	  		else{
	  			action()
	  		}
	  	})
		
	}


  	function about(){
	  	botui.action.button({
	  		action: [
	  		{
	  			text: "What kind of services are provided by Elucidation Today?",
	  			value: "At Elucidation Today, we conduct webinars and workshops on career awareness and skill development. We organize webinars by inviting domain experts to talk about careers in different fields. Our workshops cover a wide range of 21st-century skills such as communication and soft skills, coding and IT skills, writing, problem solving and design thinking, digital marketing, among others. We prepare you for the job you want through resume building, group discussions, mock interviews. We also have faculty training programs."
	  		},
	  		{
	  			text: "Who can avail of the services provided by Elucidation Today?",
	  			value: "Anyone from a high school student to a working professional who wants to learn, upskill, and adapt to the changing landscape of education and workforce can avail of our services."
	  		},
	  		{
	  			text: "What are the charges for these services?",
	  			value: "We offer our services at reasonable prices. We believe in providing affordable services to enhance the accessibility of career counseling and skill development."
	  		},
	  		{
	  			text: "Who are the instructors who will provide these services?",
	  			value: "We have joined hands with experts from diverse fields, who are willing to guide and mentor students across a wide range of domains. You can find some of them on our [Mentors for you](https://elucidationtoday.com/mentors) page.  Elucidation Today comprises a robust research team that is committed to providing the latest, most accurate information in our workshops."
	  		},
	  		{
	  			text: "Why should I avail of the services of Elucidation Today?",
	  			value: "In this highly competitive job market, it is not enough to be a degree holder to secure a good job. This is where we come to your rescue. We teach professional skills required by top firms all across the world and we want you to avail them so you can stand out in the crowd and become the most eligible applicant for the job of your choice. If you run your venture, our services will help you manage and hire your team efficiently."
	  		},
	  		{
	  			text: "What is the difference between the usual career counsellors and Elucidation Today?",
	  			value: "While regular career counselling organizations are merely focused on what you should do next and the test preparations, Elucidation Today is an umbrella organization that allows students to make informed choices about their career and provides extensive guidance in finding the best university, relevant scholarships, and streamlined strategies to prepare the students for the required tests. In addition to that, we groom you with the skills necessary in a professional setup. We also put you in touch with alumni of the college you are going to as well as experts in the field you are choosing."
	  		},
	  		{
	  			text: "Does the vision and mission of Elucidation Today align with the New Education Policy announced on 29 July 2020?",
	  			value: "Yes. At Elucidation Today, we have been committed to the holistic development of students long before the New Education Policy was announced. We are focused on the all-rounded grooming of students. We have devised strategies to implement the points of the New Education Policy in a way that they benefit a large number of students in becoming better at learning practical and theoretical skills."
	  		}
	  		]
	  	}).then(function(res){
		  	botui.message.add({
				delay: 1000,
				loading: true,
				content: res.value
			})
			goBack("about")
	  	})
  	}

  	function personal(){
	  	botui.action.button({
	  		action: [
	  		{
	  			text: "I need to hire a few people for X position in my company. How can Elucidation Today help me?",
	  			value: "Elucidation Today will present a list of trained and skilled candidates with you once you share your requirements with us. We can also assist you in the hiring procedure if you want. We have a pool of candidates who are willing to intern, and those who are willing to work full time. Reach out to us [here](https://elucidationtoday.com/index#contact)."
	  		},
	  		{
	  			text: "I am a school student and do not know what career I want. Can Elucidation Today help me?",
	  			value: "Yes! At Elucidation Today, we specialize in providing accurate information to students who are not sure about their future options. We will discuss your interests with you and will help you find your calling. [You should book your one-on-one session](https://elucidationtoday.com/index#contact) right now!"
	  		},
	  		{
	  			text: "I am in college right now. I want to study abroad for my masters, but I don’t know which college would be best for me. Can Elucidation Today help me?",
	  			value: "Yes! We mentor students just like yourself. All you need to have is a firm determination to study abroad and we will have you covered. [Join us in a personal session now](https://elucidationtoday.com/index#contact) and we will layout your options for you."
	  		},
	  		{
	  			text: "I am a working professional. Can Elucidation Today help me in getting a higher paying job?",
	  			value: "While we do not directly help in recruitments, we are dedicated to making you a better professional by providing a variety of workshops to upskill your career profile which will bring higher-paying jobs to you. We conduct workshops on skills that are considered essential by corporates across the country and the world. If not a full-time job opportunity, our collaborators provide internship opportunities to those who attend our workshops."
	  		},
	  		{
	  			text: "My sixteen-year-old daughter doesn’t want to be an engineer or a doctor. Can Elucidation Today help her in choosing a career field that she might be interested in?",
	  			value: "Sure! It’s 2020 and it’s okay for students to not pursue engineering or medicine. In a personal session, we will engage with you and your daughter to find the right career that aligns with her interests and will help you find the best colleges to attend."
	  		},
	  		{
	  			text: "I am the principal of a school and I want to conduct a career awareness session for our students. How can Elucidation Today help us?",
	  			value: "We would love to partner with your school in conducting workshops for the students, and even the teachers. We have modules designed specifically for school students to make them aware of popular as well as unconventional career options and professional skills like communication and resume building. On top of it, our model includes a free exchange between our instructors and the students where we take questions and provide informed opinions. You can [mail](mailto:contact@elucidationtoday.com) us to discuss the details of the session."
	  		},
	  		{
	  			text: "My job requires me to interact with a lot of people but I am not very good at communicating. Can I improve my communication skills with Elucidation Today?",
	  			value: "Yes! Our main goal at Elucidation Today is to develop real-life skills in students and working professionals alike. You can either be a participant of our communication workshop of limited seats, or you can book a one-on-one session with us and we will help you be a better communicator at your workplace. contact us [here](https://elucidationtoday.com/index#contact)"
	  		},
	  		{
	  			text: "I teach subject X. I want my students to have knowledge of career options in this subject and know how the industry functions, so that they can make informed career choices. How should I go about it?",
	  			value: "We can help you in this by organizing a skill development and career awareness workshop with your students where we will share well-researched options of a career in your subject and will take questions from the students at the end. The skill development session will help students test their learning on live projects. You should [contact us](https://elucidationtoday.com/index#contact) for the session at the earliest!"
	  		},
	  		{
	  			text: "Getting a job/handling a business requires problem-solving skills. How to work on enhancing the problem solving capabilities of our students?",
	  			value: "Problem-solving is one of the most important skills in any job and we provide an extensive workshop on the same. For our problem-solving workshop, we have designed an application-based curriculum which allows students to learn the complexities of problem-solving with real-life examples and exercises for an accurate understanding of the skill. You should [contact us](https://elucidationtoday.com/index#contact) to discuss the details of the workshop."
	  		},
	  		{
	  			text: "As a teacher, I feel that I have great command over the content that I teach. But my students are not performing well. How do I get through this?",
	  			value: "Our Faculty Training Program would be a great option for you. Under this program, we guide you holistically to be better instructors. We teach a variety of practical skills like how to draw the attention of students, how to explain complex topics with ease, how to test students effectively, and much more. Join in for a Faculty Training Program at the earliest."
	  		},
	  		{
	  			text: "I keep getting some amazing ideas to build a startup, but I don’t know how to build upon those ideas. What do I do?",
	  			value: "We have a Startup Guidance Program, where we mentor future entrepreneurs like yourself. In this program, we offer to analyze the feasibility, actionability, and profitability of your startup idea. Additionally, we will connect you with chartered accountants, financial advisors, legal experts, and experienced entrepreneurs who will advise you on the startup idea at every stage of its development. From ideation to implementation, we hold your hand. Read more about this [here](https://elucidationtoday.com/index#contact)"
	  		},
	  		{
	  			text: "I am extremely stressed during exams. How do I tackle exam stress?",
	  			value: "Stress during exams is common among students but has detrimental health consequences. We have a Stress Management Workshop for students where we teach a number of exercises to relieve exam stress and anxiety and make them perform better at the exams. We also share tips and techniques to improve learning."
	  		},
	  		{
	  			text: "I want to choose stream A but my parents want me to take up stream B. How do I convince them?",
	  			value: "If you have a different choice of a stream than your parents, do not stress out. [Contact us](https://elucidationtoday.com/index#contact) for a session and we will talk to you and your parents. We shall together use tools such as SWOT analysis to weigh the pros and cons of your chosen stream. You can trust us that we will make the best case for you."
	  		},
	  		{
	  			text: "What is the right age at which I should enrol my child for your sessions?",
	  			value: "At Elucidation Today, we believe that no child is too young to avail of our services. We have relevant courses for each age group where we interact with the students and their parents to make them better students in this day and age. We provide comprehensive development workshops for students of all ages with an emphasis on personality grooming and skill development."
	  		}
	  		]
	  	}).then(function(res){
		  	botui.message.add({
				delay: 1000,
				loading: true,
				content: res.value
			})
			goBack("personal")
	  	})
  	}

  	function business(){
	  	botui.action.button({
	  		action: [
	  		{
	  			text: "We want to train our new joiners and upskill our existing workforce. How can Elucidation Today help?",
	  			value: "Elucidation Today is committed towards the skill development of employees so that they are up-to-date with the technologies and tools. Ranging from MS-Excel and coding to soft skills, we have it all covered. [Contact us](https://elucidationtoday.com/index#contact) and we will curate a skill development module(s) exclusively for your company/organization."
	  		},
	  		{
	  			text: "We would like to collaborate on a webinar for our college. Can Elucidation Today organize one?",
	  			value: "We would be thrilled to collaborate with your college for a webinar. We host a number of webinars on every topic relevant to students. You can choose a topic for a single session, or go for a series through which we offer exhaustive career options and skill development to the students. Depending on what you are looking for, we can customise a webinar that exactly meets your and your students’ expectations."
	  		},
	  		{
	  			text: "I would like to work/intern at Elucidation Today. How can I apply?",
	  			value: "We would love to discuss such an opportunity with you. Elucidation Today is a growing family. You can send us your resume over [email](mailto:contact@elucidationtoday.com) and discuss your options with us."
	  		},
	  		{
	  			text: "How can Elucidation Today help the placement cell of our college?",
	  			value: "We can help the placement cell of your college by organizing career-oriented workshops for the students and getting in touch with recruiters in the workforce. We have skill development workshops under which we train students in resume building and group discussion, conduct mock interviews, impart communication skills, and equip them with basic IT skills required for the job market."
	  		},
	  		{
	  			text: "We have a skill development cell in our college. Can Elucidation Today collaborate with this cell?",
	  			value: "We would be delighted to discuss the possibility of collaborating with the skill development cell in your college. We provide a host of real-life skills through extensive workshops with experts from across the fields. We can upskill the students in communication, resume building, IT, startup building, among others. We design customised modules for skill development that can perfectly match the expectations of our clients."
	  		}
	  		]
	  	}).then(function(res){
		  	botui.message.add({
				delay: 1000,
				loading: true,
				content: res.value
			})
			goBack("business")
	  	})
  	}

  	function action(){
	  	botui.action.button({
	  		action: [
	  		{
	  			text: "Is it about elucidation today?",
	  			value: "ABOUT"
	  		},
	  		{
	  			text: "Is it regarding any personal query of yours?",
	  			value: "PERSONAL"
	  		},
	  		{
	  			text: "Are you a company? Do you have business related queries?",
	  			value: "BUSINESS"
	  		}
	  		]
	  	}).then(function(res){
	  		result(res)
	  	})
  	}


  	function result(res){
  		if(res.value == 'ABOUT'){
	  			about()
	  		}
	  		else if(res.value == 'PERSONAL'){
	  			personal()
	  		}
	  		else if(res.value == 'BUSINESS'){
	  			business()
	  		}
	  	}

  	var botui = new BotUI('my-botui-app');
	botui.message.add({
	  delay: 1000,
  	  loading: true,
	  content: 'Hello There!'
	}).then(function () { // wait till its shown
	  botui.message.add({ // show next message
	    delay: 1000,
  	    loading: true,
	    content: 'Please tell me your name?'
	  }).then(function(){
	  	botui.action.text({
	  		action: {
	  			placeholder: 'Enter your name',
	  		}
	  	}).then(function(res){
	  		botui.message.add({
	  			content: 'Hello '+res.value+' <br />What do you need to know?'
	  	})
	  	action()	
	  })
	  })
	});
