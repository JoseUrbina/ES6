// Video 10: Template literals

var name = 'José';
var lastname = 'Guti';

function getName(){
	return name;
}

var completedName1 = `Your completed name is ${name} ${lastname}`;

var multiline = `<h1 class="title">New title</h1>
<p>This is a new paragraph</p>`;

var showName = `Your name is ${getName()} and to have ${getName().length} characters`;

console.log(completedName1);
console.log(multiline);
console.log(showName);
