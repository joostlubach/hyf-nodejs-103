var TodoList = require('../todo-list');

/**
 * This action lists all to-do items.
 */
function list(request, response) {

  TodoList.load(function (error, list) {
    if (error) {
      response.error(error);
    } else {
      response.json(list.items);
    }
  });

}

module.exports = list;