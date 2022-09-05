import React from 'react'
import { useEffect } from 'react';
import loginServices from '../services/Login';
import {setList, getData} from '../features/notification/allUsersSlice';
import {useSelector, useDispatch} from 'react-redux';

function AllUsers() {

    const dispatch = useDispatch();
    const allUser = useSelector(state => state.allusers);

    useEffect(() => {
        const fetchData = async () => {
            const response = await loginServices.getAllUsers();
            dispatch(setList(response));
        }
        fetchData();
    }, [])

    const style = {
        div: {
         display: 'flex',
         margin: '20px',   
        },
        list: {
            display: 'flex',
            marginLeft: '40px',
            marginRight: '20px',
            right: '100px'
        }
    }

  return (
    <table>
        <tr>
            <th>Username</th>
            <th>Blogs Created</th>
        </tr>
        {allUser && allUser.map((ele) => {
            return (
                <tr>
                    <td>{ele.username}</td>
                    <td>{ele.blogs.length}</td>
                </tr>
            )
        })}
    </table>
  )
}

export default AllUsers