<template>
  <div>
    <div class="container center-content">
        <h1 v-if="user">{{ user.name }} </h1>
    </div>
    <div class="container center-content">
        <h2>Welcome back to your B Blog!</h2>
    </div>
        <h3 v-if="user">{{ user.title }} </h3>    
    <div class="container center-content">
        <p v-if="user">{{ user.text }} </p>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: undefined,
      blogs: []
    }
  },

  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/d5oca')
      .then(response => response.json())
      .then(json => {
        this.blog = json.blog
      })
  }
}
</script>

<style>

h1 {
    color: violet;
}

</style>
