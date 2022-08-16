import React from 'react'
function convertingDate(ms) {
    // console.log(`converting : ${ms}`);
    const date = new Date(ms);
    // console.log(date);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}
function Item({ item, handleDelete }) {
    // console.log(item);
    const { calorie, content, createdAt, imgUrl, title } = item;

    const handleItemDelete = () => {
        handleDelete(item.id);
    }

    //추가 
    return (
        <div>
            {/* img url을 활용하여 각아이템 이미지 출력?? */}
            <img src={imgUrl}></img>
            <div>{title}</div>
            <div>{calorie} kcal</div>
            <div>{content}</div>
              <div>{convertingDate(createdAt)}</div>
            {/* createdAt을 활용하여 각 아이템 등록일자 출력 형태를2022. 08. 16*/}
        <div>{convertingDate(createdAt)}</div>
        <button onClick={handleItemDelete}>삭제</button>
        </div>
    )
}

function ItemList({ items, handleDelete }) {
    return(
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {/* const { calorie, content, createdAt, imgUrl, title } = item; */}
                    <Item 
                    item={item} 
                    handleDelete={handleDelete}
                    />
                </li>
            ))}
        </ul>
    );
    // console.log(items);
}

export default ItemList;