function OurApp() {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Our Amazing App Header"),
    React.createElement(
      "p",
      null,
      `The current times is ${new Date().toLocaleString()}.`
    ),
    React.createElement("small", null, "Copyright footer text"),
  ]);
}

const root = ReactDOM.createRoot(document.querySelector("#app"));

setInterval(function () {
  root.render(React.createElement(OurApp));
}, 1000);
