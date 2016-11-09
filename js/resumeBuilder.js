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
    "location" : "Rio de Janeiro"
  },
  "welcomeMessage" : "Hi! Welcome to my portfolio where I show portfolioly things.",
  "skills" : [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "biopic" : "images/fry.jpg",
  "display": function(){ 
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLocation);
    $("#header").append(formattedBiopic + formattedWelcome);

    if (this.skills.length > 0){
      $("#header").append(HTMLskillsStart);
      for (var skill in this.skills){
        if (this.skills.hasOwnProperty(skill)) {
          var formattedSkills= HTMLskills.replace("%data%", this.skills[skill]);
          $("#skills").append(formattedSkills);
        }
      }
    }   
    $("#mapDiv").append(googleMap);
  }
};

var education = {
  "schools" : [
    {
      "name" : "Instituto INFNET",
      "location": "Rio de Janeiro, RJ",
      "degree" : "Masters",
      "majors" : ["Software Engineering (.NET)"],
      "dates": "2015-2017",
      "url": "www.infnet.edu.br/infnet‎"
    },
    {
      "name" : "Universidade Estácio de Sá",
      "location" : "Rio de Janeiro, RJ",
      "degree" : "BA",
      "majors" : ["International Relations"],
      "dates" : "2004-2008",
      "url": "www.estacio.br"
    },
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2016-2017",
      "url" : "www.udacity.com"
    }
  ],
  "display": function(){
    var formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor, formattedUrl; 
    for (var school in this.schools){
      if (this.schools.hasOwnProperty(school)) {
        $("#education").append(HTMLschoolStart);
        formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
        formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
        formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
        formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
        formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in this.onlineCourses){
      if (this.onlineCourses.hasOwnProperty(course)) {
        $("#education").append(HTMLschoolStart);
        formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
        formattedName = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
        formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
        formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
        $(".education-entry:last").append(formattedTitle + formattedName + formattedDates + formattedUrl);
      }
    }
  }
};


var work = {
  "jobs" : [{
    "employer": "Wise Up Rio Sul",
    "title": "English Instructor",
    "location": "Rio de Janeiro, RJ",
    "dates": "2009 - 2010",
    "description": "Taught english to advanced and proficiency classes."
  },{
    "employer": "CNA Riviera",
    "title": "English Instructor",
    "location": "Rio de Janeiro, RJ",
    "dates": "2011 - 2012",
    "description": "Taught english to intermediate and advanced classes."
  },{
    "employer": "Private Lessons",
    "title": "Private English Teacher",
    "location": "São Paulo, SP",
    "dates": "2012 - 2015",
    "description": "As a private tutor, I taught english to children and adults, giving the former a solid foundation of the " + 
    "language and preparing the latter for their travels and special events." 
  }],
  "display": function(){
    var formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkDescription;
    for (var job in this.jobs){
      if (this.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);
        formattedWorkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        formattedWorkTitle =  HTMLworkTitle.replace("%data%", this.jobs[job].title);
        formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkDescription);
      }
    }
  }
};

var projects = {
  "projects": [{
    "title": "HomeSite",
    "dates": "2016",
    "description": "My first website from backend services to frontend. In .NET MVC.",
    "images": [
      "images/mountains-sm.jpg",
      "images/flowers-sm.jpg"
    ]
  }],
  "display": function(){
    for(var project in this.projects){
      if (this.projects.hasOwnProperty(project)) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
        var formattedImage = "";
        if (this.projects[project].images.length > 0){
          for(var image in this.projects[project].images){
            if (this.projects[project].images.hasOwnProperty(image)) {  
              formattedImage = formattedImage + HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
            }
          }
        }
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
      }
    }
  }
}; 

display([bio, projects, work, education]);

function display(elements){
  if (elements.length > 0){
    for (var element = 0; element < elements.length; element++){
      elements[element].display();
    }
  }
}

// $("#main").append(internationalizeButton);

// function inName(name){
//   var names = name.trim().split(" ");
//   var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
//   var lastName = names[1].toUpperCase();

//   return firstName + " " + lastName; 
// }