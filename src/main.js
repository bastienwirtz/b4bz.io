// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faAdjust,
  faMapMarkerAlt,
  faCode,
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "~/assets/sass/app.scss";

import DefaultLayout from "~/layouts/Default.vue";

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faAdjust,
  faMapMarkerAlt,
  faLinkedinIn,
  faCode,
  faFilePdf
);

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "author",
    href: "humans.txt"
  });
}
