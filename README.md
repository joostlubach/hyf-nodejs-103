# Assignment:

Write a RESTful to-do list API. The following REST routes should be supported:

- `GET /todo`              Lists the current to do items.
- `GET /todo/<id>`         Gets the description of one to do item.
- `POST /todo`             Adds a new to-do item. The HTTP body should be an object with the key 'description'.
- `PUT /todo/<id>`         Changes the description of a todo item. The HTTP body should be identical to the POST.
- `PUT /todo/<id>/done`    Marks a to do item as done.
- `DELETE /todo/<id>/done` Marks a to do item as undone.
- `DELETE /todo/<id>`      Deletes a to do item.

Note that in this version, there is a difference between deleting an item, and marking an item as done. Consequently, the list action (`GET /todo`) should list *all* items, but mark in the resulting JSON if
they're done.

## Tips:

- Store your items in a JSON format rather than a text file. This way you don't have to use regular expressions to parse the file.
- Use `express` and `body-parser` NPM packages.
- Split up your code into separate files as much as possible. Think modular!
- Consider the cases where input is wrong, e.g. if in `POST /todo`, people forget to add a JSON body, or they don't specify a `description` property, your server should return an error. (Which error? See week 1!)

## Modular:

In my example, I have the following file structure:

```
  actions/
    list.js
    create.js
    done.js
    (etc.)
  data/
    todo.json
  index.js
  todo-list.js
```

See how I split up all the different actions into files, and I added a `todo-list.js` file which takes care of reading from and writing to `data/todo.json`.

## When you're done:

If you're done early, think of other useful features. Perhaps you can store a due date for your to do items? Or download a list of only those items that are not done `GET /todo/undone` or those that are done `GET todo/done`.
