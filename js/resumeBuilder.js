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
  "position" : "Private English Teacher",
  "employer" : "Private Lessons",
  "yearsWorked" : 5,
  "city" : "Rio de Janeiro"
};

var education = {
  "schools" : [
    {
      "name" : "Instituto INFNET",
      "program" : "Masters in Software Engineering (.NET)",
      "degree" : "Masters",
      "years": 2,
      "city": "Rio de Janeiro, RJ"
    },
    {
      "name" : "Universidade Estácio de Sá",
      "program" : "Bachelor's in International Relations",
      "degree" : "BA",
      "years" : 4,
      "city" : "Rio de Janeiro, RJ"
    },
    {
      "name" : "Instituto CAELUM",
      "program" : "Programa de aplicações Web .NET",
      "degree" : "",
      "years" : "0.5",
      "city" : "Rio de Janeiro, RJ"
    }
  ],
  "onlineCourses" : [
    {
      "name" : "Udacity",
      "program" : "Front End Developer Nanodegree",
      "date" : 2016,
      "url" : "www.udacity.com"
    }
  ]
};


// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

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

// $("#header").append(formattedRole);
// $("#header").prepend(formattedName);

// $("#main").append(work["position"]);
// $("#main").append(education.name);
// $("#workExperience").append(formattedWork);
// $("#education").append(formattedEducation);