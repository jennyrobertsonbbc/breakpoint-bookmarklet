javascript:(function() {
function resized(){width=window.innerWidth,breakPoint=getBreakpoint(width),label.innerHTML=width+"px  "+breakPoint}function getBreakpoint(i){return 400>i?"XS":600>i?"S":900>i?"M":1008>i?"L":1280>i?"XL":"XXL"}var labelDiv="<div id='window-width-label' style='background-color: grey;padding: 10px;position: fixed;right: 0px;top: 0px; z-index:10000000'>XXL</div>";document.body.innerHTML+=labelDiv;var label=document.getElementById("window-width-label");window.onresize=resized,resized();
})();

