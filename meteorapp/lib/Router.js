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