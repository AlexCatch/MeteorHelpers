# MeteorHelpers
A collection of useful Meteor helpers which will grow over time as I create ones that feel are useful for me in my projects.

## objectForId
This helper takes in two parameters, the collection to query and the ID of the document you wish to fetch

#### Example

```
{{#with objectForId 'Meteor.users' this}}
  <h1>{{_id}}</h1>
  <h2>{{username}}</h2>
{{/with}}
```
