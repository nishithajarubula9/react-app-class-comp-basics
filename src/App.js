import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoData from './TodoData'
import Conditional from './Conditional'
import Login from './Login'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Nishitha",
      age: "26",
      answer: "yes",
      isLoggedIn: true,
      todos: TodoData,
      count: 0,
      isLoading: true,
      unreadMessages: ["whats up",
      "how are u"],
      messages: ["one"]
    }
  }


componentDidMount() {
  setTimeout(() => {
    this.setState({
      isLoading: false
    })

  },5000)
}
handleClick = () => {
  this.setState(prevState => {
    return {
    count: prevState.count+1
  } 
  })
}
handleButtonClick = () => {
  this.setState(prevState => {
    return {
    isLoggedIn: !prevState.isLoggedIn
  } 
  })
}

handleChange = (id) => {
  console.log("changed",id)
  // update the state
  //we need to deal with the entire array, we are saving 
  //an array in the state and we never want to modify the state directly
  // it wont be just as easy as looping through the array which is {TodoData}
  // and finding the item with this id {handleChange(id)} and then flipping it
  //because that will modify the existing state
  //But we can do like returnig a new array by using map
  this.setState(prevState => {
    const updateTodos = prevState.todos.map(itemTodo => {
      if(itemTodo.id === id){
        itemTodo.completed = !itemTodo.completed
      }
      return itemTodo// returns todo and puts the todo item in the new array which is updatedTodos
    })
    return {
      todos: updateTodos 
    }

  })//
  //we are going to setstate beacuse we care what we have in the previous state
  //we will use map to loop over prevState.todos and look for the todo with id
  //that is given here in the method{this.handleChange(id)}
}

render() {
  let buttonName = this.state.isLoggedIn ? "LogIn" : "LogOff" 


    const todoComponents = this.state.todos.map(todo => (
      <TodoItem key={todo.id} item={todo} handleChange={this.handleChange}/>
    ))
    // handleChange is going to be passed to the
    // TodoItem component and in TodoItem component we need to implement
    // the onchange with the new method th at you have passed to it
    console.log(this.state.isLoggedIn,"login");
   return (

      <div>
        <Conditional  isLoading={this.state.isLoading}
        unreadMessages={this.state.unreadMessages.length}
        />
        <button onClick={this.handleButtonClick}>{buttonName}</button>     
        {this.state.count}
        <button onClick={this.handleClick}>Click me</button>
        {todoComponents}
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.answer}</h1>
        {this.state.unreadMessages.length > 0 ?<p>{this.state.unreadMessages.length}</p>: null}
        {this.state.messages.length> 0 &&
        <p>{this.state.messages.length}</p>
        }
      </div> 
    );
  }
}
