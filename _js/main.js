$(document).ready(function(){
console.log("loaded");
  $('#projectModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var contentID = '#modal-' + button.data('content') // Extract info from data-* attributes
    var modal = $(this);
    button.parents('li.project').addClass('hover');
    modal.find('.modal-content').hide();
    $(contentID).show();
  });

  $('#projectModal').on('hidden.bs.modal', function (e) {
    console.log(e);
    $('li.project').removeClass('hover');
    $('li.project button').blur();
})

});