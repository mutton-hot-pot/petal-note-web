import Loadable from 'react-loadable';
import React from 'react';

//HOC for load component asychronously.
const  LoadingComponent = props => {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Timed Out !!!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
}

export default (opts) => {
  return Loadable(Object.assign({
    loading: LoadingComponent,
    delay: 500,
    timeout: 10,
  }, opts));
};