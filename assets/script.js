function printProjects(){
	for (var i = 0; i < projects.length; i++) {
		var string = '';
		string += '<div class="project clearfix">';
		string += '<h3>' + projects[i].name + '</h3>';
		string += '<p>' + projects[i].description + '</p>'
		if (projects[i].url != '') {
			string += '<a class="right" href="' + projects[i].url + '" target="_blank" >see for yourself</a>';
		}
		string += '</div>';
		document.getElementById('projects').innerHTML += string;
	}
}

function printSkills(){
	for (var i = 0; i < skills.length; i++) {
		var string = '';
		string += '<div class="project clearfix">';
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