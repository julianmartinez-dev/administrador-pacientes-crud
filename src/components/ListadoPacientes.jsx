import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className=" md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className=" text-xl text-center mb-10 mt-5">
        {' '}
        Administra tus{' '}
        <span className=" text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
      <div className="md:h-screen md:overflow-y-scroll">

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      </div>
      
    </div>
  );
};

export default ListadoPacientes;
