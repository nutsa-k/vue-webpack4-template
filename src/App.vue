<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          offset="0"
        >
          <div>
            <b-navbar
              variant="faded"
              type="light"
            >
              <b-navbar-brand href="#">
                <img
                  src="https://i.pinimg.com/originals/4a/68/2e/4a682e0b6df5798e7511120f102483c7.jpg"
                  height="42"
                  width="42"
                  class="d-inline-block align-top"
                  alt="logo"
                >
                B Blog
              </b-navbar-brand>

              <b-navbar-toggle target="nav-collapse" />

              <b-collapse
                id="nav-collapse"
                is-nav
              >
                <b-navbar-nav>
                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  >
                    HOME
                  </b-link>

                  <b-link
                    to="/profile"
                    router-tag="b-nav-item"
                  >
                    PROFILE
                  </b-link>

                  <b-link
                    to="/contact"
                    router-tag="b-nav-item"
                  >
                    CONTACT US
                  </b-link>

                  <b-link
                    to="/login"
                    router-tag="b-nav-item"
                  >
                    LOG IN
                  </b-link>

                  <b-link
                    to="/logout"
                    router-tag="b-nav-item"
                  >
                    LOG OUT
                  </b-link>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <RouterView />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="stylus" scoped>
.container
  font-family Bradley Hand, cursive
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
    fetch('https://api.myjson.com/bins/16xham')
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
