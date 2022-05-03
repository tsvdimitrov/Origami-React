
import { Component } from 'react';

import * as postService from './services/postService';

import Header from './components/Header/Header.js';
import Menu from './components/Menu';
import Main from './components/Main';
import style from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      selectedPost: null,
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({ posts })
      });
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu />
          <Main
            posts={this.state.posts}
            onMenuItemClick={this.onMenuItemClick.bind(this)}
          />
        </div>
      </div >
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Menu />
//         <Main />
//       </div>
//     </div >
//   );
// }
