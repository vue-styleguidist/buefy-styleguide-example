## Alert
```
new Vue({
    methods: {
        alert() {
            this.$dialog.alert('Everything looks fine!')
        },
        alertCustom() {
            this.$dialog.alert({
                title: 'Title Alert',
                message: 'I have a title, a custom button and <b>HTML</b>!',
                confirmText: 'Cool!'
            })
        }
    },
    template: `
        <section>
            <button class="button is-primary is-medium" @click="alert()">Alert (default)</button>
            <button class="button is-primary is-medium" @click="alertCustom()">Alert (custom)</button>
        </section>
    `
})
```
## Confirm

```
new Vue({
    methods: {
        confirm() {
            this.$dialog.confirm({
                message: 'Continue on this task?',
                onConfirm: () => {
                    this.$toast.open('User confirmed')
                }
            })
        },
        confirmCustom() {
            this.$dialog.confirm({
                title: 'Privacy Politics',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]',
                cancelText: 'Disagree',
                confirmText: 'Agree',
                type: 'is-success',
                onConfirm: () => {
                    this.$toast.open('User agreed')
                }
            })
        },
        confirmCustomDelete() {
            this.$dialog.confirm({
                title: 'Deleting account',
                message: 'Are you sure you want to <strong>delete</strong> your account? This action cannot be undone.',
                confirmText: 'Delete Account',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => {
                    this.$toast.open('Account deleted!')
                }
            })
        }
    },
    template: `
        <section>
            <button class="button is-medium is-info" @click="confirm">
                Confirm (default)
            </button>

            <button class="button is-medium is-info" @click="confirmCustom">
                Confirm (custom)
            </button>

            <button class="button is-medium is-danger" @click="confirmCustomDelete">
                Confirm (custom)
            </button>
        </section>
    `
})
```
## Prompt

```
new Vue({
    methods: {
        prompt() {
            this.$dialog.prompt({
                message: `What's your name?`,
                maxlength: 20,
                placeholder: 'e.g. John Doe',
                onConfirm: (value) => {
                    this.$toast.open('Your name is: ' + value)
                }
            })
        }
    },
    template: `
        <button class="button is-medium is-dark" @click="prompt">
            Prompt
        </button>
    `
})
```
