/* eslint-disable no-undef */
import P from 'prop-types';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  console.log('Pai, renderizou!');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
