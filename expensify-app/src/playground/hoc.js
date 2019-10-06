/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is provate info. Please don't share it.</p>
            { props.isSecure ? <WrappedComponent {...props} /> : <p>You are not allowed to see this info.</p>}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log-in to see the information</p>
            )}
        </div>
    );
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isSecure={true} info="There are some details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are some details" />, document.getElementById('app'));