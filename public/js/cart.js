$(document).ready(function(){

    if (getCookie("cart"))
    {
        var cart = JSON.parse(getCookie("cart"));
        var length = cart.length;
        if(length == 0)
        {
            $('#cartProducts').hide();
            $('.emptyCart').show();
        }else{
            var totalPrice = (length * 0.0001).toFixed(4);
            $('.totalPrice').empty().append(totalPrice);
            $('.totalPriceButton').attr('data-price', totalPrice);
            $('.emptyCart').hide();
        }
    }else{
        $('#cartProducts').hide();
        $('.emptyCart').show();
    }
    
    function getCookie(name){
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i=0; i<ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) == ' '){
                c = c.substring(1);
            }
            if(c.indexOf(cname) == 0){
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
    

    function addToCart(productId) {
        let cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];

        if (!cart.includes(productId)) {
            cart.push(productId);
            saveCartToCookie(JSON.stringify(cart));
        }
        return;
    }

    function removeFromCart(productId) {
        let cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];

        var index = cart.indexOf(productId);
        if (index > -1) {
            cart.splice(index, 1);
        }

        saveCartToCookie(JSON.stringify(cart));
        return;
    }

    function saveCartToCookie(cart) {
        document.cookie = "cart=" + cart;
    }

    document.querySelectorAll('.addToCart').forEach(item => {
        let productId = item.getAttribute('data-product-id');
        let cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];

        if (cart.includes(productId)) {
            item.innerHTML = "Remove from Cart";
            $(item).addClass('removeFromCart');
            $(item).removeClass('addToCart');
        } 
    });

    document.querySelectorAll('.productlist').forEach(item => {
        let productId = item.getAttribute('data-product-id');
        let cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];

        if (!cart.includes(productId)) {
            $('#'+productId).hide();
        } 
        
    });

    $(document).on('click', '.addToCart',  function(e){
        e.preventDefault();
        var productId = $(this).attr('data-product-id');
        addToCart(productId);
        $(this).html("Remove from Cart");
        $(this).addClass('removeFromCart');
        $(this).removeClass("addToCart");
    });

    $(document).on('click', '.removeFromCart',  function(e){
        e.preventDefault();
        var productId = $(this).attr('data-product-id');
        removeFromCart(productId);
        $(this).html("Add to Cart");
        $(this).addClass('addToCart');
        $(this).removeClass("removeFromCart");
    });

    $('.productlist').click(function(e){
        var productId = $(this).attr('data-product-id');
        removeFromCart(productId);
        location.reload();

    });

    $('#contactForm').submit(function(e){
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        location.reload();
    });
});