 
 
 
 function renderLoadingView() {
  const loadingOverlay = document.createElement('div');
  loadingOverlay.id = 'loadingOverlay';
  loadingOverlay.style.position = 'fixed'; 
  loadingOverlay.style.top = '0';
  loadingOverlay.style.left = '0';
  loadingOverlay.style.width = '100%';
  loadingOverlay.style.height = '100vh';
  loadingOverlay.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; 
  loadingOverlay.style.display = 'flex';
  loadingOverlay.style.justifyContent = 'center';
  loadingOverlay.style.alignItems = 'center';
  loadingOverlay.style.zIndex = '9999'; 

  loadingOverlay.innerHTML = `
      <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
  `;

  document.body.appendChild(loadingOverlay); // Append to body to cover the whole page
}

function hideLoadingView() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
      loadingOverlay.remove();
  }
}

export {
    renderLoadingView,
    hideLoadingView
}