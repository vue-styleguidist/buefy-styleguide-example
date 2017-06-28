
### Install via npm

```bash
npm install buefy
```

### Import and use Buefy. You can also enable individual components

```javascript
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

// OR

Vue.component(Buefy.Checkbox.name, Buefy.Checkbox);
Vue.component(Buefy.Table.name, Buefy.Table);
...
```

### Include Material Design Icons

```html
<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
```

**Note:** If you want to customize the icons or the theme, access the [customization section on the online documentation](https://buefy.github.io/#/documentation/customization).
