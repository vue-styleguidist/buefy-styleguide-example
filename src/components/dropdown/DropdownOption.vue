<template>
    <li class="option"
        :class="{
            'is-subheader': subheader,
            'is-disabled': disabled,
            'is-separator': separator,
            'is-selected': value !== null && value === $parent.$parent.selected,
            'has-link': hasLink
        }"
        @click="selectOption">

        <slot></slot>
    </li>
</template>

<script>

    /**
     * @example ../../../docs-styleguidist/examples/dropdownOption.md
    */
    export default {
        name: 'bDropdownOption',
        props: {
            /**
            * The value that will be returned on events and v-model
            */
            value: {
                type: [String, Number, Object, Boolean, Array],
                default: null
            },
            /**
            * Set the option to be a separator
            */
            separator: Boolean,
            /**
            * Option is disabled
            */
            disabled: Boolean,
            /**
            * Option is not a clickable item
            */
            subheader: Boolean,
            /**
            * Use it if your option is an anchor tag or ``router-link``
            */
            hasLink: Boolean
        },
        computed: {
            /**
             * Check if option can be clickable.
             */
            isClickable() {
                return !this.separator && !this.disabled && !this.subheader
            }
        },
        methods: {
            /**
             * Click listener, select the option.
             */
            selectOption() {
                if (!this.isClickable) return

                this.$parent.$parent.selectOption(this.value)
                this.$emit('click')
            }
        },
        created() {
            // Parent is actually the transition-group
            if (!this.$parent.$parent.$data._isDropdown) {
                this.$destroy()
                throw new Error('You should wrap bDropdownOption on a bDropdown')
            }
        }
    }
</script>
