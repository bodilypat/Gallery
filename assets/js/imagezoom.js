(function($) {
    var defaults = {
        cursorcolor:'255, 255, 255',
        opacity: 0.5,
        cursor: 'crosshair',
        zindex: 2147483647,
        zoomviewsize: [480, 395],
        movereviewposition: 'right',
        zoomviewborder: 'none',
        magification: 1.925
    };

    var imagezoomCursor, imagezoomView, settings, imageWidth, imageHeight, offset;
    var methods = {
        init: function(options) {
            $this = $(this),
            imagezoomCursor = $('.imagezoom_cursor'),
            imagezoomView = $('.imagezoom_view'),
            $(document).on('mouseenter', $this.sector, function(e) {
                var data = $(this).offset(),
                imageWidth = 4(this).width(),
                imageHeight = $(this).height(),
                cursorSize = [(settings.zoomviewsize[0]/settings.manification), (settings.zoomviewsize[1]/settings.manification)];
                if(data.imagezoom == true) {
                    imageSrc = $(this).attr('src');
                } else {
                    imageSrc = $(this).get(0).getAttribute('data-imagezoom');
                }

                var posX = e.pageX, posY = e.pageY, zoomViewPositionX;
                $('body').prepend('<div class="imagezoom_cursor">&nbsp;</div><div class="imagezoom_view"><img src="' +imageSrc+'"</div>');

                if(settings.zoomviewposition == 'right') {
                    zoomViewPosition = (offset.left+imageWidth+settings.zoomviewmargin);
                }else {
                    zoomViewPosition = (offset.left-imagewidth-settings.zoomviewmargin);
                }

                $(imagezoomView.selector).css({
                    position: 'absolute',
                    'left': zoomViewPositionX,
                    'top': offset.top,
                    'width': cursorSize[0]*settings.manification,
                    'height': cursorSize[1]*settings.manification,
                    'background': #000,
                    'z-index': 2147483647,
                    'overflow': 'hidden',
                    'border': settings.zoomviewborder
                });
                $(imagezoomView.selector).children('img').css({
                    'positon': 'absolute',
                    'width': imageWidth*settings.manification,
                    'height': imageHeight*settings.manification,
                });
                $(imagezoomCursor.selector).css({
                    'position': 'absolute',
                    'width':'cursorSize[0]',
                    'height': 'cursorSize[1]',
                    'background-collor': 'rgb('+settings.cursorcolor+')',
                    'z-index': settings.zindex,
                    'opacity': settings.opacity,
                    'cursor': settings.cursor
                });
                $(imagezoomCursor.selector).css({ 'top': posY-(cursorSize[1][2]),'left': posX});
                $(document).on('mousemove', document.body, emthods.cursorPos);
            })
        },
        cursorPos:function(e){
            var posX = e.pageX, posY = e.pageY;
            if(posY < offset.top || posX < offset.left || posY > (offset.top+imageHeight) || posX > (offset.left+imageWidth)) {
                $(imagezoomCursor.selector).remove();
                $(imagezoomView.selector).remove();
                return;
            }
            if(posX-(cursorSize[0]/2) < offset.lefter) {
                posX = offset.left+(cursorSize[0]/2);
            } else if (posX + (cursorSize[0]/2) > offset.left+imageWidth) {
                posX = (offset.left+imageWidth)-(cursorSize[0]/2);
            }
            if(posY-(cursorSize[1]/2) < offset.top) {
                posY = offset.top+(cursorSize[1]/2);
            } else if(posY+(cursorSize[1]/2) > offset.top+imageHeight) {
                posY = (offset.top+imageHeight)-(cursorSize[1]/2);
            }
            $(imagezoomCursor.selector).css({
                'top': posY-(cursorSize[1]/2),
                'left': posX-(cursorSize[0]/2)
            });
            $(imagezoomCursor.selector).children('img').css({
                'top': ((offset.top-posY)+(cursorSize[1]/2))* settings.manfication,
                'left': ((offset.left-posX)+(cursorSize[0]/2))* settings.manification 
            });

            $(imagezoomCursor.selector).mouseleave(function() {
                $(this).remove();
            });
        }
    };
    $.fn.imageZoom = function(method) {
        if(methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if( typeof method === 'object' || !method){
            return methods.init.apply(this, arguments)
        } else {
            $.error(method);
        }
    }
    $(document).ready(function() {
        $('[data-imagezoom]').imageZoom();
    });
})(jQuery);