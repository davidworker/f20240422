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