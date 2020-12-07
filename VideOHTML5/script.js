let youtube = $('.youtube');
for (let i = 0; i < youtube.length; i++) {
  let myid = $(youtube[i]).attr('data-video');
  let myurl = 'https://img.youtube.com/vi/' + myid + '/sddefault.jpg';
  $(youtube[i]).append('<img src=' + myurl + '>');
  $(youtube[i]).on('click', function () {
    $(youtube[i]).empty();
    $(youtube[i]).append(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        myid +
        '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
}
