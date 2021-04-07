export default () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input className="form-control"></input>
        <label>Password</label>
        <input className="form-control" type="password"></input>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </form>
  );
};
