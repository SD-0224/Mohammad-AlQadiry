 
 
 
 function renderLoadingView() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loadingIndicator';
    loadingDiv.classList.add('d-flex', 'justify-content-center', 'align-items-start');
    loadingDiv.style.height = '100vh'; 

    loadingDiv.innerHTML = `
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

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.appendChild(loadingDiv);
        } 
}


 function hideLoadingView() {
    const loadingDiv = document.getElementById('loadingIndicator');
    if (loadingDiv) {
        loadingDiv.remove(); 
    }
}

export {
    renderLoadingView,
    hideLoadingView
}