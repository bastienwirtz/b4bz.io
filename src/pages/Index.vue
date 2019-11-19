<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-2">Hi!<span class="emoji">👋</span></h1>
        <p class="subtitle">
          I'm <span class="highlight">Bastien</span>. I build things, mostly
          using code, or sometimes a hammer. <br />I may post stuff here, at a
          very uncertain pace.
          <span class="location"
            ><font-awesome :icon="['fas', 'map-marker-alt']" />
            <strong>Earthling</strong> - born & raised in France, currently
            living in San Francisco.</span
          >
        </p>
        <SafeEmail class="button is-primary is-inline-block"
          >Say hello!</SafeEmail
        >

        <div class="social-contacts is-inline-block">
          <a
            href="/bastien_wirtz_resume.pdf"
            target="_blank"
            aria-label="Curriculum Vitae"
            ><font-awesome :icon="['fas', 'file-pdf']"
          /></a>
          <a
            href="https://github.com/bastienwirtz"
            target="_blank"
            rel="noopener"
            aria-label="Follow me on Github"
            ><font-awesome :icon="['fab', 'github']"
          /></a>
          <a
            href="https://twitter.com/babooon"
            target="_blank"
            rel="noopener"
            aria-label="Follow me on Twitter"
            ><font-awesome :icon="['fab', 'twitter']"
          /></a>
          <a
            href="https://www.linkedin.com/in/bastien-wirtz/?locale=en_US"
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
            ><font-awesome :icon="['fab', 'linkedin-in']"
          /></a>
        </div>
      </div>
    </section>
    <script
      type="application/ld+json"
      v-html="{
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Bastien Wirtz',
        jobTitle: 'Software engineer',
        url: 'https://b4bz.io'
      }"
    ></script>
  </Layout>
</template>

<script>
import SafeEmail from "~/components/SafeEmail";

export default {
  metaInfo: {
    title: "b4bz"
  },
  components: {
    SafeEmail
  },
  mounted: function() {
    console.info(
      "",
      " ██████╗ ██╗  ██╗██████╗ ███████╗\n",
      " ██╔══██╗██║  ██║██╔══██╗╚══███╔╝\n",
      " ██████╔╝███████║██████╔╝  ███╔╝ \n",
      " ██╔══██╗╚════██║██╔══██╗ ███╔╝  \n",
      " ██████╔╝     ██║██████╔╝███████╗\n",
      " ╚═════╝      ╚═╝╚═════╝ ╚══════╝\n"
    );
    console.info(
      "Hey stranger! there's not so much to see here, but feel free to check out the source here: https://github.com/bastienwirtz/b4bz.io"
    );
  }
};
</script>

<style lang="scss" scoped>
.subtitle {
  padding-top: 0.5rem;
}
.location {
  display: block;
  margin: 0.8rem 0 1.5rem 0;
  font-size: 0.8rem;
  color: #878b8f;
  svg {
    margin-right: 3px;
  }
}

.emoji {
  margin-left: 3px;
  font-size: 2.2rem;
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
