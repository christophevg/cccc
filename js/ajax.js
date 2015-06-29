(function(globals) {

  var xmlhttp,
      callback = null,
      prefix   = "",
  
      is_local = function is_local() {
        return !(   window.location.protocol == "http"
                 || window.location.protocol == "https" );
      },
  
      init = function init() {
        xmlhttp = null;
        if(window.XMLHttpRequest) {
          // code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          // code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } else {
          alert("Your browser does not support XMLHTTP!");
        }
        
        if(! is_local) {
          xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
              if(callback != null) { callback(xmlhttp.responseText); }
            }
          }
        }
      },
        
  // exposing our namespace
  ajax = globals.Ajax = {};

  ajax.with_online_prefix = function with_online_prefix(new_prefix) {
    prefix = new_prefix;
    return this;
  }

  ajax.using = function using(new_callback) {
    callback = new_callback;
    return this;
  }
  
  ajax.fetch = function fetch(url) {
    xmlhttp.open("GET", is_local ? url : prefix + url, !is_local);
    xmlhttp.send(null);
    if( is_local ) {
      if( callback ) {
        callback(xmlhttp.responseText);
      } else {
        return xmlhttp.responseText;
      }
    }
  }
  
  init();
  
})(window);
