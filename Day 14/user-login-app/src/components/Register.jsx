import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Register = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label for="Email1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="Password1">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;