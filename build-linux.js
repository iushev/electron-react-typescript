const builder = require("electron-builder");

builder
  .build({
    targets: builder.createTargets([builder.Platform.LINUX]),
  })
  .then((sth) => {
    // I have literally no idea what would be passed
    // during a successful call, maybe just dump it
    // to the console
    console.log(sth);
  })
  .catch((e) => {
    // Some error handling
    console.error(e);
  });
