import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';

//========================== render ==============================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

//============================= 2 =======================

function Statistics(props) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
}

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
