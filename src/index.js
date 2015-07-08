import React from 'react';
import GraphQLWebClientWrapper from './GraphQLWebClientWrapper';

React.render(<GraphQLWebClientWrapper endpoint="http://httpbin.org/get"/>, document.getElementById('root'));
