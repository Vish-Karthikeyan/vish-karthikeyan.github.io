// Site behaviour: open external links in a new tab; Updates carousel buttons.
(function () {
  // External links open in a new tab.
  document.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var external = /^https?:\/\//.test(href) && a.hostname !== window.location.hostname;
    if (external) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Updates carousel: "Newer" / "Older" scroll by one post.
  var track = document.getElementById('upd-track');
  if (!track) return;
  var prev = document.querySelector('[data-upd="prev"]');
  var next = document.querySelector('[data-upd="next"]');
  function step() {
    var item = track.firstElementChild;
    return item ? item.getBoundingClientRect().width + 16 : 300;
  }
  function update() {
    prev.disabled = track.scrollLeft < 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  prev.addEventListener('click', function () { track.scrollBy({ left: -step() }); });
  next.addEventListener('click', function () { track.scrollBy({ left: step() }); });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
