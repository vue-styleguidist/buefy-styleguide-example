Icons take an important role of any application.
___
Buefy is compatible with both [Material Design Icons](https://material.io/icons/) and [FontAwesome](http://fontawesome.io/). They adapt to most elements background automatically — but you can also override their colors.

Simple dark icon
```jsx
<div class="block">
    <b-icon
        icon="home"
        size="is-small">
    </b-icon>
    <b-icon
        icon="view-dashboard"
        size="is-small">
    </b-icon>
</div>

<div class="block">
    <b-icon icon="home"></b-icon>
    <b-icon icon="view-dashboard"></b-icon>
</div>

<div class="block">
    <b-icon
        icon="home"
        size="is-medium">
    </b-icon>
    <b-icon
        icon="view-dashboard"
        size="is-medium">
    </b-icon>
</div>

<div class="block">
    <b-icon
        icon="home"
        size="is-large"
        type="is-info">
    </b-icon>
    <b-icon
        icon="view-dashboard"
        size="is-large"
        type="is-primary">
    </b-icon>
</div>

<button class="button is-dark">
    <b-icon icon="check"></b-icon>
    <span>Finish</span>
</button>

<button class="button is-warning">
    <b-icon icon="check"></b-icon>
    <span>Finish</span>
</button>
```