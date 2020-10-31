import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import contact from './pages/Contacts';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={contact} />
    </BrowserRouter>
  );
}

export default Routes;
