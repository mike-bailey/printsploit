// set the browser vars
ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

// take care of window resize/layer bug in netscape
// this bit of javascript needs to be in all pages, either as an .js include or written directly by the chailet.
if(!window.saveInnerWidth) {
  window.onresize = resizeIt;
  window.saveInnerWidth = window.innerWidth;
  window.saveInnerHeight = window.innerHeight;
}
function resizeIt() {
    if (saveInnerWidth < window.innerWidth || saveInnerWidth > window.innerWidth || saveInnerHeight > window.innerHeight || saveInnerHeight < window.innerHeight ) {
        window.history.go(0);
    }
}
