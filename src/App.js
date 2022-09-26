import './App.css';
import Content from './Content'
// import {useState} from 'react'
import $ from 'jquery';

$(window).on("load", function(){
  $(".circle-loading").fadeOut('slow');
});

function App() {

  return (
    <div className="wrapper">
      <div className='loading-wrapper'>
        <div className="circle-loading"></div>
      </div>
      <Content />
    </div>
  );
}

export default App;
