import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginAction }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <div>
        <h1 className="box-layout__title">Expensify App</h1>
        <p className="box-layout__subtitle">
          It&apos;s time to get your expenses under control
        </p>
        <button className="button" type="button" onClick={startLoginAction}>
          Login
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginAction: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
