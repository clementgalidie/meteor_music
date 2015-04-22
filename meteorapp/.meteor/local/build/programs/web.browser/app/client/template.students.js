(function(){
Template.__checkName("students");
Template["students"] = new Template("Template.students", (function() {
  var view = this;
  return [ HTML.Raw('<form class="add-student">\n        <input id="first-name" name="firstname" placeholder="Type your first-name">\n        <input id="last-name" name="lastname" placeholder="Type your last-name">\n        <input id="mail" name="mail" placeholder="Type your e-mail adress">\n        <input id="dob" name="dob" placeholder="Date of birth">\n        <input id="PP" name="pp" type="file">\n        <input id="notes" name="notes" type="text" placeholder="Type a note">\n        \n        <input id="sub" type="submit">\n    </form>\n    \n    '), HTML.DIV({
    id: "list-student"
  }, "\n        ", HTML.TABLE({
    border: "1px"
  }, "\n			", HTML.THEAD("\n			", HTML.TR("\n				", HTML.TH("Photo"), "\n				", HTML.TH("Firstname"), "\n				", HTML.TH("Lastname"), "\n				", HTML.TH("Date of birth"), "\n				", HTML.TH("Mail"), "\n				", HTML.TH("Notes"), "\n			"), "\n			"), "\n			", HTML.TBODY("\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("student"));
  }, function() {
    return [ "\n				", HTML.TR("\n					", HTML.TD(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("pp"));
      },
      alt: ""
    })), "\n					", HTML.TD(Blaze.View("lookup:firstname", function() {
      return Spacebars.mustache(view.lookup("firstname"));
    })), "\n					", HTML.TD(Blaze.View("lookup:lastname", function() {
      return Spacebars.mustache(view.lookup("lastname"));
    })), "\n					", HTML.TD(Blaze.View("lookup:dob", function() {
      return Spacebars.mustache(view.lookup("dob"));
    })), "\n					", HTML.TD(Blaze.View("lookup:mail", function() {
      return Spacebars.mustache(view.lookup("mail"));
    })), "\n					", HTML.TD(Blaze.View("lookup:notes", function() {
      return Spacebars.mustache(view.lookup("notes"));
    })), "\n					", HTML.TD(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
          route: "editstudent"
        }));
      }
    }, "Edit")), "\n                    \n				"), "\n        " ];
  }), "\n			"), "\n        "), "\n    ") ];
}));

})();
