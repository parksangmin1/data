import React from "react";

function ListUser({ users, onDelete, onUpdateToggle, onSelectUser }) {
    // console.log(data);
    // length.log(user)
    return(
        <div>
            
            {users.map((user) => (
                // console.log(user);
            
                    <div key={user.id}>
                        <b>{user.name}</b> ---- <b>{user.lastName}</b>
                        &nbsp;&nbsp;
                        <button key={user.id}onClick={() => {onDelete(user.id)}}>del</button>
                        &nbsp;&nbsp;
                        <button key={user.id+"edit-btn"}onClick={() => {onUpdateToggle(); onSelectUser(user);}}>edit</button>

                    </div>
            ))}
            
        </div>
    );
}


export default ListUser;