# Expo Camera Preview Persistence Bug

This repository demonstrates a bug in Expo's Camera API where the camera preview continues to render even after calling `stopCameraAsync`. This can lead to resource leaks and potential crashes, especially when switching between cameras or unmounting the component.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or EAS Build.
4. Observe the camera preview behavior when switching between cameras or navigating away from the screen.

## Solution

A solution is provided in `bugSolution.js` which correctly cleans up the camera resources when the component unmounts or the camera stops.