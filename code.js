// ==UserScript==
// @name         github 日期格式转换
// @namespace    http://tampermonkey.net/
// @version      2025-01-01
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // const _historyWrap = function (type) {
  //   const orig = history[type];
  //   const e = new Event(type);
  //   return function () {
  //     const rv = orig.apply(this, arguments);
  //     e.arguments = arguments;
  //     window.dispatchEvent(e);
  //     return rv;
  //   };
  // };
  // //history.pushState = _historyWrap('pushState');
  // history.replaceState = _historyWrap("replaceState");

  // // window.addEventListener('pushState', function(e) {
  // // alert("pushState")
  // // code()
  // //});

  // // 监听 地址栏改变 事件
  // window.addEventListener("replaceState", function () {
  //   //alert("replaceState")
  //   setTimeout(() => {
  //     code();
  //   }, 2000);
  // });

  let btn = document.createElement("button");
  btn.innerText = "转为中文日期";
  btn.onclick = () => code();
  btn.style = `
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 99999;
   `;
  document.body.appendChild(btn);

  // 点击按钮触发,每次翻页都得再点击,
  // 监听地址栏改变,比较省力,但不想用的时候得关闭脚本
  function code() {
    let yearNumber = new Date().getFullYear();
    let yearStr = String(yearNumber);
    let lastYearStr = String(yearNumber - 1);

    let times = document.querySelectorAll("relative-time");

    for (const item of times) {
      /** @type {string} */
      let title = item.title;
      title = title.replace("Jan", "1 月");
      title = title.replace("Feb", "2 月");
      title = title.replace("Mar", "3 月");
      title = title.replace("Apr", "4 月");
      title = title.replace("May", "5 月");
      title = title.replace("Jun", "6 月");
      title = title.replace("Jul", "7 月");
      title = title.replace("Aug", "8 月");
      title = title.replace("Sep", "9 月");
      title = title.replace("Oct", "10 月");
      title = title.replace("Nov", "11 月");
      title = title.replace("Dec", "12 月");
      title = title.replace(" GMT+8", "");
      title = title.replace(yearStr + ",", "");
      title = title.replace(lastYearStr + ",", "去年,");
      //title = title.replace("AM", "上午");
      //title = title.replace("PM", "下午");
      item.shadowRoot.textContent = title;
      // 不喜欢样式可以去掉,使用 github 默认的 style
      item.style = `
    position: relative;
    background-color: yellow;
    border: 1px solid red;
    z-index: 99999;
    padding: 1px 5px;
      `;
    }
  }
})();
