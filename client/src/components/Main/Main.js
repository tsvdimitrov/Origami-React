import Post from '../Post';
import './Main.css';

const Main = ({
    posts
}) => {
    console.log(posts);
    return (
        <main className="main-container">
            <h1>Sooooome Heading</h1>

            <div className="posts"></div>
            {posts.map(x =>
                <Post
                    key={x._id}
                    content={x.content}
                    author={author}
                />
            )}
        </main >
    );
};

export default Main;