/* eslint-disable react/prop-types */

const PostsContainer = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            {props.posts.map((post, index) => (
                <div key={index}>
                    <h5>{post.title}</h5>
                    <p>{post.content}</p>
                </div>
            ))}

            <div>
                <h4>Authores Recomendados</h4>
                {props.users.map((user, index) => (
                    <div key={index}>
                        <h5>{user.name}</h5>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PostsContainer