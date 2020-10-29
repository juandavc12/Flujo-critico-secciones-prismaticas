$(document).ready(function () {
    

    // Selecciona el boton de cada cálculo
const $rectangular = $("#rectangular");
const $triangular = $("#triangular");
const $triangularAsimetrico = $("#triangularAsimetrico");
const $trapezoidal = $("#trapezoidal");
const $trapezoidalAsimetrico = $("#trapezoidalAsimetrico");
const $circular = $("#circular");

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
    const Za = 1;
    const Zb = -1;

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
    let Pc = 2*Yc+base
    let Rc = Ac / Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = Yc+Vc**2/(2*9.81)
    let FO = ((9.81)*(Ac**3)*(Tc**-1)-(caudal**2)).toFixed(1)
    if (Math.sign(FO)===-1 || Math.sign(FO)===-0){
        FO = FO * (-1);
    } else {return(FO)}
 
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
    const Z = parseFloat($talud.val());   

    function f(x) {
        return(9.81*((Z*x**2)**3)*(2*Z*x)**-1-caudal**2)
    }

    function Df(x){
        return(9.81*(-1*((Z*x**2)**3)*((2*Z*x)**-2)*(2*Z)+3*(2*Z*x)**-1*(Z*x**2)**2*(2*Z*x)))
    }

    let x0 = 1
     
    for (let i = 1 ; i < 20 ; i++ ){
        let x1 = x0-f(x0)/Df(x0);
        x0 = x1;
        (eval("Yc="+x0))
    }

    let Tc = 2*Z*Yc;
    let Ac = Z*Yc**2;
    let Pc = 2*Yc*(Math.sqrt(Z**2+1))
    let Rc = Ac/Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal/Ac;
    let EE = Yc+Vc**2/(2*9.81)
    let FO = ((9.81)*(Ac**3)*(Tc**-1)-(caudal**2)).toFixed(1)
    if (Math.sign(FO)===-1 || Math.sign(FO)===-0){
        FO = FO * (-1);
    } else {return(FO)}

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

    function f(x) {
        return(9.81*(0.5*x**2*(Za+Zb))**3*(x*(Za+Zb))**-1-caudal**2)
    }
    
    function Df(x){
        return(9.81*(-1*(0.5*x**2*(Za+Zb))**3*(x*(Za+Zb))**-2*(Za+Zb)+3*(x*(Za+Zb))**-1*(0.5*x**2*(Za+Zb))**2*x*(Za+Zb)))
    }

    let x0 = 1
     
    for (let i = 1 ; i < 20 ; i++ ){
        let x1 = x0-f(x0)/Df(x0);
        x0 = x1;
        (eval("Yc="+x0))
    }

    let Tc = Yc*(Za+Zb);
    let Ac = 0.5*Yc**2*(Za+Zb);
    let Pc = Yc*(Math.sqrt(Za**2+1)+Math.sqrt(Zb**2+1));
    let Rc = Ac / Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = Yc+Vc**2/(2*9.81)
    let FO = ((9.81)*(Ac**3)*(Tc**-1)-(caudal**2)).toFixed(1)
    if (Math.sign(FO)===-1 || Math.sign(FO)===-0){
        FO = FO * (-1);
    } else {return(FO)}

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
    const base = parseFloat($B.val());    
    const Z = parseFloat($Z.val()); 

    function f(x) {
        return(9.81*(x*((Z*x)+base))**3*((2*Z*x)+base)**-1-(caudal**2))
    }
    

    function Df(x){
        return(9.81*(-2*Z*(x*(Z*x+base))**3*(2*Z*x+base)**-2+3*(2*Z*x+base)**-1*(x*(Z*x+base))**2*(2*Z*x+base)))
    }

    let x0 = 1
     
    for (let i = 1 ; i < 20 ; i++ ){
        let x1 = x0-f(x0)/Df(x0);
        x0 = x1;
        (eval("Yc="+x0))
    }
    
    let Tc = 2*Z*Yc+base;
    let Ac = Yc*(Z*Yc+base);
    let Pc = 2*Yc*(Math.sqrt(Z**2+1))+base
    let Rc = Ac / Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = Yc+Vc**2/(2*9.81)
    let FO = ((9.81)*(Ac**3)*(Tc**-1)-(caudal**2)).toFixed(1)
    if (Math.sign(FO)===-1 || Math.sign(FO)===-0){
        FO = FO * (-1);
    } else {return(FO)}

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
    if (Math.sign(FO)===-1 || Math.sign(FO)===-0){
        FO = FO * (-1);
    } else {return(FO)}

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

    let x0 = 1
     
    for (let i = 1 ; i < 20 ; i++ ){
        let x1 = 2/diametro**2*((diametro*caudal**2/9.81)*Math.sin(x0))**(1/3)+(1/4)*Math.sin(2*x0)+0.5*(x0);
        x0 = x1;
        (eval("tetha="+x0))
        console.log(tetha) 
    }
    
    let Yc = (diametro/2)*(1-Math.cos(tetha));
    let tetha2 = 2*Math.acos(1-2*Yc/diametro);
    let Tc = diametro*Math.sin(tetha2/2);
    let Ac = ((diametro**2)/8)*(tetha2-Math.sin(tetha2));
    let Pc = tetha2*diametro/2
    let Rc = Ac / Pc;       
    let Dc = Ac / Tc;
    let Vc = caudal / Ac;
    let EE = Yc+Vc**2/(2*9.81)
    let FO = ((9.81)*(Ac**3)*(Tc**-1)-(caudal**2)).toFixed(1)
    if (Math.sign(FO)===-1 || Math.sign(FO)===-0){
        FO = FO * (-1);
    } else {return(FO)}
    console.log(tetha2)
    $('form').append(`<h3>tetha: 
        <p>${tetha2}</p></h3>`);    

    tableTemplate(FO, Yc, Ac, Pc, Rc, Dc, Tc, Vc, EE)
});


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

