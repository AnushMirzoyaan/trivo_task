import React, {useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import './index.css';
import CreateUpdateDialog from "../utils/CreateUpdateDialog";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ApprovementDialog from "../utils/ApprovementDialog";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Users = ({setIsLoggedIn}) => {
    const usersInitialValue = [
        {id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', age: 30},
        {id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', age: 25},
        {id: 3, name: 'Michael Johnson', email: 'michael@example.com', phone: '555-555-5555', age: 35},
        {id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '111-222-3333', age: 28},
        {id: 5, name: 'Christopher Brown', email: 'chris@example.com', phone: '444-444-4444', age: 32},
        {id: 6, name: 'Amanda Wilson', email: 'amanda@example.com', phone: '666-777-8888', age: 29},
        {id: 7, name: 'Matthew Taylor', email: 'matthew@example.com', phone: '999-999-9999', age: 27},
        {id: 8, name: 'Olivia Martinez', email: 'olivia@example.com', phone: '123-123-1234', age: 31},
        {id: 9, name: 'Daniel Anderson', email: 'daniel@example.com', phone: '321-321-4321', age: 26},
        {id: 10, name: 'Sophia Hernandez', email: 'sophia@example.com', phone: '567-567-5678', age: 33},
        {id: 11, name: 'William Gonzalez', email: 'william@example.com', phone: '789-789-7890', age: 30},
        {id: 12, name: 'Isabella Perez', email: 'isabella@example.com', phone: '890-890-8901', age: 24},
        {id: 13, name: 'Ethan Ramirez', email: 'ethan@example.com', phone: '432-543-6543', age: 29},
        {id: 14, name: 'Mia Torres', email: 'mia@example.com', phone: '567-678-7890', age: 27},
        {id: 15, name: 'Alexander Flores', email: 'alexander@example.com', phone: '876-765-6543', age: 35},
    ];
    const [users, setUsers] = useState(usersInitialValue);
    const [editingUser, setEditingUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [deletingUser, setDeletingUser] = useState(null);
    const addNewUser = (newUser) => {
        setUsers([...usersInitialValue.map((user) => ({...user})), {...newUser, id: users.length + 1}]);
        setIsEditing(false)
    }
    const updateUser = (updatedUser) => {
        setUsers(usersInitialValue.map((user) => user.id === editingUser.id ? updatedUser : user));
        setIsEditing(false);
        setEditingUser(null);
    }
    const cancelCallback = () => {
        setEditingUser(null);
        setIsEditing(false);
    }
    const deleteHandleSubmit = () => {
        setUsers(users.map(user => user).filter(user => user.id !== deletingUser.id))
        setDeletingUser(null)
    }


    return (
        <div className='wrapper'>
            <div className='actionsWrapper'>
                <Button className='addUser' onClick={() => {
                    setIsEditing(true)
                    setEditingUser(null)
                }}>Create User</Button>
                <Button onClick={() => {
                    setIsLoggedIn(false);
                }}>Log out</Button>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                        setEditingUser(user);
                                        setIsEditing(true);
                                    }}><EditOutlinedIcon/></Button>
                                    <Button onClick={() => setDeletingUser(user)}>
                                        <DeleteOutlineOutlinedIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isEditing && <CreateUpdateDialog isOpen={isEditing} closeCallback={cancelCallback}
                                              submitCallback={editingUser ? updateUser : addNewUser}
                                              initialValues={editingUser}/>}
            {deletingUser && <ApprovementDialog open={Boolean(deletingUser)}
                                                details={`Do you want to delete ${deletingUser.name}`}
                                                title={"Deleting user"}
                                                handleSubmit={deleteHandleSubmit}
                                                handleClose={() => setDeletingUser(null)}/>}
        </div>
    );

};

export default Users;
