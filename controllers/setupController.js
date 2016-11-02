var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        //seed DB
        var starterTodos = [
            {
                username: 'test',
                todo: 'Write Blog',
                isDone: false,
                hasAttachment: false
            }, {
                username: 'test',
                todo: 'add Flexbox',
                isDone: false,
                hasAttachment: false
            }, {
                username: 'test',
                todo: 'read book',
                isDone: false,
                hasAttachment: false
            }, {
                username: 'test',
                todo: 'read docs',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}
