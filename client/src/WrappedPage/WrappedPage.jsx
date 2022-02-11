import React from 'react';
import './WrappedPage.css';

function WrappedPage() {
  return (
    <div className="WrappedPage">
      <div className="container text-center">
        <div className="row">
          <h1>Enter your code</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">#</span>
              </div>
              <input type="text" className="form-control" placeholder="Super Secret Code" aria-label="Super Secret Code" aria-describedby="basic-addon1" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default WrappedPage;
