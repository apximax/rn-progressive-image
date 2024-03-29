import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Animated, View, Image, StyleSheet } from 'react-native'

export default class ProgressiveImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageOpacity: new Animated.Value(0),
      thumbnailOpacity: new Animated.Value(0),
    }
  }

  onLoadThumbnail() {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: this.props.thumbnailFadeDuration,
    }).start()
    this.props.onLoadThumbnail()
  }

  onLoadImage() {
    Animated.timing(this.state.imageOpacity, {
      toValue: 1,
      duration: this.props.imageFadeDuration,
    }).start()
    this.props.onLoadImage()
  }
  
  onLoadThumbnailError(event) {
    this.props.onLoadThumbnailError(event)
  }
  
  onLoadImageError(event) {
    this.props.onLoadImageError(event)
  }

  render() {
    return (
      <View style={this.props.style}>
        <Image
          resizeMode={this.props.resizeMode}
          style={[styles.image, this.props.style]}
          source={this.props.placeHolderSource}
        />
        <Animated.Image
          resizeMode={this.props.resizeMode}
          style={[styles.image, { opacity: this.state.thumbnailOpacity }, this.props.style]}
          source={this.props.thumbnailSource}
          onLoad={() => this.onLoadThumbnail()}
          onError={(event) => this.onLoadThumbnailError(event)}
          blurRadius={this.props.thumbnailBlurRadius}
        />
        <Animated.Image
          resizeMode={this.props.resizeMode}
          style={[styles.image, { opacity: this.state.imageOpacity }, this.props.style]}
          source={this.props.imageSource}
          onLoad={() => this.onLoadImage()}
          onError={(event) => this.onLoadImageError(event)}
        />
      </View>
    )
  }
}

 const styles = StyleSheet.create({
   image: {
     position: 'absolute',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
   },
 })

 ProgressiveImage.propTypes = {
  placeHolderColor: PropTypes.string,
  placeHolderSource: PropTypes.number,
  imageSource: PropTypes.object.isRequired,
  imageFadeDuration: PropTypes.number.isRequired,
  resizeMode: PropTypes.string,
  onLoadThumbnail: PropTypes.func.isRequired,
  onLoadImage: PropTypes.func.isRequired,
  onLoadThumbnailError: PropTypes.func,
  onLoadImageError: PropTypes.func,
  thumbnailSource: PropTypes.object.isRequired,
  thumbnailFadeDuration: PropTypes.number.isRequired,
  thumbnailBlurRadius: PropTypes.number,
}

ProgressiveImage.defaultProps = {
  thumbnailFadeDuration: 250,
  imageFadeDuration: 250,
  thumbnailBlurRadius: 5,
  resizeMode: 'cover',
  onLoadThumbnail: Function.prototype,
  onLoadImage: Function.prototype,
  onLoadThumbnailError: Function.prototype,
  onLoadImageError: Function.prototype,
}
