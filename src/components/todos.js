import React, { useReducer, useContext, useRef, useEffect } from 'react';

const Context = React.createContext();
// reducer
const reducer = (state, action) => {
  let todos;
  switch (action.type){
    case 'add':
      todos = [...state, { id: state.length + 1, text: action.value, completed: false}]
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    case 'delete':
      todos = state.filter(item => item.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos
    case 'completed':
      return state.map(item => {
        if (item.id === action.payload) item.completed = !item.completed;
        todos = {...item};
        localStorage.setItem('todos', JSON.stringify(todos));
        return {...item}
      })
    case 'init':
      return JSON.parse(action.value);
    case 'reset':
      localStorage.removeItem("todos");
      return action.payload;
    default:
      return state;
      //throw new Error();
  }
}

const Todos = props => {
  const inputRef = useRef(); 
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    inputRef.current.focus();
    let todos = localStorage.getItem("todos") ? localStorage.getItem("todos") : [];
    dispatch({ type:'init', value: todos });
  }, []);

  return (
    <Context.Provider value={dispatch}>
      <div className="container bg-light shadow-light pb-4 mb-4">
        <div className="row justify-content-center">
          <div className="fit pb-4">
            <img src="https://picsum.photos/1140/280?random" alt=""></img><br></br>
          </div>
          <div className="col-md-6 text-center">
            <input className="form-control" type="text" ref={inputRef}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    dispatch({type:'add', value: inputRef.current.value });
                    inputRef.current.value = "";
                  }
                }}
            />
          </div>
          <div className="col-md-3">
            <button className="btn-light btn-circle" 
              onClick={()=> {
                dispatch({type:'add', value:inputRef.current.value});
                inputRef.current.value = "";
                inputRef.current.focus();
              }}>&nbsp;+&nbsp;
            </button>
            <button className="btn btn-light" 
              onClick={()=> dispatch({type:'reset', payload:[] })}>Reset
            </button>
            <br />
            <br />
          </div>
        </div>
        <TodosList items={state}/>
      </div>
    </Context.Provider>
  )
}

const TodosList = ({ items }) => {
  console.log(items);
  if (items && items.length === 0) return (<div></div>)
  return items.map(item => <TodoItem key={item.id} {...item}/>);
}

const TodoItem = ({ id, completed, text}) => {
  const dispatch = useContext(Context);

  return(
    <div className="row justify-content-center m-1">  
      <div className="col-md-6" style={{textDecoration:completed ? 'line-through' : ""}} onClick={() => dispatch({type: 'completed', payload:id })}>&nbsp;{text}&nbsp;
      </div>
      <div className="col-md-2">     
        <button className="btn-danger btn-circle" onClick={() => dispatch({type: 'delete', payload:id })}>&nbsp;x&nbsp;</button>
      </div>
    </div>
  )
}

export default Todos;
