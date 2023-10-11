function OurApp() {
  return (
    <>
      <OurHeader />
      <OurHeader />
      <OurHeader />
      <TimeArea />
      <Footer />
    </>
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
