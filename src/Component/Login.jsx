import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope me-2"></i>Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <i className="fas fa-lock me-2"></i>Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fas fa-sign-in-alt me-2"></i>Login
                </button>
              </form>
              <div className="card-footer text-center mt-3">
                <p>
                  Don't have an account? <a href="/signup">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

