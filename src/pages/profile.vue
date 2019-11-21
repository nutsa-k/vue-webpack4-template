<template>
  <div>
    <h1>Hey! It's <span v-if="user">{{ user.name }}</span> 's B Blog</h1>

    <ul>
      <li
        v-for="blog in blogs"
        :key="blog"
      >
        <p> {{ blog.img }} </p>
        <p> {{ blog.title }} </p>
        <p> {{ blog.text }} </p>
      </li>
    </ul>
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
    fetch('https://api.myjson.com/bins/i1qm2')
      .then(response => response.json())
      .then(json => {
        this.blog = json.blog
      })
  }
}
</script>
