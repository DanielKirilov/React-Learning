import UserListItem from "./UserListItem"
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import DeleteUserModal from "./DeleteUserModal";

import * as userService from "../services/userService";
import { useEffect, useState } from "react";

export default function UserListTable() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const [showCreate, setShowCreate] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result));
    }, [])

    const createUserClickHandler = () => {
        setShowCreate(true)
    }

    const closeUserModal = () => {
        setShowCreate(false);
    }

    const closeInfoModal = () => {
        setShowInfo(false);
    }

    const closeDeleteModal = () => {
        setShowDelete(false);
    }

    const userCreateHandler = async (e) => {
        //stop refreshing
        e.preventDefault();


        //get data from form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        //create user at the server
        const newUser = await userService.create(data);

        //add newUser to preexisting ones
        setUsers(state => [...state, newUser])

        //hide modal
        closeUserModal(false);
    }

    const infoClickHandler = async (userId) => {
        setSelectedUser(userId)
        setShowInfo(true);
    }

    const deleteUserHandler = async () => {
        //remove user from server
        await userService.remove(selectedUser);

        //remvoe user from state
        setUsers(state => state.filter(user => user._id !== selectedUser));


        //close the delete modal
        setShowDelete(false);
    }

    const deleteUserClickHandler = async (userId) => {
        setShowDelete(true);

        setUsers(state => [...state])

        setSelectedUser(userId);
    }


    return (
        <div className="table-wrapper">

            {showCreate && <CreateUserModal
                closeUserModal={closeUserModal}
                userCreateHandler={userCreateHandler}
            />
            }

            {showInfo && <UserInfoModal
                onClose={closeInfoModal}
                userId={selectedUser}
            />}

            {showDelete && <DeleteUserModal
                onClose={closeDeleteModal}
                onDelete={deleteUserHandler}
            />}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserListItem
                            key={user._id}
                            userId={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            phoneNumber={user.phoneNumber}
                            createdAt={user.createdAt}
                            imageUrl={user.imageUrl}
                            onInfoCLick={infoClickHandler}
                            onDeleteClick={deleteUserClickHandler}
                        />
                    ))}

                </tbody>
            </table>

            <button onClick={createUserClickHandler} className="btn-add btn">Add new user</button>
        </div>
    )
}