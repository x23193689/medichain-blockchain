$(document).ready(function(){
    $.ajax({
      url:'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum&vs_currencies=EUR',
      headers:{
        'accept':'application/json'
      },
      type:"GET",
      dataType:'json',
    }).done(function(data){
      if(data.bitcoin)
      {
        $('#bitCoinPrice').empty().append('1 Bitcoin = '+ data.bitcoin.eur+' Euros');
      }

      if(data.ethereum)
      {
        $('#ethPrice').empty().append('1 Ethereum = '+ data.ethereum.eur+' Euros');
      }

      if(data.litecoin)
      {
        $('#liteCoinPrice').empty().append('1 Litecoin = '+ data.litecoin.eur+' Euros');
      }
    });

});