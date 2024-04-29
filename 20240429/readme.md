# 20240429

## video tag

[範例影片下載](https://samplelib.com/sample-mp4.html)

下載 `3Mb` 影片檔案，放置到 `assets/video` 資料夾內。

`video_tag.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .video-player {
        width: 500px;
        margin: 20px auto;
    }

    .video-player video {
        max-width: 100%;
    }
</style>

<div class="video-player">
    <video controls loop autoplay muted>
        <source src="./assets/video/sample.mp4" type="video/mp4">
    </video>
</div>
```

### 屬性

- controls

顯示控制項目。

- muted

靜音。

- loop

循環播放。

- autoplay

自動播放，因為瀏覽器限制需搭配`muted`才會自動播放。

## 背景影片撥放

`background_video.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .wrap {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .video-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slogan {
        position: relative;
        z-index: 3;
        color: #fff;
        font-size: 50px;
        font-weight: 600;
    }

    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: #0000003f;
    }
</style>

<div class="wrap">
    <h1 class="slogan">Hello World!</h1>
    <video autoplay loop muted class="video-bg">
        <source src="./assets/video/sample.mp4" type="video/mp4">
    </video>
    <div class="mask"></div>
</div>
```