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
    "bioPic": "images/fry.jpg",
    display: function() {

    }
};

var work = {
    "jobs": [{
        "employer": "upsky",
        "title": "frontend developer",
        "location": "bangalore",
        "dates": 2015,
        "description": "designed and developed elegenat and high perfomance websites"

    }, ],
    display: function() {

    }
};
var projects = {
    "project": [{
        "title": "virtual classroom",
        "dates": 2014,
        "description": "e-learning application",
        "imageURL": "images/197x148.gif",
    }],
    display: function() {

    }
};

var education = {
    "schools": [{
        "name": "Jawaharlal Nehru technological university",
        "major": " Computer Science and Engineering",
        "degree": "B.tech",
        "date": 2014,
        "location": "Pulivendula, Andhra Pradesh"
    }, {
        "name": "Sreenidhi Institute of Science and technology",
        "major": "Computer Networks and Information Security",
        "degree": "MS",
        "date": 2016,
        "location": "Ghatkesar, Telangana"

    }],
    display: function() {

    }
};
var onlineCourses = {
    "courses": [{
        "title": "frontend nanodegree",
        "school": "udacity",
        "url": "www.udacity.com",
        "dates": 2016
    }, {
        "title": "machine learning",
        "school": "coursera",
        "url": "www.coursera.com",
        "dates": 2015
    }],
    display: function() {

    }
};


bio.display = function() {


    var formatedRole = HTMLheaderRole.replace("%data%", bio.role)
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

    var formatedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formatedPic);
    var formatedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formatedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formttedSkill = HTMLskills.replace("%data%", bio.skills[0]); 
        $("#skills").append(formttedSkill);
        var formttedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formttedSkill);
        var formttedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formttedSkill);
        var formttedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formttedSkill);
    }

}

bio.display();

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formatEmployer + formatedTitle);

        var formatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);


        var formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formatedDates + formatedLocation);

        var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatedDescription);

    }
}
work.display();

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formatschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatedschoolDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formatschoolName + formatedschoolDegree);
        var formatedDates = HTMLworkDates.replace("%data%", education.schools[school].date);
        var formatedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formatedDates + formatedLocation);
        var formatedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formatedMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in onlineCourses.courses) {
        var formatedTitle = HTMLonlineTitle.replace("%data%", onlineCourses.courses[course].title);
        var formatedSchool = HTMLonlineSchool.replace("%data%", onlineCourses.courses[course].school);
        $(".education-entry:last").append(formatedTitle + formatedSchool);
        var formatedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses.courses[course].dates);
        var formatedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourses.courses[course].url);
        $(".education-entry:last").append(formatedOnlineDates + formatedOnlineUrl);
    }

}
education.display();

projects.display = function() {
    for (project in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formatedProjecttitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        var formatedProjectDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        $(".project-entry:last").append(formatedProjecttitle + formatedProjectDate);
        var formatedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        var formatedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].imageURL);
        $(".project-entry:last").append(formatedProjectDesc + formatedProjectImage);
    }
}
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
