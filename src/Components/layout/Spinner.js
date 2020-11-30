import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () =>
    <Fragment>
      <img className="loading-spinner" src={spinner} alt="Loading..."/>
    </Fragment>

export default Spinner