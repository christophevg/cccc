(function(globals) {

  var xmlhttp,
      callback = null,
      prefix   = "",
  
      is_local = function is_local() {
        return window.location.protocol.slice(0, 4) != "http";
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
      },
      
      fetch_local = function fetch_local(url) {
        xmlhttp.open("GET", url, false);
        xmlhttp.send(null);
        if( callback ) {
          callback(xmlhttp.responseText);
        } else {
          return xmlhttp.responseText;
        }
      },
      
      fetch_live = function fetch_live(url) {
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            if(callback != null) { callback(xmlhttp.responseText); }
          }
        }
        xmlhttp.open("GET", prefix + url, true);
        xmlhttp.send(null);
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
    // if(is_local()) {
    //   return fetch_local(url);
    // } else {
      return fetch_live(url);
    // }
  }
  
  init();
  
})(window);
