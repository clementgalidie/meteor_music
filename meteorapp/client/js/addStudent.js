Template.newStudent.events({
    "submit form": function (event) {
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;
        var mail = event.target.mail.value;
        var dob = event.target.dob.value;

        student.insert({
            firstname: firstname,
            lastname: lastname,
            mail: mail,
            dob: dob
        });
    }
});