<template>
  <div id="app">
    <!--
      Vue allows us to define filters that we can use with interpolations and bindings. 
      And the important thing is that filters don't transform the original data. 
      They only change the output.

      The usage is entirely simple with a pipe and then the name of the filter
      With this example we use the global filter
    -->
    <h1>{{ date | globalDate }}</h1>
    
    <!--
      You can also use multiple filters and with additional params.

      But, and that's important to know, Vue doesn't provide us the initial value for the secondFIlter. 
      You get the new output from the first filter instead.

      With this example we use all local filter, defined in the components scope.
    -->
    <h1>{{ date | localDate | secondFilter(true, 'world') }}</h1>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      date: '2020-08-07'
    }
  },
  filters: {
    localDate(value) {
      return 'Ready on '+ value
    },
    secondFilter(value, boolean, arg) {
      return value + ', nope ' + (boolean ? arg : '')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
