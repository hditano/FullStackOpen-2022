import React from 'react'
import { useEffect } from 'react';
import loginServices from '../services/Login';
import {setList, getData} from '../features/notification/allUsersSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

function AllUsers() {

    const dispatch = useDispatch();
    const allUser = useSelector(state => state.allusers);

    const id = useParams().id;
    const userDetails = allUser.find(ele => ele._id === id)

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
    <>
    {console.log(allUser)}
    </>
  )
}

export default AllUsers