const fs = require("fs");
const path = require("path");
const camelToKebab = function(str) {
    return str.replace(/([A-Z])/g, function($1) {
        return "-" + $1.toLowerCase();
    });
};
const { theme, styles } = require("./docs-styleguidist/styles");

module.exports = {
    sections: [
        {
            name: "Buefy",
            content: "./docs-styleguidist/heading.md"
        },
        {
            name: "Installation",
            content: "./docs-styleguidist/installation.md"
        },
        {
            name: "Icon",
            content: "./docs-styleguidist/icon.md",
            components: "./src/components/icon/Icon.vue"
        },
        {
            name: "Dropdown",
            content: "./docs-styleguidist/dropdown.md",
            components: function() {
                return [
                    "./src/components/dropdown/Dropdown.vue",
                    "./src/components/dropdown/DropdownOption.vue"
                ];
            }
        },
        {
            name: "Tooltip",
            components: "./src/components/tooltip/Tooltip.vue"
        },
        {
            name: "Modal",
            components: "./src/components/modal/Modal.vue"
        },
        {
            name: "Tabs",
            components: function() {
                return [
                    "./src/components/tabs/Tabs.vue",
                    "./src/components/tabs/TabItem.vue"
                ];
            }
        },
        {
            name: "Dialog",
            content: "./docs-styleguidist/dialog.md",
            components: "./src/components/dialog/Dialog.vue"
        }
    ],
    editorConfig: {
        theme: "dracula"
    },
    require: [
        "./docs-styleguidist/static/buefy.css",
        "./src/index.styleguide.js"
    ],
    template: {
        head: {
            links: [
                {
                    rel: "stylesheet",
                    href:
                        "//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
                },
                {
                    rel: "stylesheet",
                    href:
                        "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                }
            ]
        }
    },
    propsParser(file, source) {
        const doc = vueDocs.parse(file);
        doc.displayName = camelToKebab(doc.displayName);
        return doc;
    },
    theme,
    styles,
    defaultExample: false
};
