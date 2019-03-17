<template>
  <span class="icon" :class="[type, size]">
    <i
      :class="[newPack, newPack === 'fa' ? `fa-${newIcon}` : null ]"
    >{{ newPack === 'mdi' ? newIcon : null }}</i>
  </span>
</template>

<script>
import config from "../../utils/config";

/**
 * @example ../../../docs-styleguidist/examples/icon.md
 */
export default {
  name: "bIcon",
  props: {
    /**
     * Type (color) of the icon, optional. Values:  `is-white`,
     * `is-black`, `is-light`, `is-dark`, `is-primary`,
     * `is-info`, `is-success`, `is-warning`,
     * `is-danger`,
     * and any other colors you've set in the `$colors` list on Sass
     */
    type: String,
    /**
     * Icon pack to use. Values: `mdi`, `fa`
     */
    pack: String,
    /**
     * Icon name
     */
    icon: String,
    /**
     * @ignore
     */
    both: {
      type: Boolean
    },
    /**
     * Icon size, optional. Values: `is-small`, `is-medium`, `is-large`
     */
    size: String
  },
  data() {
    return {
      newPack: this.pack || config.defaultIconPack
    };
  },
  computed: {
    /**
     * Internal icon name based on the pack.
     * If pack is 'fa', gets the equivalent FA icon name of the MDI,
     * internal icons are always MDI.
     */
    newIcon() {
      if (this.both) {
        return this.newPack === "mdi"
          ? this.icon
          : this.equivalentIconOf(this.icon);
      } else {
        return this.icon;
      }
    }
  },
  methods: {
    /**
     * Equivalent FA icon name of the MDI.
     */
    equivalentIconOf(value) {
      switch (value) {
        case "done":
          return "check";
        case "info":
          return "info-circle";
        case "check_circle":
          return "check-circle";
        case "warning":
          return "exclamation-triangle";
        case "error":
          return "exclamation-circle";
        case "arrow_upward":
          return "arrow-up";
        case "chevron_right":
          return "angle-right";
        case "chevron_left":
          return "angle-left";
        case "keyboard_arrow_down":
          return "angle-down";
        case "visibility":
          return "eye";
        case "visibility_off":
          return "eye-slash";
        case "arrow_drop_down":
          return "caret-down";
        default:
          return null;
      }
    }
  }
};
</script>
