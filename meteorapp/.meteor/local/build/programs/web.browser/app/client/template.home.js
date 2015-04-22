(function(){
Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return HTML.DIV({
    id: "home-bg"
  }, "\n        \n        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "students"
      }));
    }
  }, "Etudiants"), "\n        \n    ");
}));

})();
