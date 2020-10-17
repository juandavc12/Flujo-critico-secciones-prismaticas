$(document).ready(function () {

    // Selecciona el boton de cada cálculo
const $rectangular = $("#rectangular");
const $triangular = $("#triangular");
const $triangularAsimetrico = $("#triangularAsimetrico");
const $trapezoidal = $("#trapezoidal");
const $trapezoidalAsimetrico = $("#trapezoidalAsimetrico");
const $circular = $("#circular");
const $parabolico = $("#parabolico");

$rectangular.on('click', () => {
    let rectangular = "";
    rectangular += `<form>
                        <h2>Input:</h2>
                        <strong>Caudal (m3/s): </strong>
                        <input type="number" id="caudal" autocomplete="off"> <br> <br>
                        <strong>Base (m): </strong>
                        <input type="number" id="base" autocomplete="off"> <br> <br>
                        <button type="submit" id="send"><strong>CALCULAR</strong></button> 
                    </form>   
    
                    <table class="graficas">
                        <th>Canal rectangular:</th>

                        <tr>
                            <td><img src="/imagenes/rectangular.png"></td>
                            <td><img src="/imagenes/canalRectangular.jpg"></td>
                        </tr>
          
                    </table>`
 
    $('.input').html(rectangular);
    
// Asignar variables a inputs
const $caudal = $("#caudal");
const $base = $("#base");
const $send = $("#send");

// Evento boton
$send.on('click', () => {
    $("html, body").animate({ scrollTop: $('html, body').prop("scrollHeight")}, 1000) //Scroll abajo
    event.preventDefault();
    const caudal = parseFloat($caudal.val());
    const base = parseFloat($base.val());    
    let Yc = 2.168;
    let Ac = base * Yc;
    let Pc = (Yc * 2) + base;
    let Rc = Ac / Pc;   
    let Tc = base;
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = (Yc + (Vc**2)) /(2*9.81);
    let FO = (9.81*Ac**3*(Tc**(-1))) - (caudal**2)

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});
});

$triangular.on('click', () => {
    let triangular = "";
    triangular += `<form>
                        <h2>Input:</h2>
                        <strong>Caudal (m3/s): </strong>
                        <input type="number" id="caudal" autocomplete="off"> <br> <br>
                        <strong>Talud: </strong>
                        <input type="number" id="talud" autocomplete="off"> <br> <br>               
                        <button type="submit" id="send">CALCULAR</button> 
                    </form>   
    
                    <table class="graficas">
                        <th>Canal triangular:</th>

                        <tr>
                            <td><img src="/imagenes/triangular.png"></td>
                            <td><img src="/imagenes/canalTriangular.png"></td>
                        </tr>
          
                    </table>`
 
    $('.input').html(triangular);
    // Asignar variables a inputs
const $caudal = $("#caudal");
const $talud = $("#talud");
const $send = $("#send");

// Evento boton
$send.on('click', () => {
    $("html, body").animate({ scrollTop: $('html, body').prop("scrollHeight")}, 1000) //Scroll abajo
    event.preventDefault();
    const caudal = parseFloat($caudal.val());
    const talud = parseFloat($talud.val());    
    const Yc = Math.random()
    const Ac = Math.random()
    const Pc = Math.random()
    const Rc = Math.random()    
    const Tc = Math.random()
    const Dc = Math.random()
    const Vc = Math.random()
    const EE = Math.random()
    const FO = Math.random()

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});
});

$triangularAsimetrico.on('click', () => {
    let triangularAsimetrico = "";
    triangularAsimetrico += `<form>
                        <h2>Input:</h2>
                        <strong>Caudal (m3/s): </strong>
                        <input type="number" id="caudal" autocomplete="off"> <br> <br>
                        <strong>Talud Za (m): </strong>
                        <input type="number" id="Za" autocomplete="off"> <br> <br>
                        <strong>Talud Zb (m): </strong>
                        <input type="number" id="Zb" autocomplete="off"> <br> <br>                 
                        <button type="submit" id="send">CALCULAR</button> 
                    </form>   
    
                    <table class="graficas">
                        <th>Canal triangularAsimetrico:</th>

                        <tr>
                            <td><img src="/imagenes/triangular.png"></td>
                            <td><img src="/imagenes/canalTriangular.png"></td>
                        </tr>
          
                    </table>`

    $('.input').html(triangularAsimetrico);

    // Asignar variables a inputs
const $caudal = $("#caudal");
const $Za = $("#Za");
const $Zb = $('#Zb')
const $send = $("#send");

// Evento boton
$send.on('click', () => {
    $("html, body").animate({ scrollTop: $('html, body').prop("scrollHeight")}, 1000) //Scroll abajo
    event.preventDefault();
    const caudal = parseFloat($caudal.val());
    const Za = parseFloat($Za.val());    
    const Zb = parseFloat($Zb.val()); 
    const Yc = Math.random()
    const Ac = Math.random()
    const Pc = Math.random()
    const Rc = Math.random()    
    const Tc = Math.random()
    const Dc = Math.random()
    const Vc = Math.random()
    const EE = Math.random()
    const FO = Math.random()

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});
});

$trapezoidal.on('click', () => {
    let trapezoidal = "";
    trapezoidal += `<form>
                        <h2>Input:</h2>
                        <strong>Caudal (m3/s): </strong>
                        <input type="number" id="caudal" autocomplete="off"> <br> <br>
                        <strong>B (m): </strong>
                        <input type="number" id="B" autocomplete="off"> <br> <br>
                        <strong>Z (m): </strong>
                        <input type="number" id="Z" autocomplete="off"> <br> <br>                 
                        <button type="submit" id="send">CALCULAR</button> 
                    </form>   
    
                    <table class="graficas">
                        <th>Canal trapezoidal:</th>

                        <tr>
                            <td><img src="/imagenes/trapezoidal.png"></td>
                            <td><img src="/imagenes/canalTrapezoidal.png"></td>
                        </tr>
          
                    </table>`

    $('.input').html(trapezoidal);
        // Asignar variables a inputs
const $caudal = $("#caudal");
const $B = $("#B");
const $Z = $('#Z')
const $send = $("#send");

// Evento boton
$send.on('click', () => {
    $("html, body").animate({ scrollTop: $('html, body').prop("scrollHeight")}, 1000) //Scroll abajo
    event.preventDefault();
    const caudal = parseFloat($caudal.val());
    const B = parseFloat($B.val());    
    const Z = parseFloat($Z.val()); 
    const Yc = Math.random()
    const Ac = Math.random()
    const Pc = Math.random()
    const Rc = Math.random()    
    const Tc = Math.random()
    const Dc = Math.random()
    const Vc = Math.random()
    const EE = Math.random()
    const FO = Math.random()

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});
});

$trapezoidalAsimetrico.on('click', () => {
    let trapezoidalAsimetrico = "";
    trapezoidalAsimetrico += `<form>
                        <h2>Input:</h2>
                        <strong>Caudal (m3/s): </strong>
                        <input type="number" id="caudal" autocomplete="off"> <br> <br>
                        <strong>B (m): </strong>
                        <input type="number" id="B" autocomplete="off"> <br> <br>
                        <strong>Za (m): </strong>
                        <input type="number" id="Za" autocomplete="off"> <br> <br> 
                        <strong>Zb (m): </strong>
                        <input type="number" id="Zb" autocomplete="off"> <br> <br>                
                        <button type="submit" id="send">CALCULAR</button> 
                    </form>   
    
                    <table class="graficas">
                        <th>Canal trapezoidal asimetrico:</th>

                        <tr>
                            <td><img src="/imagenes/trapezoidalAsimetrico.png"></td>
                            <td><img src="/imagenes/canalTrapezoidal.png"></td>
                        </tr>
          
                    </table>`
  
    $('.input').html(trapezoidalAsimetrico);
        // Asignar variables a inputs
const $caudal = $("#caudal");
const $B = $("#B")
const $Za = $("#Za");
const $Zb = $('#Zb');
const $send = $("#send");

// Evento boton
$send.on('click', () => {
    $("html, body").animate({ scrollTop: $('html, body').prop("scrollHeight")}, 1000) //Scroll abajo
    event.preventDefault();
    const caudal = parseFloat($caudal.val());
    const B = parseFloat($B.val()); 
    const Za = parseFloat($Za.val());    
    const Zb = parseFloat($Zb.val()); 
    const Yc = Math.random()
    const Ac = Math.random()
    const Pc = Math.random()
    const Rc = Math.random()    
    const Tc = Math.random()
    const Dc = Math.random()
    const Vc = Math.random()
    const EE = Math.random()
    const FO = Math.random()

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});
});

$circular.on('click', () => {
    let circular = "";
    circular +=`<form>
                            <h2>Input:</h2>
                            <strong>Caudal (m3/s): </strong>
                            <input type="number" id="caudal" autocomplete="off"> <br> <br>
                            <strong>D (m): </strong>
                            <input type="number" id="diametro" autocomplete="off"> <br> <br>
                            <strong>tetha: </strong>
                            <input type="number" id="tetha" autocomplete="off"> <br> <br>
                            <button type="submit" id="send">CALCULAR</button> 
                        </form>   
        
                        <table class="graficas">
                            <th>Canal circular:</th>
    
                            <tr>
                                <td><img src="/imagenes/circular.png"></td>
                                <td><img src="/imagenes/canalCircular.png"></td>
                            </tr>
              
                        </table>`

    $('.input').html(circular);

// Asignar variables a inputs
const $caudal = $("#caudal");
const $diametro = $("#diametro");
const $tetha = $("#tetha");
const $send = $("#send");

// Evento boton
$send.on('click', () => {
    $("html, body").animate({ scrollTop: $('html, body').prop("scrollHeight")}, 1000)
    event.preventDefault();
    const caudal = parseFloat($caudal.val());
    const diametro = parseFloat($diametro.val());
    const tetha = parseFloat($tetha.val());    
    const Yc = Math.random();
    const Ac = ((diametro**2)/8) * (tetha-(Math.sin(tetha)));
    const Pc = (tetha * diametro) / 2;
    const Rc = Ac + Pc;    
    const Tc = diametro*(Math.sin(tetha/2));
    const Dc = Ac - Tc;
    const Vc = caudal / Ac;
    const EE = (Yc + (Vc**2)) / (2*9.81);
    const FO = (9.81 * (Ac**3) * (Tc**-1)) - (caudal**2);

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});


});

$parabolico.on('click', () => {
    let parabolico = "";
    parabolico +=`<form>
                            <h2>Input:</h2>
                            <strong>Caudal (m3/s): </strong>
                            <input type="number" id="caudal" autocomplete="off"> <br> <br>
                            <strong>T: </strong>
                            <input type="number" id="T" autocomplete="off"> <br> <br>
                            <button type="submit" id="send">CALCULAR</button> 
                        </form>   
        
                        <table class="graficas">
                            <th>Canal parabolico:</th>
    
                            <tr>
                                <td><img src="/imagenes/imagen.png"></td>
                                <td><img src="/imagenes/imagen.png"></td>
                            </tr>
              
                        </table>`

    $('.input').html(parabolico);
});

function tableTemplate (FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE){

    let output = "";    
    output +=`<table class='output'>
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
}


    



// for ( let i = 1 ; i<=12 ; i++ ) {
//     newton += `<tr>
//     <td>yc (m)</td>
//     <td>Ac (m2)</td>
//     <td>dAc/dyc</td>
//     <td>T (m)</td>
//     <td>dTc/dyc</td>
//     <td>f(yc)</td>
//     <td>f´(yc)</td>
//     <td>Newton Raphson</td>
//   </tr>`
// }

// $('#newtonR').append(newton);
    
// });








});

