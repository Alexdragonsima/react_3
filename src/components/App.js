import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import DecimalToBinary from './decimalToBinary/DecimalToBinary.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Posts from './posts/Posts.js';
import Post from './post/Post.js';

class App extends React.Component {
  state =
    {
      posts:
        [
          { id: "1", title: "Процедурное программирование на языке C++", content: "Изучаются базовые конструкции языка" },
          { id: "2", title: "Обьектно-Ориентированное программирование на языке C++", content: "Изучаются базовые концепции OOP языка" },
          { id: "3", title: "DataConteiners", content: "Изучаются основные структуры данных" }
        ]
    }
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Hello />
        <Length />
        <Form />
        <Range /> */} 

        {/* <Post title ="title" content = "content"/> */}
        <Posts  posts={this.state.posts}/>
        {/* <DecimalToBinary/> */}
      </div>
    );
  }
}

export default App;
