'use strict';

const hello = (params) => {
  const name = params.name || 'World';
  return { payload: `Hello, ${name}!` };
};

exports.handler = hello;
