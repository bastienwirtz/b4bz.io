<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Hi!<span class="emoji">👋</span></h1>
        <p class="subtitle">
          I'm <span class="highlight">Bastien</span>. I build things, mostly
          using code, or sometimes a hammer. <br />I may post stuff here, at a
          very uncertain pace.
          <span class="location"
            ><font-awesome :icon="['fas', 'map-marker-alt']" />
            <strong>Earthling</strong> - born & raise in France, currently
            living in San Francisco.</span
          >
        </p>
        <SafeEmail class="button is-primary is-inline-block"
          >Say hello!</SafeEmail
        >

        <div class="social-contacts is-inline-block">
          <a
            href="https://github.com/bastienwirtz"
            aria-label="Follow me on Github"
            ><font-awesome :icon="['fab', 'github']"
          /></a>
          <a
            href="https://twitter.com/babooon"
            aria-label="Follow me on Twitter"
            ><font-awesome :icon="['fab', 'twitter']"
          /></a>
          <a
            href="https://www.linkedin.com/in/bastien-wirtz/?locale=en_US"
            aria-label="Linkedin"
            ><font-awesome :icon="['fab', 'linkedin-in']"
          /></a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import SafeEmail from "~/components/SafeEmail";

export default {
  metaInfo: {
    title: "b4bz",
    description: "b4bZ personal website"
  },
  components: {
    SafeEmail
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  margin-bottom: 10px;
}
.location {
  display: block;
  margin: 0.8rem 0 1.5rem 0;
  font-size: 0.8rem;

  svg {
    margin-right: 3px;
  }
}

.emoji {
  margin-left: 3px;
  font-size: 2.8rem;
}

.social-contacts {
  a {
    font-size: 1.4rem;
    padding: 1rem 0.5rem;

    &:first-child {
      padding-left: 1.3rem;
    }
  }
}
</style>
