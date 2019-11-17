<template>
  <div class="full-width center-content">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          required
          placeholder="Your email address"
        />
      </b-form-group>
      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-password"
      >
        <b-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
      >
        Log in
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let myjson = [{ // should be retrieved from the session storage which is intialized with the JSON.parse og myjson
        email: '1',
        password: '2',
        name: '3'
      },
      {
        email: 'a',
        password: 'b',
        name: 'c'
      }
      ]
      let email = this.form.email
      let password = this.form.password
      sessionStorage.user = JSON.stringify(myjson.find(function (user) { return ((user.email === email) && (user.password === password)) }))
      this.$router.push('/')
    }
  }
}
</script>
