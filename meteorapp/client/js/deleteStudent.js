Template.students.events({
    "click #deleteStudent": function(event) {
        student.remove({
            _id: this._id
        });
    }
});
