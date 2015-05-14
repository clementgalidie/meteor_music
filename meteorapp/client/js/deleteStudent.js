Template.students.events({
    "click #deleteStudent": function(event) {
        
        student.remove({
            _id: id
        });
    }
});
