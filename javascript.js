javascript:(function() {

labelDiv = document.getElementById('window-width-label');
if (labelDiv) {
    labelDiv.remove();
    return;
}


var label = document.createElement('div');
label.setAttribute('id', 'window-width-label');
label.setAttribute('style', 'background-color: rgba(255, 255, 255, 0.9);padding: 5px;position: fixed;left: 0px;top: 0px; z-index:1000; font-size: 18px; font-family: "Courier", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;');
label.innerHTML = 'XXL';

document.body.appendChild(label);
window.onresize = resized;
resized();

function resized () {
	width=window.innerWidth;
  breakPoint = getBreakpoint(width);
	label.innerHTML = width + "px  "+ breakPoint;
}

function getBreakpoint(width){
	if(width < 400) return 'XS';
  else if(width < 600) return 'S';
  else if(width < 900) return 'M';
  else if(width < 1008) return 'L';
  else if(width < 1280) return 'XL';
  else return 'XXL';
}

})();
