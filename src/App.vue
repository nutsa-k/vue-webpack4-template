<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="#">
        B
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#">
            Link
          </b-nav-item>
          <b-nav-item href="profile">
            Profile
          </b-nav-item>
          <b-nav-item href="contact">
            Contact
          </b-nav-item>
          <b-nav-item href="gallery">
            Gallery
          </b-nav-item>
          <b-nav-item href="login">
            Log in
          </b-nav-item>
          <b-nav-item href="logout">
            Log out
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="stylus" scoped>
.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px
</style>
