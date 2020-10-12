$(document).ready(function () {

const $caudal = $("#caudal");
const $diametro = $("#diametro");
const $tetha = $("#tetha");
const $send = $("#send");



$send.on('click', () => {
    event.preventDefault();
    let output="";
    const caudal = parseFloat($caudal.val());
    const diametro = parseFloat($diametro.val());
    const tetha = parseFloat($tetha.val());    
    const Yc = 0.2127;
    const Ac = ((diametro**2)/8) * (tetha-(Math.sin(tetha)));
    const Pc = (tetha * diametro) / 2;
    const Rc = Ac + Pc;    
    const Tc = diametro*(Math.sin(tetha/2));
    const Dc = Ac - Tc;
    const Vc = caudal / Ac;
    const EE = (Yc + (Vc**2)) / (2*9.81);
    const FO = (9.81 * (Ac**3) * (Tc**-1)) - (caudal**2);

    output+=`<table class='output'>
    <th>Output:</th>

        <tr>      
          <td>FO:</td>      
          <td>${FO}</td>   
        </tr>

        <tr>      
            <td>Yc (m):</td>      
            <td>${Yc}</td>   
        </tr>

        <tr>      
            <td>Ac (m2):</td>      
            <td>${Ac}</td>   
        </tr>

        <tr>      
            <td>Pc (m):</td>      
            <td>${Pc}</td>   
        </tr>

        <tr>      
            <td>Rc (m):</td>      
            <td>${Rc}</td>   
        </tr>

        <tr>      
            <td>Dc (m):</td>      
            <td>${Dc}</td>   
        </tr>

        <tr>      
            <td>Tc (m):</td>      
            <td>${Tc}</td>   
        </tr>

        <tr>      
            <td>Vc (m/s):</td>      
            <td>${Vc}</td>   
        </tr>

        <tr>      
            <td>EE (m/s):</td>      
            <td>${EE}</td>   
        </tr>
    </table>`

$('#tabla').html(output);
    
});








});

