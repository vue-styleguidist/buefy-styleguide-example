<template>
    <span
        class="tooltip"
        :data-label="label"
        :class="[newType, position, size, {
            'is-square': square,
            'is-animated': newAnimated,
            'is-always': always,
            'is-multiline': multilined,
            'is-dashed': dashed
        }]">
        <slot></slot>
    </span>
</template>

<script>
    import config from '../../utils/config'

    /**
     * @example ../../../docs-styleguidist/examples/tooltip.md
    */
    export default {
        name: 'bTooltip',
        props: {
            /**
             * Type (color) of the tooltip
            */
            type: {
                type: String,
                default: 'is-primary'
            },
            /**
             * Tooltip text
            */
            label: String,
            /**
             * Tooltip position in relation to the element
            */
            position: {
                type: String,
                default: 'is-top',
                validator(value) {
                    return [
                        'is-top',
                        'is-bottom',
                        'is-left',
                        'is-right'
                    ].indexOf(value) > -1
                }
            },
            /**
             * Tooltip will be always active
            */
            always: {
                type: Boolean,
                default: false
            },
            /**
             * Tooltip will have a little fade animation
            */
            animated: {
                type: Boolean,
                default: false
            },
            /**
             * Tooltip will be square (not rounded corners)
            */
            square: {
                type: Boolean,
                default: false
            },
            /**
             * Tooltip slot will have a dashed underline
            */
            dashed: {
                type: Boolean,
                default: false
            },
            /**
             * Tooltip will be multilined
            */
            multilined: {
                type: Boolean,
                default: false
            },
            /**
             * Tooltip multiline size (only works for multilined tooltips)
            */
            size: {
                type: String,
                default: 'is-medium'
            }
        },
        data() {
            return {
                newType: this.type || config.defaultTooltipType,
                newAnimated: this.animated || config.defaultTooltipAnimated
            }
        }
    }
</script>
