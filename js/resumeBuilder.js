
var bio = {
    "name": "Lokeswara Reddy",
    "role": "frontend developer",
    "welcomeMessage": "welcome aboard",
    "contacts": {
        "mobile": "9441146585",
        "email": "lrbeeram@gmail.com",
        "github": "lokesh541",
        "twitter": "@lrbeeram",
        "location": "Hyderabad"
    },
    "skills": [
        "Html",
        "Javascript",
        "css",
        "Awesomeness"
    ],
        "bioPic":"images/me.jpg"

};

var work = {
	"jobs":[
	{
		"employer":"upsky",
		"title":"frontend developer",
		"location":"bangalore",
		"dates":2015,
		"description":"designed and developed elegenat and high perfomance websites"

	}
	]
};
var projects = {
	"project":[
	{
		"title":"virtual classroom",
		"dates":2014,
		"description":"e-learning application"
	}
	]
};

var education = {
	"schools":[
	{
		"name":"jntp",
		"major":"computer science",
		"degree":"BS",
		"date":2014
	},
	{
		"name":"snist",
		"major":"computer networks",
		"degree":"MS",
		"date":2016
	}
	]
};
var onlineCourses = {
	"onlineCourse":
	[
	{
		"title":"frontend nanodegree",
		"school":"udacity",
		"url":"www.udacity.com",
		"dates":2015
	},
	{
		"title":"digital marketing",
		"school":"coursera",
		"url":"www.coursera.com",
		"dates":2015
	}
	]
};
formatedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formatedName);
formatedRole = HTMLheaderRole.replace("%data%",bio.role)
$("#header").append(formatedRole);

formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formatedMobile);
formatedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formatedEmail);
formatedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formatedTwitter);
formatedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formatedGithub);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formttedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formttedSkill);
	var formttedSkill =HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formttedSkill);
		var formttedSkill =HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formttedSkill);
		var formttedSkill =HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formttedSkill);
}


function displaywork(){

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formatEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	$(".work-entry:last").append(formatEmployer+formatedTitle);

    var formatedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);


	 var formatedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    		$(".work-entry:last").append(formatedDates + formatedLocation);

    var formatedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    	$(".work-entry:last").append(formatedDescription);

   }
  }
  displaywork();
  $(document).click(function(loc) {
  	var x = loc.pageX;
  	var y = loc.pageY;
  	logClicks(x,y);
  });
$("#main").append(internationalizeButton);
function inName(oldName){
     var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
inName("sebastian thrun");
