/* 
 Gustavo Cardoso Ribeiro
 833.588
 */

document.addEventListener('DOMContentLoaded', domloaded, false);
function domloaded() {
    var c = document.getElementById("siteCanvas");
    
    var c1 = c.getContext("2d");
    var l1 = c.getContext("2d");
    
    c.width = 1080;
    c.height = 720;
    
    c1.strokeStyle = '#0000aa';
    c1.lineWidth = 3;
    
    c1.beginPath();//central
    c1.arc(540, 360, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//baixo
    c1.arc(540, 460, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//baixo2
    c1.arc(540, 560, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//cima
    c1.arc(540, 260, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//cima2
    c1.arc(540, 160, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//nordeste
    c1.arc(627, 310, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//nordeste2
    c1.arc(714, 260, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//sudeste
    c1.arc(627, 410, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//sudeste2
    c1.arc(714, 460, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//sudoeste
    c1.arc(453, 410, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//sudoeste2
    c1.arc(366, 460, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//noroeste
    c1.arc(453, 310, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//noroeste2
    c1.arc(366, 260, 50, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.strokeStyle = 'black';
    
    c1.beginPath();//externo
    c1.arc(540, 360, 251, 0, 2 * Math.PI);
    c1.stroke();
    
    c1.beginPath();//externo2
    c1.arc(540, 360, 260, 0, 2 * Math.PI);
    c1.stroke();
    
    l1.strokeStyle = '#88aa00';
    l1.globalAlpha = 0.5;
    
    l1.beginPath();
    l1.moveTo(714, 260);
    l1.lineTo(714, 460);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(714, 460);
    l1.lineTo(540, 560);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 560);
    l1.lineTo(366, 460);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(366, 460);
    l1.lineTo(366, 260);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(366, 260);
    l1.lineTo(540, 160);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 160);
    l1.lineTo(714, 260);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(627, 310);
    l1.lineTo(627, 410);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(627, 410);
    l1.lineTo(540, 460);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 460);
    l1.lineTo(453, 410);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(453, 410);
    l1.lineTo(453, 310);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(453, 310);
    l1.lineTo(540, 260);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 260);
    l1.lineTo(627, 310);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(366, 260);
    l1.lineTo(714, 260);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(714, 260);
    l1.lineTo(540, 560);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 560);
    l1.lineTo(366, 260);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 160);
    l1.lineTo(714, 460);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(714, 460);
    l1.lineTo(366, 460);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(366, 460);
    l1.lineTo(540, 160);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 260);
    l1.lineTo(627, 410);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(627, 410);
    l1.lineTo(453, 410);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(453, 410);
    l1.lineTo(540, 260);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(453, 310);
    l1.lineTo(627, 310);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(627, 310);
    l1.lineTo(540, 460);
    l1.stroke();
    
    l1.beginPath();
    l1.moveTo(540, 460);
    l1.lineTo(453, 310);
    l1.stroke();
}