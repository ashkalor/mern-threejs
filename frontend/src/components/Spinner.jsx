function Spinner({ desc, user }) {
  return (
    <div className="loadingSpinnerContainer">
      {user && <div className="title">Welcome {user}</div>}
      {desc && <div className="desc">{desc}</div>}
      <div className="loadingSpinner"></div>
    </div>
  );
}

export default Spinner;
