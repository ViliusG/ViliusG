function printProjects(){
	for (var i = 0; i < projects.length; i++) {
		var string = '';
		string += '<div class="project clearfix divHover" onclick="openSummary(' + i + ')">';
		string += '<h3>' + projects[i].name + '</h3>';
		string += '<p>' + projects[i].summary + '</p>'
		string += '</div>';
		document.getElementById('projects').innerHTML += string;
	}
}

function openSummary(i){
	document.getElementById('popUp').style.display="block";
	var string = '<h2 class="center">' + projects[i].name + '</h2>';
	string += '<p class="center">' + projects[i].description + '</p>';
	string += '<p class="center"><b>Technologies used: </b>' + projects[i].technologies + '</p>';
		if (projects[i].url != '') {
			string += '<a class="projectLink right" href="' + projects[i].url + '" target="_blank" >see for yourself</a>';
		}
	document.getElementById('popUp-content').innerHTML = string;
}

function closeSummary(){
	document.getElementById('popUp').style.display="none";
}

function printSkills(){
	for (var i = 0; i < skills.length; i++) {
		var string = '';
		string += '<div class="project clearfix divHover">';
		string += '<h3>' + skills[i].name + '</h3>';
		string += '<p>' + skills[i].description + '</p>'
		string += '</div>';
		document.getElementById('skills').innerHTML += string;
	}
}

function printSmallSkills(){
	var string = '<ul>'
	for (var i = 0; i < smallSkills.length; i++) {
		string += '<li>' + smallSkills[i] + '</li>';
	}
	string += '</ul>'
	document.getElementById('small-skills').innerHTML = string;
}