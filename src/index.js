import React from "react";
import ReactDom from "react-dom";
var proxy = "https://cors-anywhere.herokuapp.com/";
var baseurl =
  "https://raw.githubusercontent.com/AlmightyAtom101/000json000/master/";

const list = (filename) => {
  var data = fetch(proxy + baseurl + filename)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      var error = { Error: "404" };
      return error;
    });
  return data;
};

function Login() {
  var filename = "courses";
  var data = console.log(list(filename));
  return <div></div>;
}

ReactDom.render(<Login />, document.getElementById("root"));
