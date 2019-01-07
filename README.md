# React Native Progressive Image
React Native lazy and animated image loading.

# Installation

``` npm i rn-progressive-image ```

# Demo

# Implementation

```
    <ProgressiveImage
        thumbnailSource={{ uri: "Thumbnail image source link." }}
        imageSource={{ uri:"Orginal image source link.}}
        style={{ flex: 1, alignItems: 'stretch' }}
    />

```

# Props Details

| Prop | Description | Default |
|---|---|---|
| **`imageSource`** | Image source (e.g. { uri: 'https://facebook.github.io/react/img/logo_og.png' }). | None |
| **`thumbnailSource`** | Should be a low resolution version of the image used in `imageSource`. | None |
| **`thumbnailBlurRadius`** | Blur radius for the low resolution thumbnail (iOS only). | `5` |
| **`style`** | Make sure to include width and height, or use flex. | None |
| **`imageFadeDuration`** | Fade-in duration for the image in ms. | `250` |
| **`thumbnailFadeDuration`** | Fade-in duration for the thumbnail in ms. | `250` |
| **`onLoadThumbnail`** | Callback function that gets called when the thumbnail is loaded. | `noop` |
| **`onLoadImage`** | Callback function that gets called when the main image is loaded. | `noop` |

# TODO

* Need a snap demo.
* Example file to be update.
* 
