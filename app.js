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
    let Yc = 5;
    let Ac = base * Yc;
    let dAdY = base;
    let Tc = base;
    let dTdY = 0;
    let fYc = (9.81) * (Ac**3) * (Tc**-1) - (caudal**2)
    let f_yc = (9.81) * ((Ac**3) * (-1) * (Tc**-2) * dTdY + (Tc**-1) * 3 * (Ac**2) * dAdY)
    // let newtonR = Yc - fYc / f_yc;
    let Za = 3;
    let Zb = 2.5

// eval("Yc2="+newtonR)
    // function newtonRaphson (Yc, Ac, dAdY, Tc, dTdY, fYc, f_yc, newtonR) {
    
    // let i = 0;
    // for (let n = 5 ; n !== newtonR ; i++){
    //     eval("Yc"+i+"="+n)
    //     Ac = base * eval("Yc"+i+"="+n);
    //     dAdY = base;
    //     Tc = base;
    //     dTdY = 0;
    //     fYc = (9.81) * (Ac**3) * (Tc**-1) - (caudal**2)
    //     f_yc = (9.81) * ((Ac**3) * (-1) * (Tc**-2) * dTdY + (Tc**-1) * 3 * (Ac**2) * dAdY)
    //     newtonR = eval("Yc"+i+"="+n) - fYc / f_yc;
    //     n = newtonR
    //     console.log(("Yc"+i+"="+n) + 'ciclando' + newtonR);
    // }

    function f(x) {
        return(9.81*(0.5*Za*x**2+base*x+0.5*Zb*x**2)**3*(Za*x+base+Zb*x)**-1-caudal**2)
    }

    function Df(x){
        return(9.81*(-1*(0.5*Za*x**2+base*x+0.5*Zb*x**2)**3*(Za*x+base+Zb*x)**-2*(Za+Zb)+3*(Za*x+base+Zb*x)**-1*(0.5*Za*x**2+base*x+0.5*Zb*x**2)**2*((Za*x+base+Zb*x))))
    }

    let x0 = 1
     
    for (let i = 1 ; i < 11 ; i++ ){
        let x1 = x0-f(x0)/Df(x0);
        x0 = x1;
        console.log("iteracion"+ i + x0);
    }
    // Función objetivo f(hf)
// def f(x):
// return 9.81*(0.5*Za*x**2+b*x+0.5*Zb*x**2)**3*(Za*x+b+Zb*x)**-1-Q**2
// Q=float(input("Digite caudal Q (m3/s): "))
// b=float(input("Digite base del canal b (m): "))
// Za=float(input("Digite talud Za: "))
// Zb=float(input("Digite talud Zb: "))
// # Primera derivada para f(hf)
// def Df(x):
// return 9.81*(-(0.5*Za*x**2+b*x+0.5*Zb*x**2)**3*(Za*x+b+Zb*x)**-2*(Za+Zb)
// +3*(Za*x+b+Zb*x)**-1*(0.5*Za*x**2+b*x+0.5*Zb*x**2)**2*((Za*x+b+Zb*x)))
// x0=1
// i=1
// for iteracion in range (1,11):
// x1= x0-f(x0)/Df(x0)
// x0=x1
// print("iteracion", i,x0)
// i=i+1
            
                


        
    // }

    let Pc = (Yc * 2) + base;
    let Rc = Ac / Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = (Yc + (Vc**2)) /(2*9.81);
    let FO = (9.81*Ac**3*(Tc**(-1))) - (caudal**2);  
    
    // newtonRaphson(Yc, Ac, dAdY, Tc, dTdY, fYc, f_yc, newtonR)
    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
    // console.log(newtonR)
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
    const base = parseFloat($B.val()); 
    const Za = parseFloat($Za.val());    
    const Zb = parseFloat($Zb.val()); 
    // const Yc = Math.random()


    function f(x) {
        return(9.81*(0.5*Za*x**2+base*x+0.5*Zb*x**2)**3*(Za*x+base+Zb*x)**-1-caudal**2)
    }

    function Df(x){
        return(9.81*(-1*(0.5*Za*x**2+base*x+0.5*Zb*x**2)**3*(Za*x+base+Zb*x)**-2*(Za+Zb)+3*(Za*x+base+Zb*x)**-1*(0.5*Za*x**2+base*x+0.5*Zb*x**2)**2*((Za*x+base+Zb*x))))
    }

    let x0 = 1
     
    for (let i = 1 ; i < 20 ; i++ ){
        let x1 = x0-f(x0)/Df(x0);
        x0 = x1;
        (eval("Yc="+x0))
    }

    let Tc = Za*Yc+Zb*Yc+base;
    let Ac = base*Yc+((Za*(Yc**2)+Zb*(Yc**2))/2)
    let Pc = (Yc*(Math.sqrt((Za**2)+1))+Yc*(Math.sqrt((Zb**2)+1)))+base
    let Rc = Ac / Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = Yc+Vc**2/(2*9.81)
    let FO = ((9.81)*(Ac**3)*(Tc**-1)-(caudal**2)).toFixed(1)
    console.log(FO)

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





});

