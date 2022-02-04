<template>
  <div class="my-button">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    msg: String
  },
  components: {
  },
  mixins: [],
  data: function() {
    return {
      message: "MyButton"
    }
  },
  created: function() {

  },
  mounted: function() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>
  . {

  }
</style>


