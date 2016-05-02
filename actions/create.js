var TodoList = require('../todo-list');

/**
 * This action adds a new to-do item.
 *
 * The request body is supposed to look like this:
 *
 *   {
 *     "description": "<The description for the to do item>"
 *   }
 */
function create(request, response) {

  var description = request.body.description;

  if (!description) {
    response.status(400).error("Missing field: 'description'.");
    return;
  }

  TodoList.load(function (error, list) {
    if (error) {
      response.error(error);
    } else {
      var item = list.addItem(description);

      list.save(function (error) {
        if (error) {
          response.error(error);
        } else {
          response.status(201).json(item);
        }
      });
    }
  });

}

module.exports = create;