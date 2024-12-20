This bug occurs when using the Expo `Camera` API with custom camera controls.  The issue is that even if the camera is stopped, the preview continues to render, consuming resources and potentially leading to unexpected behavior or crashes. This is often exacerbated when switching between cameras or when the component unmounts.