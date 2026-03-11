const assets = [
    { src: 'assets/images/IMG_20241030_083831407_HDR.jpg', type: 'img' },
    { src: 'assets/images/IMG_20241121_174225060.jpg', type: 'img' },
    { src: 'assets/images/IMG_20241121_174308471.jpg', type: 'img' },
    { src: 'assets/images/IMG_20241128_092301155.jpg', type: 'img' },
    { src: 'assets/images/IMG_20241128_093748028.jpg', type: 'img' },
    { src: 'assets/videos/VID_20241126_110445876.mp4', type: 'video' },
    { src: 'assets/images/IMG_20241129_105552332.jpg', type: 'img' },
    { src: 'assets/images/IMG_20250530_084001207.jpg', type: 'img' },
    { src: 'assets/images/IMG_20250530_090413319.jpg', type: 'img' },
    { src: 'assets/images/IMG_20250724_103731782.jpg', type: 'img' },
    { src: 'assets/videos/VID_20251127_151313895.mp4', type: 'video' },
    { src: 'assets/images/IMG_20251126_082244178.jpg', type: 'img' },
    { src: 'assets/images/IMG_20251127_084723954.jpg', type: 'img' },
    { src: 'assets/images/IMG_20251127_084726943.jpg', type: 'img' }
];

let currentIndex = 0;
const grid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxMediaContainer = document.getElementById('lightboxMedia');
const closeBtn = document.querySelector('.close-lightbox');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showMedia(index) {
    currentIndex = index;
    const asset = assets[currentIndex];
    lightboxMediaContainer.innerHTML = '';

    if (asset.type === 'img') {
        const img = document.createElement('img');
        img.src = asset.src;
        lightboxMediaContainer.appendChild(img);
    } else {
        const video = document.createElement('video');
        video.src = asset.src;
        video.controls = true;
        video.autoplay = true;
        lightboxMediaContainer.appendChild(video);
    }
}

assets.forEach((asset, index) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    if(asset.type === 'img') {
        div.innerHTML = `<img src="${asset.src}" loading="lazy"><div class="gallery-overlay"><span>Expandir Visual</span></div>`;
        div.onclick = () => { 
            showMedia(index);
            lightbox.classList.add('active'); 
        };
    } else {
        div.innerHTML = `<video src="${asset.src}" muted loop></video><div class="gallery-overlay"><span>Reproducir Demo</span></div>`;
        const video = div.querySelector('video');
        div.onmouseenter = () => video.play();
        div.onmouseleave = () => {
            video.pause();
            video.currentTime = 0;
        };
        div.onclick = () => {
            showMedia(index);
            lightbox.classList.add('active');
        };
    }
    grid.appendChild(div);
});

prevBtn.onclick = (e) => {
    e.stopPropagation();
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = assets.length - 1;
    showMedia(newIndex);
};

nextBtn.onclick = (e) => {
    e.stopPropagation();
    let newIndex = currentIndex + 1;
    if (newIndex >= assets.length) newIndex = 0;
    showMedia(newIndex);
};

closeBtn.onclick = () => {
    lightbox.classList.remove('active');
    lightboxMediaContainer.innerHTML = '';
};

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxMediaContainer.innerHTML = '';
    }
};

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'Escape') closeBtn.click();
});