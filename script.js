var about = document.getElementById("about");
about.onclick = loadAboutMe;

function loadAboutMe() {
    document.getElementById("content").innerHTML='<object type="text/html" data="aboutme.html" ></object>';
}

var blog = document.getElementById("blog");
blog.onclick = loadBlog;

function loadBlog() {
    document.getElementById("content").innerHTML='<object type="text/html" data="blog.html" ></object>';
}

var projects = document.getElementById("projects");
projects.onclick = loadProjects;

function loadProjects() {
    document.getElementById("content").innerHTML='<object type="text/html" data="projects.html" ></object>';
}

var resume = document.getElementById("resume");
resume.onclick = loadResume;

function loadResume() {
    document.getElementById("content").innerHTML='<object type="text/html" data="resume.html" ></object>';
}

var contact = document.getElementById("contact");
contact.onclick = loadContact;

function loadContact() {
    document.getElementById("content").innerHTML='<object type="text/html" data="contact.html" ></object>';
}