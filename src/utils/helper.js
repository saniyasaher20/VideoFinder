export function ConvertToK(n) {
    // return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num)
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return Math.round((n / 1e3).toFixed(1)) + "K";
    if (n >= 1e6 && n < 1e9) return Math.round((n / 1e6).toFixed(1)) + "M";
    if (n >= 1e9 && n < 1e12) return Math.round((n / 1e9).toFixed(1)) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";


}