const Alerta = ({alerta}) => {
  return (
    <div
      className={`${
        alerta.error
          ? 'from-red-500 to-red-700'
          : 'from-green-500 to-green-700'
      } bg-gradient-to-tr text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
