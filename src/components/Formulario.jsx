import { useState } from 'react';
import Alerta from './Alerta';

const Formulario = ({ pacientes, setPacientes }) => {
  //Definir el estado del nombre, propietario, email, alta, sintomas
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate Form
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
      return;
    }
    
    //Crear nuevo objeto de paciente
    const paciente = { nombre, propietario, email, alta, sintomas };
    //Enviarlo al state
    setPacientes([...pacientes, paciente]);
    //Reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

    //Mostrar alerta
    setAlerta({ msg: 'Paciente agregado', error: false });

    setTimeout(() => {
      setAlerta({});
    }, timeout);
  };

  const { msg } = alerta;

  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{' '}
        <span className=" text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-2"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md "
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre de la propietario"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md "
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md "
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="10"
            className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md "
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Agregar paciente"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors mb-5"
        />
        {msg && <Alerta alerta={alerta} />}
      </form>
    </div>
  );
};

export default Formulario;
