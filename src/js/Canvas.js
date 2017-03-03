class Canvas {
    constructor(meister) {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = meister.container.offsetWidth;
        this.canvas.height = meister.container.offsetHeight;

        // meister.container.appendChild(this.canvas);
        this.meister = meister;

    }

    takeSnapshot() {
        this.meister.playerPlugin.mediaElement.setAttribute('crossOrigin', 'anonymous');
        let video = this.meister.playerPlugin.mediaElement;

        this.context.drawImage(video, 0,0, this.canvas.width, this.canvas.height);

        let img = new Image();

        img.onload = () => {
            let imgHeight = img.height / 8;
            let imgWidth = img.width / 8;
            let imgx = this.canvas.width - (imgWidth * 3);
            let imgy = this.canvas.height - (imgHeight * 2.5);

            this.context.drawImage(img, imgx, imgy, imgWidth, imgHeight);
        };

        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chromecast_cast_button_icon.svg/1000px-Chromecast_cast_button_icon.svg.png';

        
        return this.canvas;
    }
}

export default Canvas;
