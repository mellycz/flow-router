Meteor.publish('foo', function () {
  this.ready();
});

Meteor.publish('bar', function () {
  this.ready();
});

// use this only to test global subs
Meteor.publish('baz', function () {
  this.ready();
});

Meteor.publish('readyness', function (doIt) {
  if(doIt) {
    this.ready();
  }
});
