Router.configure({
    layoutTemplate: 'index'
});

Router.route('/', {
    name: 'home'
});

Router.route('/students', {
    name: 'students'
});

Router.route('students/edit/:_id', {
    name: "editstudent",
	data: function(){
		return {
			id: this.params._id
		}
	}
});