function setIframeSrc() {
  var s = "https://www.meteogalicia.gal/web/predicion/concellos/15078/0";
  var iframe1 = document.getElementById('meteogal');
  if ( -1 == navigator.userAgent.indexOf("MSIE") ) {
    iframe1.src = s;
  }
  else {
    iframe1.location = s;
  }
}
setTimeout(setIframeSrc, 250);