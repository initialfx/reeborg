require("./../visible_world.js");
require("jquery");
require("jquery-ui");

exports.dialog_set_background_image = dialog = $("#dialog-set-background-image").dialog({
    autoOpen: false,
    height: 400,
    width: 500,
    modal: true,
    buttons: {
        OK: function () {
            set_background_image();
        },
        Cancel: function() {
            dialog.dialog("close");
        }
    }
});
dialog.find("form").on("submit",
    function( event ) {
        event.preventDefault();
        set_background_image();
});
set_background_image = function () {
    var url = $("#image-url").val();
    if (!url) {
        url = '';
    }
    RUR.current_world.background_image = url;
    RUR.background_image.src = url;
    RUR.background_image.onload = RUR.vis_world.draw_all;
    dialog.dialog("close");
};
