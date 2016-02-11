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
    "bioPic":"images/fry.jpg"
};

var work = {
  "jobs":[
	{
		"employer":"upsky",
		"title":"frontend developer",
		"location":"bangalore",
		"dates":2015,
		"description":"designed and developed elegenat and high perfomance websites"

	},
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
		"name":"Jawaharlal Nehru technological university",
		"major":" Computer Science and Engineering",
		"degree":"B.tech",
		"date":2014,
    "location":"Pulivendula, Andhra Pradesh"
	},
	{
		"name":"Sreenidhi Institute of Science and technology",
		"major":"Computer Networks and Information Security",
		"degree":"MS",
		"date":2016,
    "location":"Ghatkesar, Telangana"

	}
],
"onlineCourses":
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
var onlineCourses = {

};
formatedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formatedName);
formatedRole = HTMLheaderRole.replace("%data%",bio.role)
$("#header").append(formatedRole);
formatedPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formatedPic);
formatedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formatedWelcome);
formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

$("#topContacts").append(formatedMobile);
formatedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formatedEmail);
formatedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formatedTwitter);
formatedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formatedGithub);



if( bio.skills.length > 0 ) {
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

function displayschool(){
for(school in education.schools){
	$("#education").append(HTMLschoolStart);
	var formatschoolName    = HTMLschoolName.replace("%data%",education.schools[school].name);
  var formatedschoolDegree = HTMLworkTitle.replace("%data%",education.schools[school].degree);
	$(".education-entry:last").append(formatschoolName+formatedschoolDegree);
    var formatedDates = HTMLworkDates.replace("%data%",education.schools[school].date);
    var formatedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    		$(".education-entry:last").append(formatedDates + formatedLocation);
        var formatedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
         $(".education-entry:last").append(formatedMajor);
  }

}
displayschool();

  $("#mapDiv").append(googleMap);

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