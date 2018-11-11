/*
 * Code running on browser's console
 */

localStorage
/*
  Storage {newDB: "new note", todos-jquery: "[{"id":"36b3a56f-161b-484d-894c-d3482bb4d142","tit…a121ec1bc22","title":"note 2","completed":false}]", length: 2}
*/

localStorage.setItem('newDb', 'new note')
// undefined
localStorage.getItem('newDb')
// "new note"
localStorage.setItem('newDb', 'new note changed')
// undefined
localStorage.getItem('newDb')
// "new note changed"
localStorage.setItem('newData', [1,2,3])
// undefined
localStorage.getItem('newData')
//"1,2,3"
localStorage.setItem('newData', [{}, {}, {}])
// undefined
localStorage.getItem('newData')
// "[object Object],[object Object],[object Object]"


var objectArray = [{name: 'Jugger'}, {name: 'Axe'}]
// undefined
JSON.stringify(objectArray)
// "[{"name":"Jugger"},{"name":"Axe"}]"
var objectArray = [{name: 'Jugger'}, {name: 'Axe'}]
// undefined
JSON.stringify(objectArray)
// "[{"name":"Jugger"},{"name":"Axe"}]"
var stringVersionOfArray = JSON.stringify(objectArray)
// undefined
stringVersionOfArray
// "[{"name":"Jugger"},{"name":"Axe"}]"
JSON.parse(stringVersionOfArray)
// (2) [{…}, {…}]


var store = localStorage.getItem('todos-jquery');
// undefined
store
// "[{"id":"36b3a56f-161b-484d-894c-d3482bb4d142","title":"note 1","completed":true}]"
Boolean(store)
// true
JSON.parse(store)
/*
[{…}]
0: {id: "36b3a56f-161b-484d-894c-d3482bb4d142", title: "note 1", completed: true}
length: 1
__proto__: Array(0)
*/
