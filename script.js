let arr = [
    {puntos : [
        {materia : 'Sistemas operativos', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Programación de sistemas', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Arquitectura de sistemas de red', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Sistemas operativos aplicados', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Mantenimiento de equipo de computo', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Habilidades de comunicación', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Administración de proyectos de red', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Prácticas de redes', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Metodología de la investigación', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Estructura de datos', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Principios de telecomunicaciones', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Desarrollo de sistemas web', num : 0, tipo : 'Formacion profesional'},
        {materia : 'Seguridad', num : 0, tipo : 'Especialidad Servicios y servidores'},
        {materia : 'Administración de servidores', num : 0, tipo : 'Especialidad Servicios y servidores'},
        {materia : 'Administración avanzada de servicios', num : 0, tipo : 'Especialidad Servicios y servidores'},
        {materia : 'Análisis de protocolos', num : 0, tipo : 'Especialidad Servicios y servidores'},
        {materia : 'Enrutamiento básico', num : 0, tipo : 'Arquitectura de red'},
        {materia : 'Enrutamiento avanzado', num : 0, tipo : 'Arquitectura de red'},
        {materia : 'Redes inalámbricas', num : 0, tipo : 'Arquitectura de red'},
        {materia : 'Redes WAN', num : 0, tipo : 'Arquitectura de red'},
        {materia : 'Administración de proyectos de red', num : 0, tipo : 'Seguridad en redes'},
        {materia : 'Programación segura', num : 0, tipo : 'Seguridad en redes'},
        {materia : 'Arquitectura en red', num : 0, tipo : 'Seguridad en redes'},
        {materia : 'Programación en la administración de redes', num : 0, tipo : 'Seguridad en redes'},
        {materia : 'Lectura y redacción a través del análisis del mundo contemporáneo', num : 0, tipo : 'Optativas'},
        {materia : 'Algebra lineal para computación', num : 0, tipo : 'Optativas'},
        {materia : 'Probabilidad y estadística para computación', num : 0, tipo : 'Optativas'},
        {materia : 'Persona y proyecto de vida', num : 0, tipo : 'Optativas'},
        {materia : 'Ética y profesión', num : 0, tipo : 'Optativas'},
        {materia : 'Diseño y desarrollo de videojuegos', num : 0, tipo : 'Optativas'},
        {materia : 'Diseño y proyectos de investigación', num : 0, tipo : 'Optativas'},
        {materia : 'Sensores y actuadores', num : 0, tipo : 'Optativas'},
        {materia : 'Diseño de compiladores', num : 0, tipo : 'Optativas'},
        {materia : 'Gráficas por computadora', num : 0, tipo : 'Optativas'},
        {materia : 'Ingeniería de software', num : 0, tipo : 'Optativas'},
        {materia : 'Ingeniería de software II', num : 0, tipo : 'Optativas'},
        {materia : 'Computación básica', num : 0, tipo : 'Tronco comun'},
        {materia : 'Habilidades de pensamiento crítico y creativo', num : 0, tipo : 'Tronco comun'},
        {materia : 'Inglés I', num : 0, tipo : 'Tronco comun'},
        {materia : 'Inglés II', num : 0, tipo : 'Tronco comun'},
        {materia : 'Fundamentos de matemáticas', num : 0, tipo : 'Tronco comun'},
        {materia : 'Matemáticas discretas', num : 0, tipo : 'Tronco comun'},
        {materia : 'Introducción a la programación', num : 0, tipo : 'Tronco comun'},
        {materia : 'Servicios y servidores', num : 0, tipo : 'Especialidades'},
        {materia : 'Arquitectura de red', num : 0, tipo : 'Especialidades'},                
        {materia : 'Seguridad en redes', num : 0, tipo : 'Especialidad'},
        {materia : 'Seguridad', num : 0, tipo : 'Servicios y servidores'},
        {materia : 'Administración de servidores', num : 0, tipo : 'Servicios y servidores'},
        {materia : 'Administración avanzada de servicios', num : 0, tipo : 'Servicios y servidores'},
        {materia : 'Análisis de protocolos', num : 0, tipo : 'Servicios y servidores'},
    ]},
    {
        ques: "¿Has tomado algún curso dentro o fuera del centro educativo que acredite un nivel igual o superior a B2?",
        ans: null,
        cat: "tronco común",
        asignatures: [
            'Inglés I', 'Inglés II'
        ]
    },
    {
        ques: "¿Acreditas un nivel medio o avanzado de algún lenguaje de programación?",
        ans: null,
        cat: "tronco común",
        asignatures: [
            'Introducción a la programación'
        ]
    },
    {
        ques: "¿Estás familiarizado con funcionamiento interno de un servidor?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Servicios y servidores'
        ]
    },
    {
        ques: "¿Tienes una noción de lo que es un protocolo de red?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Servicios y servidores'
        ]
    },
    {
        ques: "¿Estás interesado en conocer el funcionamiento avanzado de un servidor?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Servicios y servidores'
        ]
    },
    {
        ques: "¿Sabes para que sirven los servicios que ofrece un servidor?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Servicios y servidores'
        ]
    },
    {
        ques: "¿Te interesa poder administrar los recursos de una plataforma de servicios?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Servicios y servidores'
        ]
    },
    {
        ques: "¿Estás interesado en cómo puede ser ensamblado desde cero un servidor?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Arquitectura de red'
        ]
    },
    {
        ques: "¿La creación de redes físicas, así como su configuración son de tu interés?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Arquitectura de red'
        ]
    },
    {
        ques: "Los servidores previo a su configuración interna requieren un ensamble previo, ¿te interesa conocer los pasos para ensamblarlo?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Arquitectura de red'
        ]
    },
    {
        ques: "¿Quieres conocer cómo funcionan las señales que proporcionan internet a tu teléfono?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Arquitectura de red'
        ]
    },
    {
        ques: "¿Te interesa crear y configurar redes a gran escala?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Arquitectura de red'
        ]
    },
    {
        ques: "¿Eres un fanático de lo que los hackers de sombrero blanco pueden hacer?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Seguridad en redes'
        ]
    },
    {
        ques: "¿Te resulta interesante la protección de datos dentro de un servidor?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Seguridad en redes'
        ]
    },
    {
        ques: "¿Quieres conocer cómo protegerte antes amenazas digitales?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Seguridad en redes'
        ]
    },
    {
        ques: "¿Te interesa la programación de servicios desde una perspectiva de seguridad?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Seguridad en redes'
        ]
    },
    {
        ques: "¿La aplicación de protocolos de seguridad te resulta familiar en algún sentido?",
        ans: null,
        cat: "especialidad",
        asignatures: [
            'Seguridad en redes'
        ]
    },
    {
        ques: "¿Te ves como un futuro desarrollador de proyectos de sistemas dedicados?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Ingeniería de software I',
            'Ingeniería de software II',
            'Diseño de proyectos'
        ]
    },
    {
        ques: "¿Eres un apasionado de los videojuegos o te interesa desarrollar alguno?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Ingeniería de Graficas por computadora', 'Diseño y desarrollo de videojuegos'
        ]
    },
    {
        ques: "¿Te consideras una persona en busca de retos matemáticos o de problemas complejos?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Algebra lineal para computación', 'Probabilidad y estadística para computación'
        ]
    },
    {
        ques: "¿Quieres explorar tu lado humanista durante tu desarrollo profesional?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Persona y proyecto de vida', 'Ética y profesión', 'Lectura y redacción a través den análisis del mundo contemporáneo'
        ]
    },
    {
        ques: "¿Te interesa la idea de aprender cómo funcionan los dispositivos eléctricos y como programarlos? ",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Diseño de compiladores', 'Sensores y actuadores'
        ]
    },
    {
        ques: "¿Eres una persona que se caractericé por buscar resultados de forma exacta?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Algebra lineal para computación', 'Probabilidad y estadística para computación'
        ]
    },
    {
        ques: "¿Algunas vez has pensado en crear diseños tridimensionales?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Gráficas por computadora', 'Diseño de videojuegos'
        ]
    },
    {
        ques: "¿Consideras que es importante crecer como persona en tu día a día?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Persona y proyecto de vida', 'Ética y profesión', 'Lectura y redacción a través del análisis del mundo contemporáneo'
        ]
    },
    {
        ques: "¿Piensas que los sistemas computacionales son las herramientas del mañana?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Ingeniera de software I', 'Ingeniera de software II'
        ]
    },
    {
        ques: "¿Te interesa programar en una gran área de sistemas?",
        ans: null,
        cat: "optativa",
        asignatures: [
            'Diseño de compiladores', 'Diseño y proyectos de investigación', 'Sensores y actuadores'
        ]
    }
]

var preguntas = "";
var plan = [];

const cambiar = (asn, pos) => {
    console.log(asn, pos)
    arr[pos].ans = asn

}

const enviar = () =>{
    for (let i = 1; i < arr.length; i++){
        let respuesta = $("#pregunta"+i).val()
        arr[i].ans = respuesta

        if (arr[i].ans === 'si' ){            
            for (let j = 0; j < arr[0].puntos.length; j++) {
                let materia = arr[0].puntos[j].materia
                for (let k = 0; k < arr[i].asignatures.length ; k++){
                    if (materia === arr[i].asignatures[k]){
                        arr[0].puntos[j].num = arr[0].puntos[j].num + 1
                    }
                }
            }
        }

        if (arr[i].ans === 'talvez' ){            
            for (let j = 0; j < arr[0].puntos.length; j++) {
                let materia = arr[0].puntos[j].materia
                for (let k = 0; k < arr[i].asignatures.length ; k++){
                    if (materia === arr[i].asignatures[k]){
                        arr[0].puntos[j].num = arr[0].puntos[j].num + 0.5
                    }
                }
            }
        }        
    }
    ocultarPreguntas()    
}

const llenarpreguntas = () => {
    for (let i = 1; i < arr.length; i++) {        
        $(".preguntas").append(
            '<li class="list-group-item mb-2">'+arr[i].ques+
            '<select id = "pregunta'+i+'" name="pregunta'+i+'" class ="float-end"> <option value="si">si</option> <option value="no" selected>no</option> <option value="talvez" >tal vez</option> </select>'+
            '</li>'
        )
    }
}

const llenarPlan = () => {    
    arr[0].puntos.sort(function(a,b){return b.num-a.num})    
    var especialidades = 0
    var especialidad = []
    for(let i = 0; i < arr[0].puntos.length; i++) {
        let a = arr[0].puntos[i]        
        if(a.tipo === 'Formacion profesional') {
            plan.push(a)
        }
        if(a.tipo === 'Tronco comun' && a.num == 0) {
            plan.push(a)
        }
        if(a.tipo === 'Especialidades' && especialidad.length <= 2) {
            for(let j = 0; j < arr[0].puntos.length; j++) {                
                if (a.materia === arr[0].puntos[j].materia) {
                    especialidad.push(arr[0].puntos[j].materia)                    
                }
            }
        }        
    }    
    for(let i = 0; i < especialidad.length; i++) {
        console.log(especialidad[i])
        for(let j = 0; j < arr[0].puntos.length; j++) {
            if (arr[0].puntos[j].tipo === especialidad[i]) {                                
                plan.push({materia : arr[0].puntos[j].materia, tipo : 'Especialidad'})
            }
        }
    }
    for(let i = 0; i < arr[0].puntos.length; i++) {
        let a = arr[0].puntos[i]        
        if(a.tipo === 'Optativas' && plan.length < 30) {
            plan.push(a)
        }       
    }
    console.log(especialidad)
    console.log(plan)    
}

const ocultarPreguntas = () => {
    document.getElementById('preguntasCont').style.display='none'
    llenarPlan()
    document.getElementById('resultadosCont').style.display='block'
}

$(document).ready(function() {
    llenarpreguntas()
    document.getElementById('resultadosCont').style.display='none'
})