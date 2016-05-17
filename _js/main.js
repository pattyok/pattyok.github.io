$(document).ready(function(){
console.log("loaded");
  $('#projectModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var contentID = '#modal-' + button.data('content') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-content').hide();
    $(contentID).show();
  });

  $('#projectModal').on('hidden.bs.modal', function (e) {
    console.log(e);
    $('.project button').blur();
})

});