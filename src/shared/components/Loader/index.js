import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { ProgressBar } from './styles';

function Loader(props) {
  const { padding } = props;
  return (
    <ProgressBar loaderpadding={padding}>
      <CircularProgress />
      <p>Loading Results...</p>
    </ProgressBar>
  );
}

Loader.propTypes = {
  padding: PropTypes.string,
};

export default Loader;
