var fs = require('fs');
var dataFile = __dirname + '/data/todo.json'; // __dirname points to the directory this file lives in!

function TodoList(items) {
  this.items = items;
}

/**
 * Loads a new list.
 *
 * Usage:
 *
 *   TodoList.load(function (list) {
 *     // Variable `list` is now an instance of the TodoList class.
 *
 *   });
 */
TodoList.load = function (callback) {
  fs.readFile(dataFile, 'utf8', function (error, data) {
    if (!error) {
      // The file is found - load the list with the JSON data.
      var items = data ? JSON.parse(data) : [];
      callback(null, new TodoList(items));
    } else if (error.code == 'ENOENT') {
      // The file is not found - load the list with an empty array.
      callback(null, new TodoList([]));
    } else {
      // There was some other error.
      callback(error);
    }
  });
}

TodoList.prototype.save = function (callback) {
  var data = JSON.stringify(this.items);
  fs.writeFile(dataFile, data, function (error) {
    if (error) {
      callback(error);
    } else {
      callback();
    }
  });
}

TodoList.prototype.addItem = function (description) {
  var item = {
    description: description,
    createdAt: new Date()
  };

  this.items.push(item);
  return item;
}

module.exports = TodoList;