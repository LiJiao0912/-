$(function(){
  getCartData(function(){
    console.log(window.Cartdata)
    $('#cartList').html(template('cartItems',{list:window.Cartdata}))
  })
  


})


var getCartData = function(callback){
  lt.ajax({
    url: '/cart/queryCart',
    success: function(data){
      window.Cartdata = data
      callback && callback(data)
    }
  })
}

