import Vue from "vue";

Vue.filter("globalDate", function(value) {
  const date  = new Date(value);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString("en-US", options);
});