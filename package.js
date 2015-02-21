Package.describe({
  name: 'accounts-chroma',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Login service for Chroma accounts",
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('chroma.js');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('chroma', ['client', 'server']);

  api.addFiles('chroma_login_button.css', 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('accounts-chroma');
//   api.addFiles('accounts-chroma-tests.js');
// });
