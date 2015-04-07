Package.describe({
  name: 'underscorestringfp:underscore.string.fp',
  version: '1.0.4',
  summary: 'underscore.string.fp (official): A wrapper for underscore.string to use it as a ' +
    'FP-library or with Ramda/lodash-fp.',
  git: 'https://github.com/stoeffel/underscore.string.fp',
  documentation: 'README.markdown',
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.1');
  api.addFiles('dist/underscore.string.fp.js');
});
