if (Meteor.isClient) {
  Template.body.helpers({
    loc: function () {
      // return 0, 0 if the location isn't ready
      // this is another comment
      return Geolocation.latLng() || { lat: 0, lng: 0 };
    },
    error: Geolocation.error
  });
}
