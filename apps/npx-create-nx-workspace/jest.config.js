module.exports = {
  name: "npx-create-nx-workspace",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/npx-create-nx-workspace/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
