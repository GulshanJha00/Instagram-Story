var arr = [
    {dp:"https://imgs.search.brave.com/ISXUEg17VDFWxlpa4BPqmw6-FEz_thdX_05Nt8MK5RA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nb3JnZW91cy1m/ZW1hbGUtYnJ1bmV0/dGUtbW9kZWwtd2hp/dGUtY2xvdGhlc18x/NDkxNTUtMjEzMC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",story:"https://imgs.search.brave.com/Qofz8-D6KrfdtO82HJQqHp1N7rAawNt7NjAeeJ9ZDHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NzI3NzI0L3Bob3Rv/L3N1bnNldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Mloy/TVFQWnZYT3FXb3NW/MTRfaVA0NTREbW1j/QVVhT19MRHRoMHBQ/cUt4VT0"},
{dp:"https://imgs.search.brave.com/dAsFgueRM7GkDxoS-yusEscNsVu5iEw-72FrBqylSV4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/b21hbi13aXRoLWJl/YXV0eS1sb25nLWJy/b3duLWhhaXItZmFz/aGlvbi1tb2RlbC13/aXRoLWxvbmctc3Ry/YWlnaHQtaGFpci1m/YXNoaW9uLW1vZGVs/LXBvc2luZ18xODYy/MDItODQ2MC5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw",story:"https://imgs.search.brave.com/IwaBCJ8US6yLTMdPFXygnRzFC1b0SepiX0i__PvKybc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QwL2Q2/L2U4L2QwZDZlODBh/MmQ5Njc4MzU1YTAx/YTYwYTNlNzFlZGE2/LmpwZw"},
{dp:"https://imgs.search.brave.com/aV7kb3EwmASUR8FflRij_OewcVUQ_VqkH25Ltr0eUbE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1oYW5k/c29tZS1zbWlsaW5n/LXN0eWxpc2gteW91/bmctbWFuLW1vZGVs/LWRyZXNzZWQtamVh/bnMtY2xvdGhlcy1m/YXNoaW9uLW1hbl8x/NTg1MzgtNTAzMC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw", story:"https://imgs.search.brave.com/L1tje7F4_m4-RN_g0F9jeVskEdwljFvNAbVExbcLmtA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9taW5l/Y3JhZnQubm92YXNr/aW4ubWUvaW1hZ2Vz/L21vYi9mYWNlL0h1/bWFuRmFjZS5wbmc"},
{dp:"https://imgs.search.brave.com/JjYHlYSjye8_dEGl9dEFZ0N1QqE7AC3GuXPp_yHHpF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC1jYWNoZS5zcHlz/Y2FwZS5jb20vNWMw/ZTk4ODk4OTg3OTZl/ZjMwZTlkNzU2LzYy/MjMzZjg5MjE4MGRh/YWViMjAxMjNiYl9E/ZmpsakZLRU5qcS1q/UzhpbmxqY3ZoVDlh/eTNIZGpNS1ZKVGxw/d2tXQ2dFbUZKSk12/UFBGcXlJSFFhS0c0/cURKcVBFX3J0VDdX/Z0pkc2lEWVhUVy1X/UFFvTnp2WGRDd1hz/emhMbmxlNDFLTm1M/eW5rcDM5eHY1MzJh/Q09wX0hVZ3NfVVB2/T2hkLmpwZWc", story:"https://imgs.search.brave.com/kQqdU8gSjgkT3TDIqXFrpjllPiu56VzZmWP9PMRzva0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYy/NDQ1NzU0L3Bob3Rv/L2luLWZsaWdodC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/R0taWWFLczF2eGJ0/SDRSckdzX213YUo3/bWFPLXBNdkQ2Ykpl/eFpsS3Jtdz0"},
{dp:"https://imgs.search.brave.com/aBtMDN3Thw_VoIcbHX-KwdSalC7PTKvSmd0LQVHpOgc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2F5bWVkaWEt/Y29udGVudC5jb20v/LmltYWdlL2NfbGlt/aXQsY3Nfc3JnYixm/bF9wcm9ncmVzc2l2/ZSxxX2F1dG86ZWNv/LHdfNzAwL01UYzFN/VEV6TWpVek9UTXdP/VE0yTVRNeS90aGUt/MTAtbW9zdC1iZWF1/dGlmdWwtd29tZW4t/aW4taG9sbHl3b29k/LmpwZw", story:"https://imgs.search.brave.com/go6P5779vDXgL87WNsDqk_rFGKRQaFnhSNh0yC1aXJA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UyLzNk/LzdkL2UyM2Q3ZGRj/ZTU4YTNlZTI2ODk2/ZDFmYmZhZmZlOWNm/LmpwZw"},
]
var clutter = ""
var circle = document.querySelector(".circle")
arr.forEach(function(elem,idx){
    clutter += `<div class="circle">
    <img id="${idx}" src="${elem.dp}" alt=""> </div>`
});
circle.innerHTML = clutter
circle.addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none"
    },3000)
})


