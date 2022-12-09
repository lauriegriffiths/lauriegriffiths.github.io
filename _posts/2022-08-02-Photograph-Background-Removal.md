---
published: false
layout: splash
tags: 
- command line
---

# Removing the Background From Photographs

When taking pictures of things you've made for a blog, it's nice to remove the background to make it easier to focus on the item in question.  It's also great for product photos.

## Taking the Photos

White background. Light from above.  Low ISO. Tripod. Timer to stop shake. Small apeture (sharper).

![Raw unedited photo from the camera](/images/RemoveBackgroundPhotos/RawPhoto.jpg)

This picture is pretty useable, but we can improve it with a few commands.

## Removing the background

There are multiple ways to remove the background, but I've been using the `rembg` tool from [this repository](https://github.com/danielgatis/rembg).  It does a good job of isolating objects from a variety of backgrounds, and with a well lit white background you should get excellent results.

I use the command `cat RawPhoto.jpg | rembg i  -a -ae 20 > TransparentBackground.png` to make the background transparent. The `-ae 20` is an alpha matt setting that often improves images on white backgrounds.  

![Photo with background removed](/images/RemoveBackgroundPhotos/TransparentBackgroundSmall.png)

In some situations you might use this file, but as it's a PNG file the file size might end up being too large, especially if you want to use a high resolution photo.

## Cropping Automatically 

There's quite a lot of white space around the subject. Since the background is transparent we can use `convert Uncropped.png -trim +repage Cropped.png`. This is an optional step and if you're happy with the framing of your photograph you don't need to do it.

![Trimmed image](/images/RemoveBackgroundPhotos/TrimmedSmall.png)

## Converting to JPEG

To save space, we can convert the PNG file to a JPEG. Unfortunately, this will sometimes give us an unexpected result.

![Photo with black background](/images/RemoveBackgroundPhotos/TransparentBackgroundNaiveJpg.jpg)

Instead, we want to use the following command to ensure that the transparent background turns white.

```bash
convert TransparentBackground.png -background white -alpha remove -alpha off WhiteBackground.jpg
```

![Photo with white background](/images/RemoveBackgroundPhotos/WhiteBackgroundUntrimmed.jpg)

## Minimising the File Size

Since we are probably putting these images on a website or a blog, the size matters. Even after trimming, my sample image for this article is 419KB. If you put a lot of these on one page your site might load very slowly.

First, we need to lower the resolution of our image with `convert big.jpg -resize 25% small.jpg`. How much you resize by will depend on how your using your image and the starting resolution. Experiment with different numbers.  

Then, we can use this slightly lengthy command to reduce the file size even more.

```convert input.jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB output.jpg```

For the example image in this article the file size is now 41KB. Now your file has a clean white background and is ready for publishing on the web. 

![Final image ready for publishing](/images/RemoveBackgroundPhotos/TrimmedWhiteBackgroundSmall.jpg)

