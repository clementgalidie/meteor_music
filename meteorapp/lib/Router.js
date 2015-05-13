Router.configure({
    layoutTemplate: 'index'
});

Router.route('/', {
    name: 'home'
});

Router.route('/students', {
    name: 'students'
});

Router.route('/newstudent', {
    name: 'new_student'
});

Router.route('students/edit/:_id', {
    name: "editstudent",
	data: function(){
			return student.findOne(this.params._id);
		
	}
});