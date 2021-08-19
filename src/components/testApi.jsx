import React from 'react';

const TestApi = ({loadingPost, loadingUsers, post, users}) => {

    return(
        <div>
            <section>
                <h1>POST</h1>
                {loadingPost && 'loading...'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <br/>

            <section>
                <h1>USER LIST</h1>
                {loadingUsers && 'loading...'}
                {!loadingUsers && users && (
                    <ul>
                        {users.map(user=>(
                            <li key={users.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}

export default TestApi;