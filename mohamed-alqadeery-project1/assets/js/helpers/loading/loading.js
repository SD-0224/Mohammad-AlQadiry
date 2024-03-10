
import { renderLoadingView, hideLoadingView } from "./loading.view.js";
 function startLoading() {
    renderLoadingView();
}


 function finishLoading() {
    hideLoadingView();
}


export {
    startLoading,
    finishLoading
}

