let triggerTabList = [].slice.call(document.querySelectorAll('#concernTab button'));

triggerTabList.forEach(function(triggerTab) {
    const tabTrigger = new bootstrap.Tab(triggerTab);

    triggerTab.addEventListener('mouseover', function(event) {
        event.preventDefault();
        tabTrigger.show();
    })
});