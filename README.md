# gorilla-cast
A sample Podcast application made with Vue.js.

## Requirements

|  app/pkg  |  version  |
|:---------:|:---------:|
|   Node    |  v12.16.0 |
|   NPM     |  v6.13.4  |

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## API Usage
To acquire podcasts from a topic you can use:
```javascript

  /**
   * Create a currified function to add or remove a podcast from favorites.
   * @param {any} item from itunes API
   * @returns {Function} callable to be used by someone else
   */
  function toggleFavorite(item) {
    return (event) => {
      const exists = api.getFavorites().includes(item.trackId) ? 1 : 0;
      if (!exists) {
        api.addFavorite(item.trackId);
      } else {
        api.removeFavorite(item.trackId);
      }
      event.target.style.filter = `grayscale(${exists})`;
    }
  }

  /**
   *
   * @param {any} item from itunes API
   */
  function createImage(item) {
    const img = document.createElement('img');
    img.src = item.artworkUrl100;
    img.style.transition = 'all 0.3s ease';
    img.style.filter = 'grayscale(1)';
    img.onclick = toggleFavorite(item);
    return img;
  }

  /**
   *
   * @param {HTMLDivElement} container element to contain images.
   * @param {*} item from itunes API
   */
  function insertIntoContainer(container, item) {
    container.appendChild(item);
    return container;
  }


  api.search('Software development')
    .then((items) => {
      const container = document.createElement('div');
      const images = items
        .map(createImage)
        .reduce(insertIntoContainer, container);

      document.body.appendChild(images);
    });

```
