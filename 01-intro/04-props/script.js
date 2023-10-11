function OurApp() {
  return (
    <>
      <OurHeader />
      <TimeArea />
      <ul>
        <Pet name="Meowsalot" species="cat" age="5" />
        <Pet name="Barksalot" species="dog" age="2" />
        <Pet name="Fluggy" species="rabbit" age="3" />
      </ul>
      <Footer />
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old
    </li>
  );
}

function Footer() {
  return <small>Copyright Footer Text.</small>;
}

function TimeArea() {
  return <p>The current time is {new Date().toLocaleString()}</p>;
}

function OurHeader() {
  return <h1 className="special">Our Amazing App Header</h1>;
}

const root = ReactDOM.createRoot(document.querySelector("#app"));

setInterval(function () {
  root.render(<OurApp />);
}, 1000);
