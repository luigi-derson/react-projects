module.exports = {
    moduleDirectories: [
      'node_modules'
    ],
    transformIgnorePatterns: [
      // Change MODULE_NAME_HERE to your module that isn't being compiled
      "/node_modules/(?!lodash-es).+\\.js$"
    ]
  };