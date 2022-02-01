let triggerTabList = [].slice.call(document.querySelectorAll('#concernTab button'));

triggerTabList.forEach(function(triggerEl) {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener('mouseover', function(event) {
        event.preventDefault();
        tabTrigger.show();
    })
});