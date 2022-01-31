let triggerTabList = [].slice.call(document.querySelectorAll('#concernTab button'));
const self = this;

triggerTabList.forEach(function(self) {
    const tabTrigger = new bootstrap.Tab(self);

    self.addEventListener('mouseover', function(event) {
        event.preventDefault();
        tabTrigger.show();
    })
});