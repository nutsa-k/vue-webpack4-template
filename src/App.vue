<template>
  <div class="container center-content">
    <div id="nav">
      <b-card
        title="FFD"
        no-body
      >
        <b-card-header header-tag="nav">
          <b-nav
            card-header
            tabs
          >
            <b-nav-item
              to="/"
              exact
              exact-active-class="active"
            >
              <img
                src="https://i.pinimg.com/originals/4a/68/2e/4a682e0b6df5798e7511120f102483c7.jpg"
                alt="Logo"
                title="Home"
                height="42"
                width="68"
              >
            </b-nav-item>
            <b-nav-item
              to="/profile"
              exact
              exact-active-class="active"
            >
              Profile
            </b-nav-item>
            <b-nav-item
              to="/contact"
              exact
              exact-active-class="active"
            >
              Contact Us
            </b-nav-item>
            <b-nav-item
              v-if="user"
              to="/logout"
              exact
              exact-active-class="active"
            >
              Log out
            </b-nav-item>
            <b-nav-item
              v-else
              to="/login"
              exact
              exact-active-class="active"
            >
              Log in
            </b-nav-item>
          </b-nav>
        </b-card-header>
      </b-card>
    </div>
    <RouterView />
  </div>
</template>

<style lang="stylus" scoped>
.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px
b-nav-item
  font-size 40px
</style>

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
</script>
