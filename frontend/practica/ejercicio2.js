const agenda = [
  {
    name: "Juan Perez",
    phone: "79346449",
    email: "juan@gmail.com"
  },
  {
    name: "Luis Fernando",
    phone: "79346449",
    email: "luis@gmail.com"
  },
  {
    name: "Antonio Roque",
    phone: "79346449",
    email: "antonio@gmail.com"
  }
]

const agendaMap = new Map();

function cargarAgenda() {
  agenda.map((contacto) => {
    agendaMap.set(contacto.name, contacto)
  })
}

function buscarContanto(referencia) {
  cargarAgenda();
  const regex = new RegExp(referencia, "i");
  const coincidentes = []
  Array.from(agendaMap).map(([clave, valor]) => {
    if (regex.test(clave)) {
      coincidentes.push(valor);
    }
  })
  console.log('coincidentes::: ', coincidentes);
}

function agregarContacto(contacto) {
  cargarAgenda();
  agendaMap.set(contacto.name,contacto)
  console.log('agendaMap::: ', agendaMap);
}

function eliminarContacto(clave){
  cargarAgenda();
  if (agendaMap.has(clave)) {
    agendaMap.delete(clave);
    console.log('agendaMap::: ', agendaMap);
  }else{
    console.log("el nombre",clave,"no existe ")
  }
}


//buscarContanto("uiS FerNan");
// agregarContacto(
//   {
//     name: "rembert rodrigo",
//     phone: "79346449",
//     email: "remrodri@gmail.com"
//   }
// );

//eliminarContacto("Juan Perez");
