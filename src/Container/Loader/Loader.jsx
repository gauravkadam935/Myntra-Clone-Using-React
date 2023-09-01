import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <div class="ui segment" color="black">
  <p></p>
  <div class="ui active dimmer">
    <div class="ui loader"></div>
  </div>
</div>
  );
}