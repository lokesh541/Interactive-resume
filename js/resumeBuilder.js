var bio = {
    "name": "Lokeswara Reddy",
    "role": "frontend developer",
    "welcomeMessage": "welcome aboard",
    "contacts": {
        "mobile": "9441146585",
        "email": "lrbeeram@gmail.com",
        "github": "lokesh541",
        "twitter": "@lokeshbeeram",
        "location": "Hyderabad"
    },
    "skills": [
        "Html",
        "Javascript",
        "css",
        "Awesomeness"
    ],
    "biopic": "images/fry.jpg",
};

var work = {
    "jobs": [{
        "employer": "upsky",
        "title": "frontend developer",
        "location": "bangalore",
        "dates": "2015",
        "description": "designed and developed elegenat and high perfomance websites"

    }],
};
var projects = {
    "projects": [{
        "title": "virtual classroom",
        "dates": "2014",
        "description": "e-learning application",
        "images": ["images/197x148.gif"]  ,
    }],

};

var education = {
    "schools": [{
        "name": "Jawaharlal Nehru technological university",
        "majors": [" Computer Science and Engineering"],
        "degree": "B.tech",
        "dates": "2014",
        "location": "Pulivendula, Andhra Pradesh"
    }, {
        "name": "Sreenidhi Institute of Science and technology",
        "majors": ["Computer Networks and Information Security"],
        "degree": "MS",
        "dates": "2016",
        "location": "Ghatkesar, Telangana"

    }],

};
var onlineCourses = {
    "courses": [{
        "title": "frontend nanodegree",
        "school": "udacity",
        "url": "www.udacity.com",
        "date": "2016"
    }, {
        "title": "machine learning",
        "school": "coursera",
        "url": "www.coursera.com",
        "date": "2015"
    }],

};


bio.display = function() {


    var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formatedRole);
    var formatedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formatedName);

    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formatedMobile);
    var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formatedEmail);
    var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formatedTwitter);
    var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formatedGithub);
    $("#footerContacts").append(formatedMobile);
    $("#footerContacts").append(formatedEmail);
    $("#footerContacts").append(formatedTwitter);
    $("#footerContacts").append(formatedGithub);

    var formatedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formatedPic);
    var formatedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formatedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
}

      for (var i = 0; i < bio.skills.length; i++) {
        var formttedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formttedSkill);
      }


};

bio.display();

work.display = function() {
   for(var i = 0;i<work.jobs.length;i++){

        $("#workExperience").append(HTMLworkStart);
        var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formatEmployer + formatedTitle);

        var formatedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);


        var formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formatedDates + formatedLocation);

        var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formatedDescription);

    }
};
work.display();

education.display = function() {
  for(var i = 0;i<education.schools.length;i++){
        $("#education").append(HTMLschoolStart);
        var formatschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formatedschoolDegree = HTMLworkTitle.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formatschoolName + formatedschoolDegree);
        var formatedDates = HTMLworkDates.replace("%data%", education.schools[i].dates);
        var formatedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formatedDates + formatedLocation);
        var formatedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formatedMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
      for(var i = 0;i<onlineCourses.courses.length;i++){
        var formatedTitle = HTMLonlineTitle.replace("%data%", onlineCourses.courses[i].title);
        var formatedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.courses[i].school);
        $(".education-entry:last").append(formatedTitle + formatedSchool);
        var formatedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses.courses[i].date);
        var formatedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourses.courses[i].url);
        $(".education-entry:last").append(formatedOnlineDates + formatedOnlineUrl);
    }

};
education.display();

projects.display = function() {
    for(var i = 0;i<projects.projects.length;i++){
        $("#projects").append(HTMLprojectStart);
        var formatedProjecttitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formatedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formatedProjecttitle + formatedProjectDate);
        var formatedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formatedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formatedProjectDesc + formatedProjectImage);
    }
};
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
