import "./App.css"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(React.createElement(App), document.querySelector("#app"))
//@ts-ignore
module.hot?.accept()