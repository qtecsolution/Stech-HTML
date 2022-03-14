 window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('#selection', {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY", "elOutY"],
          [-140, 'screenHeight/4.25', 'screenHeight/1.18'],
        ]
      }
    })
}