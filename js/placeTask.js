let placeTask = (() => (task) => {
    document.getElementById('randomImage').src = task.image;
})();

export { placeTask };
