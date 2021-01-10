var test = document.createElement('div');
var span = document.createElement('span');
var text = document.createTextNode('test');
span.appendChild(text);
test.appendChild(span);
document.body.appendChild(test);
