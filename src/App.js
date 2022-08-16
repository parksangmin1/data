import {useState} from 'react'
import './App.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import mockItems from './db/mock.json';
function App(props) {
  const [items, setItems] = useState(mockItems);
    // 오더를 스테이트로 관리하면 어떨까?? ver 3
    const [order, setOrder] = useState('');


  // 정렬에 대한 함수를 하나로 합치는 방법?! ver 2 
  // const handleOrder = (e) => {
  //   console.log(e.target.name)
  //   let order = e.target.name;
  //   const newestItems = [...items].sort((item1, item2) => item2[order] - item1[order]);
  //   setItems(newestItems);
  // }

// ver 1 
  // const handleNewest = () =>{
  //   const newestItems = [...items].sort((item1, item2) => item2.createdAt - item1.createdAt);
  //   setItems(newestItems);
  // }
  // const handleCalorie = () => {
  //   const newestItems = [...items].sort((item1, item2) => item2.calorie - item1.calorie);
  //   setItems(newestItems);
  // }

  // ver 3 
  const handleNewest = () => setOrder('createdAt');
  const handleCalorie = () => setOrder('calorie');

  const orderedItems = [...items].sort((item1, item2) => item2[order] - item1[order]);
  // console.log(orderedItems);

  const handleDelete = (id) => {
    // console.log(id);
    const deletedItems = items.filter((item) => item.id !== id);
    setItems(deletedItems);
  }
  //추가
  const handleInsert = (newItem) => {
    // console.log(newItems);
    
    setItems((prevItems) => [newItem, ...prevItems]);

    // newItem.imgUrl = newItem.imgFile;
    // setItems([newItem, ...items]);
  }

  return (
   <>
   <ItemForm 
   onSubmitData={handleInsert}
   />
   {/* <button name='createdAt' onClick={handleOrder}>최신순</button>
   <button name='calorie' onClick={handleOrder}>칼로리순</button> */}
   <button onClick={handleNewest}>최신순</button>
   <button onClick={handleCalorie}>칼로리순</button>
   <ItemList 
   items={items}
   handleDelete={handleDelete}
  //  newestItem={newestItems}
   />
   </>
  );
}

export default App;
