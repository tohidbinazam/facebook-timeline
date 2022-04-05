class Alert {
  alert(type, msg) {
    return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
  }
}

export default Alert;
