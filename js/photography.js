(() => {
  const gallery = document.getElementById('photography-gallery');
  if (!gallery) return;
  const pageLink = document.querySelector('.nav-links a[href="photography.html"]');
  fetch('assets/images/photography/photography.json')
    .then(response => { if (!response.ok) throw new Error('Gallery manifest unavailable'); return response.json(); })
    .then(data => {
      const photos = Array.isArray(data.photos) ? data.photos.filter(photo => photo && typeof photo.src === 'string' && photo.src.trim()) : [];
      if (!photos.length) {
        gallery.hidden = true;
        document.body.classList.add('photography-empty');
        if (pageLink) pageLink.hidden = true;
        return;
      }
      photos.forEach((photo, index) => {
        const figure = document.createElement('figure');
        figure.className = 'photography-item reveal';
        const button = document.createElement('button');
        button.className = 'photography-image-button';
        button.type = 'button';
        button.setAttribute('aria-label', `View photo ${index + 1}: ${photo.alt || photo.caption || 'Photography sample'}`);
        const image = document.createElement('img');
        image.src = `assets/images/photography/${photo.src.replace(/^.*[\/]/, '')}`;
        image.alt = photo.alt || photo.caption || 'Photography sample';
        image.loading = 'lazy';
        image.addEventListener('error', () => { figure.remove(); if (!gallery.querySelector('.photography-item')) { gallery.hidden = true; document.body.classList.add('photography-empty'); if (pageLink) pageLink.hidden = true; } });
        button.appendChild(image);
        button.addEventListener('click', () => {
          const dialog = document.getElementById('lightbox');
          if (!dialog) return;
          const largeImage = dialog.querySelector('img');
          const caption = dialog.querySelector('.lightbox-caption');
          largeImage.src = image.src; largeImage.alt = image.alt;
          caption.textContent = photo.caption || '';
          if (typeof dialog.showModal === 'function') dialog.showModal();
        });
        figure.appendChild(button);
        if (photo.caption) { const caption = document.createElement('figcaption'); caption.textContent = photo.caption; figure.appendChild(caption); }
        gallery.appendChild(figure);
      });
      gallery.hidden = !gallery.querySelector('.photography-item');
    })
    .catch(() => { gallery.hidden = true; document.body.classList.add('photography-empty'); if (pageLink) pageLink.hidden = true; });
})();
