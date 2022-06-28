import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import DoneItemsList from './DoneItemsList';
import { Container, Form, Navbar, Table } from 'react-bootstrap';
import './App.css';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

const getLocalItems = ()=>{
  let lists = localStorage.getItem('lists');
  if (lists){
    return JSON.parse(localStorage.getItem('lists'));
  }else {
      return [];
  }

}

const getLocalDoneItems = ()=>{
  let Donelists = localStorage.getItem('Donelists');
  if (Donelists){
    return JSON.parse(localStorage.getItem('Donelists'));
  }else {
    return [];
}

}

function App() {
  const [TitleList,setTitleList] = useState("");
  const [Items,setItems] = useState(getLocalItems());
  var [DoneList,setDoneList] = useState("");
  const [DoneItems,setDoneItems] = useState(getLocalDoneItems());


const titleEvent =(event)=>{
  setTitleList(event.target.value);
};

function handleKeyPress(e) {
  if(e.charCode===13){
    setTitleList(e.target.value);
    addList();
    }

}


const addList=()=>{
  setItems((oldItems)=>{
    return [...oldItems,TitleList]
  });
  setTitleList('')
};


const doneItem = (id)=>{
  setItems((oldItems)=>{
    DoneList = (oldItems[id]);
    return oldItems.filter((arrElem,index)=>{
      return index!==id

    });
  });
};

const addDoneList=()=>{
  setDoneItems((puranaItems)=>{
    return [...puranaItems,DoneList]
    
  });
};


const deleteItem = (id)=>{
  setDoneItems((puranaItems)=>{
    return puranaItems.filter((arrElem,index)=>{
      return index!==id

    });
  });
};

const clear = ()=>{
  
  localStorage.clear();
  window.location.reload();
}


useEffect(()=>{
localStorage.setItem('lists',JSON.stringify(Items))

},[Items]);

useEffect(()=>{
  localStorage.setItem('Donelists',JSON.stringify(DoneItems))
  
  },[DoneItems]);



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        
      TailNode's Todo App
      </Navbar.Brand>
    </Container>
  </Navbar>
  <div className="container my-4">
  <h1 className="text-center"><strong>TODOs List</strong></h1>
  <Form.Label className='h3' htmlFor="input">Add to Your Todo List</Form.Label>
  <Form.Control
    type="text"
    id="title"
    value={TitleList}
    onChange={titleEvent}
    onKeyPress={(e) => handleKeyPress(e)}
    
  />
  
  <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
            <button className="btn btn-dark me-md-2" id="add" onClick={addList}>Add to Todo List</button>
            <button id="clear" className="btn btn-dark" onClick={clear} >Clear All</button>
        </div>
      
        <div id="items" className='d-inline-block mx-5 col-lg-5 my-4 row'>
            <h2><strong>Your Items</strong></h2>
            <Table striped bordered hover variant="dark"  >
                <thead>
                  <tr>
                    
                    <th scope="col">Item Title</th>
                    <th scope="col"></th>

                    
                  </tr>
                </thead>
                <tbody id="tableBody">
              {Items.map((itemval,index)=>{
               return <ItemList key={index} id={index} text={itemval} onSelect={doneItem} onMouseDown={addDoneList}/>;
              })}
                  
                  
                </tbody>
              </Table>
        </div>
        <div id="items" className='d-inline-block mx-5 col-lg-5 my-4 row'>
            <h2><strong>Done Items</strong></h2>
            <Table striped bordered hover variant="dark"  >
                <thead>
                  <tr>
                    
                    <th scope="col">Item Title</th>
                    <th scope="col"></th>

                    
                  </tr>
                </thead>
                <tbody id="tableBody">
              {DoneItems.map((itemval,index)=>{
                return <DoneItemsList key={index} id={index} text={itemval} onSelect={deleteItem}/>
              })}
                  
                  
                </tbody>
              </Table>
        </div>
  </div>

    </div>
  );
}



    


export default App;
