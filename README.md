# Generator code

## Introduction

This repository includes code of our generators. You can simply extract bytes from image and run this code locally on your machine to get the same result as we provide.

## Setup project

`git clone git@github.com:Bulbify/gen-functions.git`

`cd ./gen-functions`

`yarn`

## Run an example

`Save your image at ./sample-image.png`

`node ./examples/run-gen-int-arr.example.js`

```
Generator type: int_arr
Image: C:\Users\bulbify\Desktop\gen-functions\sample-image.png
Output: [
  52, 19, 24, 26, 26,
  80, 35,  4, 79, 42
]
Formatted output: [
   4, 19, 24, 26, 26,
  35, 42, 52, 79, 80
]
```
