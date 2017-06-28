const baseConfig = require('./build/webpack.base.conf.js')
const vueDocs = require('vue-docgen-api')
const merge = require('webpack-merge')
const camelToKebab = function (str) {
    return str.replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase() })
}
const { theme, styles } = require('./docs-styleguidist/styles')

module.exports = {
    sections: [{
        name: 'Buefy', content: './docs-styleguidist/heading.md'
    }, {
        name: 'Installation', content: './docs-styleguidist/installation.md'
    }, {
        name: 'Icon', content: './docs-styleguidist/icon.md', components: './src/components/icon/Icon.vue'
    }, {
        name: 'Dropdown', content: './docs-styleguidist/dropdown.md', components: function () {
            return [
                './src/components/dropdown/Dropdown.vue', './src/components/dropdown/DropdownOption.vue'
            ]
        }
    }, {
        name: 'Tooltip', components: './src/components/tooltip/Tooltip.vue'
    }, {
        name: 'Modal', components: './src/components/modal/Modal.vue'
    }, {
        name: 'Tabs', components: function () {
            return [
                './src/components/tabs/Tabs.vue', './src/components/tabs/TabItem.vue'
            ]
        }
    }, {
        name: 'Dialog', content: './docs-styleguidist/dialog.md', components: './src/components/dialog/Dialog.vue'
    }],
    highlightTheme: 'dracula',
    require: [
        './docs-styleguidist/static/buefy.css',
        './src/index.styleguide.js'
    ],
    template: './docs-styleguidist/template.html',
    propsParser(file, source) {
        const doc = vueDocs.parse(file)
        doc.displayName = camelToKebab(doc.displayName)
        return doc
    },
    theme,
    styles,
    defaultExample: false,
    webpackConfig: merge(baseConfig, {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        }
    })
}
