<template>
  <div>
    <h1>Hey! It's <span v-if="user">{{ user.name }}</span> 's B Blog</h1>

  <ul>
      <li
        v-for="blog in blog"
        :key="blog"
      >
        {{ blog.title }},
        {{ blog.text }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/19jyre')
      .then(response => response.json())
      .then(json => {
        this.users = json.users
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}


export default {
  data: function () {
    return {
      blog: []
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