import React,{Component} from 'react'



class Todos extends Component{
    constructor(){
        super();


        this.state={
            todo:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        console.log(todo);
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todo:[
            ...this.state.todos,
            this.state.todo
            ],
            todo:''
        })
    }

    removeTodo=()=>{
        this.setState({
            todo:this.state.todos.filter((currentTodo)=>{
                return currentTodo!=todo;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo" />
                <button onClick={this.addTodo}>Add todo</button>
                <ol>
                    {
                        this.state.todos.map((todo,index)=>{
                            return <li key={index}>{todo}
                            <button onClick={()=>{
                                this.removeTodo(todo)
                            }
                        }>Remove</button></li>
                        })
                    }
                </ol>
            </div>
        )
    }
}


export default Todos;