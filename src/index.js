// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object cont{{aining the minimum number of coins needed to make change
    var ch = {};
    var H,Q,D,N,P;
    //var cash = currency;
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange",};}
    else if (currency <= 0){
        return {};}
    
    H = Math.trunc(currency/50);
    currency = currency - (H*50)

    Q = Math.trunc(currency/25);
    currency = currency - (Q*25)

    D = Math.trunc(currency/10);
    currency = currency - (D*10)

    N = Math.trunc(currency/5);
    currency = currency - (N*5)

    P = Math.trunc(currency/1);
    currency = currency - (P*1)

    if (H !=0) {ch.H = H;}
    if (Q !=0) {ch.Q = Q;}
    if (D !=0) {ch.D = D;}
    if (N !=0) {ch.N = N;}
    if (P !=0) {ch.P = P;}
        
    return ch;


}
