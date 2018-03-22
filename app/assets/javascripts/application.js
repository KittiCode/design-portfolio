// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


function openTab(evt, project) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-nav");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-nav");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}



function openProject(evt, project) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-project");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-project");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}


function closeKitti(){
    jQuery("#TabBox").children().hide();
}