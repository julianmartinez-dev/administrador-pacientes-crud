
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  

  return (
    <div className=" md:w-1/2 lg:w-3/5 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className=" text-xl text-center mb-10 mt-5">
            {' '}
            Administra tus{' '}
            <span className=" text-indigo-600 font-bold">
              Pacientes y citas
            </span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className=" text-xl text-center mb-10 mt-5">
            {' '}
            Comienza agregando pacientes y{' '}
            <span className=" text-indigo-600 font-bold">aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
