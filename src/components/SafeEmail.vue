<template>
  <a
    href="#"
    data-name="bastien.wirtz"
    data-domain="gmail"
    data-tld="com"
    onclick="window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"
    aria-label="contact me!"
  >
    <slot />
  </a>
</template>


<script>
export default {
  name: "SafeEmail",
  props: {
    icon: Boolean
  }
};
</script>

<style lang="scss" scoped>
.text-link.chm-safe-email:after {
  content: attr(data-name) "@" attr(data-domain) "." attr(data-tld);
}
</style>
