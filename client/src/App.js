
import { Component } from 'react';
import { Route } from 'react-router-dom';

import * as postService from './services/postService';

import Header from './components/Header/Header.js';
import Menu from './components/Menu';
import Main from './components/Main';
import About from './components/About';
import ContactUs from './components/ContactUs';
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

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.post.find(x => x.id === this.state.selectedPost)];
    }
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu
            onMenuItemClick={this.onMenuItemClick.bind(this)}
          />
          <Route path='/about' component={About} />
          <Route path='/contact-us' component={ContactUs} />

          <Main
            posts={this.getPosts()}

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
