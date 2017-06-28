Dropdowns are very versatile, you can use as a quick menu or even like a select. It's toggled by clicking, and looks like a modal when you're on tablet or smartphone
```
<section>
    <b-dropdown>
        <button class="button" slot="trigger">
            <span>Dropdown</span>
            <b-icon icon="arrow_drop_down"></b-icon>
        </button>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>

    <b-dropdown disabled>
        <button class="button" slot="trigger">
            <span>Dropdown</span>
            <b-icon icon="arrow_drop_down"></b-icon>
        </button>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>
</section>
```
Use anything you want to trigger
```
<section>
    <b-dropdown>
        <figure slot="trigger">
            <img src="https://buefy.github.io/static/img/buefy.027baee.png" width="94" />
        </figure>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>

    <b-dropdown>
        <button class="button" slot="trigger">
            <b-icon icon="more_vert"></b-icon>
        </button>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>

    <b-dropdown>
        <h1 class="title" slot="trigger">
            Click me!
        </h1>

        <b-dropdown-option>Action</b-dropdown-option>
        <b-dropdown-option>Another action</b-dropdown-option>
        <b-dropdown-option>Something else</b-dropdown-option>
    </b-dropdown>
</section>
```
Within a nav
```
new Vue({
    data() {
        return {
            navigation: 'home'
        }
    },
    template: `
        <nav class="nav is-primary">
            <div class="nav-left">
                <a class="nav-item">
                    <img src="https://buefy.github.io/static/img/buefy.027baee.png" alt="Buefy" />
                </a>
            </div>

            <div class="nav-center">
                <a class="nav-item"><b-icon pack="fa" icon="github"></b-icon></a>
                <a class="nav-item"><b-icon pack="fa" icon="twitter"></b-icon></a>
            </div>

            <div class="nav-right" style="overflow: visible">
                <b-dropdown v-model="navigation" position="is-bottom-left">
                    <a class="nav-item" slot="trigger">
                        <span>Menu</span>
                        <b-icon icon="arrow_drop_down"></b-icon>
                    </a>

                    <b-dropdown-option subheader>
                        Logged as <b>Rafael Beraldo</b>
                    </b-dropdown-option>
                    <b-dropdown-option separator />
                    <b-dropdown-option value="home">
                        <b-icon icon="home"></b-icon>
                        Home
                    </b-dropdown-option>
                    <b-dropdown-option value="products">
                        <b-icon icon="shopping_cart"></b-icon>
                        Products
                    </b-dropdown-option>
                    <b-dropdown-option value="blog" disabled>
                        <b-icon icon="art_track"></b-icon>
                        Blog
                    </b-dropdown-option>
                    <b-dropdown-option separator />
                    <b-dropdown-option value="settings">
                        <b-icon icon="settings"></b-icon>
                        Settings
                    </b-dropdown-option>
                    <b-dropdown-option value="logout">
                        <b-icon icon="exit_to_app"></b-icon>
                        Logout
                    </b-dropdown-option>
                </b-dropdown>
            </div>
        </nav>
    `
})
```
With addons
```
<section>
    <b-field>
        <p class="control">
            <button class="button">
                Button
            </button>
        </p>
        <b-dropdown>
            <button class="button" slot="trigger">
                <b-icon icon="arrow_drop_down"></b-icon>
            </button>

            <b-dropdown-option>Action</b-dropdown-option>
            <b-dropdown-option>Another action</b-dropdown-option>
            <b-dropdown-option>Something else</b-dropdown-option>
        </b-dropdown>
    </b-field>

    <b-field>
        <p class="control">
            <button class="button is-primary">
                Button
            </button>
        </p>
        <b-dropdown>
            <button class="button is-primary" slot="trigger">
                <b-icon icon="arrow_drop_down"></b-icon>
            </button>

            <b-dropdown-option>Action</b-dropdown-option>
            <b-dropdown-option>Another action</b-dropdown-option>
            <b-dropdown-option>Something else</b-dropdown-option>
        </b-dropdown>
    </b-field>

    <b-field>
        <b-dropdown>
            <button class="button" slot="trigger">
                <span>Filters</span>
                <b-icon icon="arrow_drop_down"></b-icon>
            </button>

            <b-dropdown-option value="open_issues">Open Issues and Pull Requests</b-dropdown-option>
            <b-dropdown-option value="your_issues">Your Issues</b-dropdown-option>
            <b-dropdown-option value="pull_requests">Your Pull Requests</b-dropdown-option>
            <b-dropdown-option value="everything">Everything</b-dropdown-option>
        </b-dropdown>
        <b-input icon="search" type="search" placeholder="Search..."></b-input>
    </b-field>
</section>
```
Customizing with v-model
```
    new Vue({
        data() {
            return {
                isPublic: true
            }
        },
        template: `
            <b-dropdown v-model="isPublic">
                <button class="button is-primary" type="button" slot="trigger">
                    <template v-if="isPublic">
                        <b-icon icon="public"></b-icon>
                        <span>Public</span>
                    </template>
                    <template v-else>
                        <b-icon icon="people"></b-icon>
                        <span>Friends</span>
                    </template>
                    <b-icon icon="arrow_drop_down"></b-icon>
                </button>

                <b-dropdown-option :value="true">
                    <div class="media">
                        <b-icon class="media-left" icon="public"></b-icon>
                        <div class="media-content">
                            <h3>Public</h3>
                            <small>Everyone can see</small>
                        </div>
                    </div>
                </b-dropdown-option>

                <b-dropdown-option :value="false">
                    <div class="media">
                        <b-icon class="media-left" icon="people"></b-icon>
                        <div class="media-content">
                            <h3>Friends</h3>
                            <small>Only friends can see</small>
                        </div>
                    </div>
                </b-dropdown-option>
            </b-dropdown>
        `
    })
```
