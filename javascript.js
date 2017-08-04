var label = document.createElement('div');
label.setAttribute('id', 'window-width-label');
label.setAttribute('style', 'background-color: grey;padding: 10px;position: fixed;right: 0px;top: 0px; z-index:10000000');
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
