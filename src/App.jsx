import { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  //Listado de pacientes
  const [pacientes, setPacientes] = useState([]);
  //Obtener paciente a editar
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className=" mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
