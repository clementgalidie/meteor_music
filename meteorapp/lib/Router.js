Router.configure({
    layoutTemplate: 'index'
});

Router.route('/', {
    name: 'home'
});

Router.route('/students', {
    name: 'students'
});