import React from 'react';
import './homepage.styles.scss';
import {Directory} from '../../components/directory/directory.component';

export const HomePage = function (props) {
  return(
    <div className="homepage">
      <Directory />
    </div>
  );
}