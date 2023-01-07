
const get_url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

async function getapi(url){

const resoponce =  await fetch(url);
const data = await resoponce.json();
console.log(data);
showdata(data);

}
getapi(get_url);
let tb =document.getElementById("t1");

function  showdata(data){

    let tab =' <tr><th>Name</th><th>Symbol</th><th>Current_price</th><th>total_volume</th><th>change_percentage</th><th>market_cap</th></tr>';


for(let r of data){

    tab +='<tr><td><img src='+ r.image +'>'+ r.name +'</td>'+
    '<td>'+r.symbol.toUpperCase()+'</td><td>'+ '$'+r.current_price+'</td><td>'+ '$'+r.total_volume+'</td>';
    
    
    let perenctage = r.price_change_percentage_24h;
    if(perenctage<0){
        tab +='<td style="color :red">'+perenctage+'%'+'</td>';
    }else{
        tab +='<td style="color :green">'+perenctage+'%'+'</td>';
    }
    tab+='<td>'+'Mkt Cap: '+'$'+r.market_cap+'</td></tr>'
    
    
}



    tb.innerHTML=tab;

};
