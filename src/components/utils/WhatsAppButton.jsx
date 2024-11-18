import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';

// Función auxiliar para validar URLs
const isValidUrl = (string = '') => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

const sendWhatsAppMessage = () => {
  try {
    // Formateo del número - eliminar caracteres no numéricos
    const formattedPhone = '1166026464';

    // Preparación del mensaje
    const safeMessage = 'Hola ian:';
    const encodedMessage = encodeURIComponent(safeMessage);
    
    // Crear y validar URL de WhatsApp
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    if (!isValidUrl(whatsappUrl)) {
      throw new Error('URL de WhatsApp inválida');
    }

    window.open(whatsappUrl, '_blank');
  } catch (error) {
    console.error('Error al enviar mensaje de WhatsApp:', error);
  }
};

const WhatsAppButton = ({ phoneNumber = '', message = '', size = 'md', className = '' }) => {
  const sizes = {
    sm: 'p-5 text-4xl',    // Aumentado de p-2 text-xl
    md: 'p-6 text-5xl',    // Aumentado de p-3 text-2xl
    lg: 'p-7 text-6xl'  
  };

  const handleClick = () => {
    try {
      sendWhatsAppMessage();
    } catch (error) {
      console.error('Error al hacer click:', error);
    }
  };

  return (
    <button 
      type="button"
      onClick={handleClick}
      aria-label="Enviar mensaje por WhatsApp"
      className={`
        aspect-square
        ${sizes[size]}
        bg-[#25D366] 
        hover:bg-[#128C7E]
        text-white
        rounded-full
        transition-all 
        duration-300 
        ease-in-out
        shadow-lg 
        hover:shadow-xl
        transform 
        hover:-translate-y-1
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#25D366] 
        focus:ring-opacity-50
        fixed 
        bottom-6 
        right-6
        flex 
        items-center 
        justify-center
        hover:rotate-[360deg]
        z-50
        ${className}
      `.trim()}
    >
      <FaWhatsapp />
    </button>
  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

WhatsAppButton.defaultProps = {
  message: '',
  size: 'md',
  className: ''
};

export default WhatsAppButton;