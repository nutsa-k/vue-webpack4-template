
<template>
  <div class="container center-content">
    <img
      src="http://www.groupe-sii.com/pfw_files/cma/Website/Corporate_Site/contact-UK.jpg"
      width="30%"
    >

    <form
      action="https://formspree.io/xnqqbqpe"
      method="POST"
    >
      <div class="info">
        <label><span> your name </span>
          <input
            type="text"
            name="name"
          ></label>

        <label><span> your email </span>
          <input
            type="email"
            name="_replyto"
          ></label>
      </div>

      <label><span> your message </span>
        <textarea name="message" /></label>

      <input
        type="submit"
        value="Send"
      >
    </form>
  </div>
</template>

<script>
</script>

<style>

body {
    padding: 50px;
}
h1{
    color: violet;
}
h2 {
    color: coral;
}
form {
    max-width: 450px;
    margin: 0 auto 50px;
    color: violet;
}
label {
    display: block;
    margin-bottom: 20px;

}
span {
    display: block;
}
.info {
    label {
        width: 48%;
        padding-right: 10px;
        float: left;

    }
}
input, textarea {
    border: 3px solid;
    width: 100%;
    border-color: coral;
    color: violet;
}
</style>
