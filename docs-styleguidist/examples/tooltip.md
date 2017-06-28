Display a brief helper text to your user
```
<section>
    <b-tooltip label="Tooltip right" position="is-right">
        <button class="button is-dark">Right</button>
    </b-tooltip>

    <b-tooltip label="Tooltip top">
        <button class="button is-dark">Top (default)</button>
    </b-tooltip>

    <b-tooltip label="Tooltip bottom" position="is-bottom">
        <button class="button is-dark">Bottom</button>
    </b-tooltip>

    <b-tooltip label="Tooltip left" position="is-left">
        <button class="button is-dark">Left</button>
    </b-tooltip>
</section>
```

### Styles
```
<section>
    <b-tooltip label="Text is dashed" dashed>
        Simple text
    </b-tooltip>

    <b-tooltip label="Maybe you like a little animation" position="is-bottom" animated>
        <button class="button">Animated</button>
    </b-tooltip>

    <b-tooltip label="You prefer dark?" type="is-dark" position="is-bottom">
        <button class="button">Dark</button>
    </b-tooltip>

    <b-tooltip label="Or light?" type="is-light" position="is-bottom">
        <button class="button">Light</button>
    </b-tooltip>

    <b-tooltip label="I'm never closing" always>
        <button class="button">Always</button>
    </b-tooltip>

    <b-tooltip label="I'm square" position="is-bottom" square>
        <button class="button">Square</button>
    </b-tooltip>
</section>
```

### Multilined
```
<section>
    <b-tooltip
        label="Tooltip multilined, probably because it's too long for a casual tooltip"
        multilined>
        <button class="button is-dark">Multiline (default)</button>
    </b-tooltip>

    <b-tooltip
        label="It's not briefy, but also not long enough"
        multilined
        size="is-small">
        <button class="button is-dark">Multiline (small)</button>
    </b-tooltip>

    <b-tooltip
        label="Tooltip large multilined, because it's really long to be on a medium size. Did I tell you it's really long? Yes, it is — I asure you!"
        position="is-bottom"
        multilined
        size="is-large">
        <button class="button is-dark">Multiline (large)</button>
    </b-tooltip>
</section>
```

