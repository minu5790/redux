import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TestApi from '../components/testApi';
import { getPost, getUsers } from '../modules/testApi';


const TestApiContainer = () => {
    const dispatch = useDispatch();
    const temp = useSelector(state =>state);
    const {users, post}= temp.testApi;
    const loadingPost = temp.loading["testApi/GET_POST"];
    const loadingUsers = temp.loading["testApi/GET_USERS"];
    console.log()

    useEffect(()=>{
        dispatch(getPost(1));
        dispatch(getUsers(1));

    },[dispatch])
    return (
        <TestApi loadingPost={loadingPost} loadingUsers={loadingUsers} post={post} users={users}/>
    )
}

export default TestApiContainer;