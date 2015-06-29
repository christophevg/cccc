(function(globals) {

  svg = globals.Svg = {};

  svg.parse = function parse(svg) {
    if(window.DOMParser) {
      xml_doc = new DOMParser().parseFromString(svg, "image/svg+xml");
    } else {
      xml_doc = new ActiveXObject("Microsoft.XMLDOM");
      xml_doc.async = false;
      xml_doc.loadXML(svg);
    }
    return xml_doc;
  }

})(window);
