'use strict';
var bio = {
    'name': 'xxxxxxxx',
    'role': 'frontend developer',
    'welcomeMessage': 'welcome aboard',
    'contacts': {
        'mobile': 'xxxxxxxxxxxxxx',
        'email': 'xxxxxxxxxxx',
        'github': 'xxxxxxx',
        'twitter': '@xxxxx',
        'location': 'xxxxx'
    },
    'skills': [
        'Html',
        'Javascript',
        'css',
        'Awesomeness'
    ],
    'biopic': 'images/fry.jpg',
};

var work = {
    'jobs': [{
        'employer': 'upsky',
        'title': 'frontend developer',
        'location': 'bangalore',
        'dates': '2015',
        'description': 'designed and developed elegenat and high perfomance websites'

    }],
};
var projects = {
    'projects': [{
        'title': 'Build a Portfolio',
        'dates': '2016',
        'description': 'Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.',
        'images': ['images/197x148.gif'],
    }],

};

var education = {
    'schools': [{
        'name': 'Jawaharlal Nehru technological university',
        'majors': [' Computer Science and Engineering'],
        'degree': 'B.tech',
        'dates': '2014',
        'location': 'Pulivendula, Andhra Pradesh'
    }, {
        'name': 'Sreenidhi Institute of Science and technology',
        'majors': ['Computer Networks and Information Security'],
        'degree': 'MS',
        'dates': '2016',
        'location': 'Ghatkesar, Telangana'

    }],
    'onlineCourses': [{
        'title': 'frontend nanodegree',
        'school': 'udacity',
        'url': 'www.udacity.com',
        'date': '2016'
    }, {
        'title': 'machine learning',
        'school': 'coursera',
        'url': 'www.coursera.com',
        'date': '2015'
    }],


};

var data = '%data%';
var $header = $('#header');
var $contacts = $('#topContacts, #footerContacts');
var $education = $('#education');
var $workExperience = $('#workExperience');
var $projects = $('#projects');

bio.display = function() {


    var formatedRole = HTMLheaderRole.replace(data, bio.role);
    $header.prepend(formatedRole);
    var formatedName = HTMLheaderName.replace(data, bio.name);
    $header.prepend(formatedName);

    var formatedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formatedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formatedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formatedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formatedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $contacts.append(formatedMobile, formatedEmail, formatedTwitter, formatedGithub, formatedLocation);



    var formatedPic = HTMLbioPic.replace(data, bio.biopic);
    $header.append(formatedPic);
    var formatedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $header.append(formatedWelcome);

    if (bio.skills.length) {
        $header.append(HTMLskillsStart);
    }

    for (var i = 0; i < bio.skills.length; i++) {
        var formttedSkill = HTMLskills.replace(data, bio.skills[i]);
        var $skills = $('#skills');
        $skills.append(formttedSkill);
    }


};

bio.display();

work.display = function() {

    work.jobs.forEach(function(job) {

        $workExperience.append(HTMLworkStart);
        var formatEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formatedTitle = HTMLworkTitle.replace(data, job.title);
        var $lastWorkEntry = $('.work-entry:last');
        $lastWorkEntry.append(formatEmployer + formatedTitle);

        var formatedDates = HTMLworkDates.replace(data, job.dates);


        var formatedLocation = HTMLworkLocation.replace(data, job.location);
        $lastWorkEntry.append(formatedDates + formatedLocation);

        var formatedDescription = HTMLworkDescription.replace(data, job.description);
        $lastWorkEntry.append(formatedDescription);

    });
};
work.display();

education.display = function() {

    education.schools.forEach(function(school) {
        $education.append(HTMLschoolStart);
        var formatschoolName = HTMLschoolName.replace(data, school.name);
        var formatedschoolDegree = HTMLworkTitle.replace(data, school.degree);
        $('.education-entry:last').append(formatschoolName + formatedschoolDegree);
        var formatedDates = HTMLworkDates.replace(data, school.dates);
        var formatedLocation = HTMLschoolLocation.replace(data, school.location);
        $('.education-entry:last').append(formatedDates + formatedLocation);
        var formatedMajor = HTMLschoolMajor.replace(data, school.majors);
        $('.education-entry:last').append(formatedMajor);

    });

    $('.education-entry:last').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formatedTitle = HTMLonlineTitle.replace(data, course.title);
        var formatedSchool = HTMLonlineSchool.replace(data, course.school);
        $('.education-entry:last').append(formatedTitle + formatedSchool);
        var formatedOnlineDates = HTMLonlineDates.replace(data, course.date);
        var formatedOnlineUrl = HTMLonlineURL.replace(data, course.url);
        $('.education-entry:last').append(formatedOnlineDates + formatedOnlineUrl);
    });

};

education.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $projects.append(HTMLprojectStart);
        var formatedProjecttitle = HTMLprojectTitle.replace(data, project.title);
        var formatedProjectDate = HTMLprojectDates.replace(data, project.dates);
        var $projectsLastEntry = $('.project-entry:last');
        $projectsLastEntry.append(formatedProjecttitle + formatedProjectDate);
        var formatedProjectDesc = HTMLprojectDescription.replace(data, project.description);
        var formatedProjectImage = HTMLprojectImage.replace(data, project.images);
        $projectsLastEntry.append(formatedProjectDesc + formatedProjectImage);
    });
};
projects.display();

$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
