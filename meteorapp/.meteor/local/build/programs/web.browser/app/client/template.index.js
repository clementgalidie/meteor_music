(function(){
Template.__checkName("index");
Template["index"] = new Template("Template.index", (function() {
  var view = this;
  return [ HTML.Raw('<head>\n        <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">\n    </head>\n    \n    '), HTML.HEADER("\n        ", HTML.Raw('<div id="logo">\n            <img src="img/logo.png">\n        </div>'), "\n        \n        ", HTML.DIV({
    id: "log"
  }, "\n            ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n        "), "\n        \n    "), "\n    \n    ", HTML.DIV({
    id: "content"
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n    ") ];
}));

})();
