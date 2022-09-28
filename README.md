# react-native-perspective-correction-image-view

An image view component that corrects the distorted image with its corner points.

<img width="386" alt="image" src="https://user-images.githubusercontent.com/8325407/172284565-21f54a4c-c3e8-4073-9d80-e3e778eb292f.png">

## Installation

```sh
yarn add react-native-perspective-correction-image-view
```
or
```sh
npm install react-native-perspective-correction-image-view
```

## Usage

Please take a look at the example app.

```typescript
<PerspectiveCorrectionImage
   source={require('./sample.png')}
   sourceCorners={[114, 80, 324, 46, 77, 203, 306, 252]}
   sourceWidth={400}
   sourceHeight={300}
   width={200}
   height={150}
   backgroundColor='black'
   ref={perspectiveCorrectionImageRef}
/>
```

## Parameters
The source corners are X,Y points from top left going clockwise.
![param_order](https://user-images.githubusercontent.com/997157/192820498-18d891da-4e2a-4393-873b-d885eeef0df9.jpg)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
