pragma solidity  >=0.4.22 <0.7.0;
// pragma solidity ^0.4.18;

contract Todos {

  struct Todo {
    uint todoId;
    string data;
  }  
  Todo[] allTodos;

  function createTodo(string memory todo) public {
      uint todoId = allTodos.length++;
    Todo memory newTodo = Todo(todoId, todo);   
    allTodos.push(newTodo);
  }

  function getTodos() public view returns () {
    return allTodos;
  }
}
