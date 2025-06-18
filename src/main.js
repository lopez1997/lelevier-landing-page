// Acordeón FAQ simple
function toggleFaq(idx) {
    for (let i = 0; i < 5; i++) {
      const content = document.getElementById('faq-content-' + i);
      const icon = document.getElementById('faq-icon-' + i);
      if (i === idx) {
        const isOpen = !content.classList.contains('hidden');
        content.classList.toggle('hidden');
        icon.textContent = isOpen ? '+' : '-';
      } else {
        document.getElementById('faq-content-' + i).classList.add('hidden');
        document.getElementById('faq-icon-' + i).textContent = '+';
      }
    }
  }

// --- Carrusel de Testimonios ---

// Datos de comentarios de prueba
const comentarios = [
  {
    id: 1,
    nombre: 'Ana María Rodríguez',
    ciudad: 'Culiacán, Sinaloa',
    avatar: '/src/images/girl1.jpg',
    estrellas: 5,
    texto: '"El Dr. Lelevier cambió mi vida. Después de mi embarazo, mis senos habían perdido volumen y firmeza. Gracias a su profesionalismo y habilidad, recuperé mi confianza. Los resultados fueron naturales y exactamente lo que buscaba."'
  },
  {
    id: 2,
    nombre: 'María López',
    ciudad: 'Guadalajara, Jalisco',
    avatar: '/src/images/girl2.jpg',
    estrellas: 5,
    texto: '"Me sentí acompañada y segura en todo momento. El resultado superó mis expectativas y ahora me siento mucho más feliz con mi cuerpo."'
  },
  {
    id: 3,
    nombre: 'Laura Méndez',
    ciudad: 'Monterrey, Nuevo León',
    avatar: '/src/images/girl3.jpg',
    estrellas: 5,
    texto: '"Excelente atención y resultados. Recomiendo al Dr. Lelevier a todas mis amigas. ¡Gracias por devolverme la confianza!"'
  },
  {
    id: 4,
    nombre: 'Patricia Gómez',
    ciudad: 'CDMX',
    avatar: '/src/images/girl4.jpg',
    estrellas: 5,
    texto: '"El mejor trato y profesionalismo. El proceso fue claro y los resultados increíbles. ¡Repetiría sin dudarlo!"'
  },
  {
    id: 5,
    nombre: 'Fernando Ortiz',
    ciudad: 'México, D.F.',
    avatar: '/src/images/boy1.jpg',
    estrellas: 5,
    texto: '"El Dr. Lelevier es un profesional excepcional. Me ayudó a recuperar mi confianza y mi apariencia. ¡Gracias por todo!"'
  }
];
function ComentarioCard({nombre, ciudad, avatar, estrellas, texto}) {
  return `
    <div class=\"px-4\">
      <div class=\"w-[250px] md:w-[200px] h-[500px] rounded-[24px] overflow-hidden relative group shadow-lg\">
        <img src=\"${avatar}\" alt=\"${nombre}\" class=\"absolute inset-0 w-full h-full object-cover object-center transition scale-100 group-hover:scale-105 duration-300\" />
        <div class=\"absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent\"></div>
        <div class=\"absolute left-0 bottom-0 w-full p-6 flex flex-col z-10\">
          <span class=\"text-white font-abhaya text-sm md:text-sm\">${nombre}</span>
          <span class=\"text-gray-200 text-sm font-montserrat\">${ciudad}</span>
          <div class=\"flex items-center gap-1 mt-2 mb-2\">
            <span class=\"text-yellow-400 text-sm\">${'★'.repeat(estrellas)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCarruselComentarios() {
  const container = document.querySelector('.slick-carousel');
  if (!container) return;
  container.innerHTML = comentarios.map(ComentarioCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarruselComentarios();
  // Inicializar slick
  $(function() {
    $('.slick-carousel').slick({
      slidesToShow: 4,
      
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    // Controles personalizados
    document.getElementById('testimonial-prev').addEventListener('click', function() {
      $('.slick-carousel').slick('slickPrev');
    });
    document.getElementById('testimonial-next').addEventListener('click', function() {
      $('.slick-carousel').slick('slickNext');
    });
  });
});