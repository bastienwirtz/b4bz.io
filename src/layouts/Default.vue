<template>
  <div :class="{ 'is-dark': isDark === true, 'is-light': isDark === false }">
    <header>
      <strong>
        <g-link to="/"
          ><font-awesome :icon="['fas', 'code']" />
          {{ $static.metadata.siteName }}</g-link
        >
      </strong>

      <a
        href="#"
        class="is-pulled-right"
        @click="toggleTheme()"
        aria-label="Toggle dark mode"
        ><font-awesome :icon="['fas', 'adjust']"
      /></a>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        {
          name: "theme-color",
          content: this.isDark ? "#131313" : "#f5f5f5"
        }
      ]
    };
  },
  data: function() {
    return {
      isDark: null
    };
  },
  methods: {
    toggleTheme: function() {
      if (this.isDark !== null) {
        // user defined
        this.isDark = !this.isDark;
      } else {
        // system pref
        this.isDark = !matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

body {
  font-family: $family-sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $family-monospace;
  }

  header {
    padding: 20px;
  }

  .codelines {
    color: hsla(0, 0%, 100%, 0.6);
    background: url("~@/assets/img/codelines.svg"), #2b3137;
    background-position: center 10%;
    background-size: cover;
  }
}
</style>
