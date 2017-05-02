<template>
    <div class="container-fluid">
        <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top"
          role="button" title="Back to Top" data-toggle="tooltip" data-placement="top">
          <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
    </div>
</template>

<script>
    $(document).ready(function(){
         $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 100);
                return false;
            });
            $('#back-to-top').tooltip('show');
    });
</script>

<style scoped>
    .back-to-top {
        cursor: pointer;
        position: fixed;
        bottom: 0;
        right: 20px;
        display:none;
        margin-bottom: 10px;
    }

    @media (min-width: 992px) {
        .back-to-top {
            opacity: 0.2;
        }

        .back-to-top:hover {
            opacity: 1;
        }
    }
</style>
