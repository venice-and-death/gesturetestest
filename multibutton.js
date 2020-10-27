
function myFunction1 (num) {
    alert("You called 'myFunction1()', with the argument: " + num);
}

function myFunction2 (num) {
   window.location = 'https://venice-and-death.github.io/1102/surprisesurpise.html';
}

function myFunction3 (num) {
    alert("You called 'myFunction3()', with the argument: " + num);
}

function myFunction4 (num) {
    alert("You called 'myFunction3()', with the argument: " + num);
}


function myFunction (button) {
    var x = button.id;
    switch (x) {
        case '1':
            myFunction1(x);
            break;
        case '2':
            myFunction2(x);
            break;
        case '3':
            myFunction3(x);
            break;
         case '4':
            myFunction3(x);
            break;
        default:
            return false;
    }
}

var buttons = document.getElementsByTagName('button');
for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function (){
        myFunction (this);
    }
}
}
