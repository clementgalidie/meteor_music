(function(){
Template.__checkName("editstudent");
Template["editstudent"] = new Template("Template.editstudent", (function() {
  var view = this;
  return HTML.FORM({
    "class": "edit-student"
  }, "\n        ", HTML.INPUT({
    id: "first-name",
    name: "firstname",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("firstname"));
    }
  }), "\n        ", HTML.INPUT({
    id: "last-name",
    name: "lastname",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("lastname"));
    }
  }), "\n        ", HTML.INPUT({
    id: "mail",
    name: "mail",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("mail"));
    }
  }), "\n        ", HTML.INPUT({
    id: "dob",
    name: "dob",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("dob"));
    }
  }), HTML.Raw('\n        <input id="PP" name="pp" type="file">\n        '), HTML.INPUT({
    id: "notes",
    name: "notes",
    type: "text",
    placeholder: function() {
      return Spacebars.mustache(view.lookup("notes"));
    }
  }), "\n        ", HTML.INPUT({
    id: "id",
    name: "id",
    type: "hidden",
    value: function() {
      return Spacebars.mustache(view.lookup("_id"));
    }
  }), HTML.Raw('\n        \n        <input id="sub" type="submit">\n    '));
}));

})();
