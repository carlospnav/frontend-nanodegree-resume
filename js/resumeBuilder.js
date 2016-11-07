/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Carlos Navarrete",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "some number",
    "email" : "karnav@gmail.com",
    "github" : "johndoe",
    "twitter" : "@johndoe",
    "location" : "Rio de Janeiro"
  },
  "pictureUrl" : "images/fry.jpg",
  "welcomeMessage" : "Some message in order to show some things heh.",
  "skills" : [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ]
};

var work = {
  "jobs" : [{
    "employer": "Wise Up Rio Sul",
    "title": "English Instructor",
    "location": "Rio de Janeiro, RJ",
    "dates": 2009,
    "description": "Taught english to advanced and proficiency classes."
  },{
    "employer": "CNA Riviera",
    "title": "English Instructor",
    "location": "Rio de Janeiro, RJ",
    "dates": 2011,
    "description": "Taught english to intermediate and advanced classes."
  },{
    "employer": "Private Lessons",
    "title": "Private English Teacher",
    "location": "Rio de Janeiro",
    "dates": 2012,
    "description": "As a private tutor, I taught english to children and adults, giving the former a solid foundation of the " + 
    "language and preparing the latter for their travels and special events." 
  }]
};

var projects = {
  "projects": [{
    "title": "",
    "dates": "",
    "description": "",
    "images": [

    ]
  }]
} 

var education = {
  "schools" : [
    {
      "name" : "Instituto INFNET",
      "program" : "Masters in Software Engineering (.NET)",
      "degree" : "Masters",
      "dates": 2,
      "location": "Rio de Janeiro, RJ",
      "url": ""
    },
    {
      "name" : "Universidade Estácio de Sá",
      "program" : "Bachelor's in International Relations",
      "degree" : "BA",
      "dates" : 4,
      "location" : "Rio de Janeiro, RJ",
      "url": ""
    },
    {
      "name" : "Instituto CAELUM",
      "program" : "Programa de aplicações Web .NET",
      "degree" : "",
      "dates" : "0.5",
      "location" : "Rio de Janeiro, RJ",
      "url": ""
    }
  ],
  "onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Front End Developer Nanodegree",
      "dates" : 2016,
      "url" : "www.udacity.com"
    }
  ]
};

if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0]);
  var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1]);
  var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2]);
  var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3]);

  $("#skills").append(formattedSkills1);
  $("#skills").append(formattedSkills2);
  $("#skills").append(formattedSkills3);
  $("#skills").append(formattedSkills4);
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
// var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// var formattedWork = HTMLworkStart;

// $(formattedWork).append(HTMLworkEmployer.replace("%data%", work.employer));
// $(formattedWork).append(HTMLworkTitle.replace("%data%", work.position));
// var formattedEducation = HTMLschoolName.replace("%data%", education.name);

// var formattedMobile =  HTMLmobile.replace("%data%", bio.contacts.mobile); 
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);

// $("#main").append(work["position"]);
// $("#main").append(education.name);
// $("#workExperience").append(formattedWork);
// $("#education").append(formattedEducation);