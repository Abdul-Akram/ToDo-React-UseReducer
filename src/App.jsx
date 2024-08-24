import './App.css';
import { useReducer } from 'react';
import { datas } from './Attributes/Source';
import Home from './Pages/Home';

function reducerFn(state, action) {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        Items: [
          ...state.Items,
          {
            id: state.Items.length !== 0 ? state.Items[state.Items.length - 1].id + 1 : 1,
            task: action.payload,
          },
        ],
        originalItems: [
          ...state.originalItems,
          {
            id: state.originalItems.length !== 0 ? state.originalItems[state.originalItems.length - 1].id + 1 : 1,
            task: action.payload,
          },
        ],
      };
    case "Delete":
      const updatedItems = state.Items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        Items: updatedItems,
        originalItems: state.originalItems.filter(item => item.id !== action.payload.id),
      };
    case "Search":
      const searchQuery = action.payload.toLowerCase();
      const filteredItems = searchQuery
        ? state.originalItems.filter(item =>
          item.task.toLowerCase().includes(searchQuery)
        )
        : state.originalItems;
      return {
        ...state,
        Items: filteredItems,
      };
    case "Check":
      const updatedItemsCheck = state.Items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      const updatedOriginalItemsCheck = state.originalItems.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return {
        ...state,
        Items: updatedItemsCheck,
        originalItems: updatedOriginalItemsCheck
      };

    default:
      return state;
  }
}


function App() {
  const InitialState = {
    Items: [...datas],
    originalItems: [...datas]
  };

  const [state, dispatch] = useReducer(reducerFn, InitialState);

  function handleDelete(item) {
    dispatch({ type: "Delete", payload: item });
  }

  return (
    <div className='App'>
      <Home state={state} dispatch={dispatch} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
