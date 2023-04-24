function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lhqjpqAeES":
        Script1();
        break;
  }
}

function Script1()
{
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
 (!document.mozFullScreen && !document.webkitIsFullScreen)) {
 if (document.documentElement.requestFullScreen) { 
 document.documentElement.requestFullScreen(); 
 } else if (document.documentElement.mozRequestFullScreen) { 
 document.documentElement.mozRequestFullScreen(); 
 } else if (document.documentElement.webkitRequestFullScreen) { 
 document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); 
 } 
 } else { 
 if (document.cancelFullScreen) { 
 document.cancelFullScreen(); 
 } else if (document.mozCancelFullScreen) { 
 document.mozCancelFullScreen(); 
 } else if (document.webkitCancelFullScreen) { 
 document.webkitCancelFullScreen(); 
 } 
 }
}

