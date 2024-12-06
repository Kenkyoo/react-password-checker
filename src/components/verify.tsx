import { motion } from "framer-motion";

interface VerifyProps  {
  password: string;
}

function Verify({ password } : VerifyProps) {
  let message = "";
  let textButton = "Confirmar";
  let bgButton = "bg-gray-400"; // Color por defecto (fondo gris)

  if (password.length < 8) {
    message = "La contraseña debe tener al menos 8 caracteres.";
    textButton = "Weak";
    bgButton = "bg-red-500"; // Color de fondo rojo para error
  } else if (!/[A-Z]/.test(password)) {
    message = "La contraseña debe tener al menos una letra mayúscula.";
    textButton = "Weak";
    bgButton = "bg-orange-500"; // Color naranja
  } else if (!/[a-z]/.test(password)) {
    message = "La contraseña debe tener al menos una letra minúscula.";
    textButton = "Acceptable";
    bgButton = "bg-yellow-500"; // Color amarillo
  } else if (!/[0-9]/.test(password)) {
    message = "La contraseña debe tener al menos un número.";
    textButton = "Acceptable";
    bgButton = "bg-blue-500"; // Color azul
  } else if (!/[!@#$%^&*]/.test(password)) {
    message = "La contraseña debe tener al menos un carácter especial.";
    textButton = "Strong";
    bgButton = "bg-purple-500"; // Color púrpura
  } else {
    message = "Contraseña válida.";
    textButton = "Very Strong";
    bgButton = "bg-green-500"; // Color verde para contraseña válida
  }

  return (
    <>
      <motion.p
        key={message} 
        className="text-md md:text-xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {message}
      </motion.p>
      
      <motion.button
        key={bgButton}
        className={`flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black text-white ${bgButton}`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {textButton}
      </motion.button>
    </>
  );
}

export default Verify;
