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
// const comentarios = [
//   {
//     id: 1,
//     nombre: 'Ana María Rodríguez',
//     ciudad: 'Culiacán, Sinaloa',
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     estrellas: 5,
//     texto: '"El Dr. Lelevier cambió mi vida. Después de mi embarazo, mis senos habían perdido volumen y firmeza. Gracias a su profesionalismo y habilidad, recuperé mi confianza. Los resultados fueron naturales y exactamente lo que buscaba."'
//   },
//   {
//     id: 2,
//     nombre: 'María López',
//     ciudad: 'Guadalajara, Jalisco',
//     avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
//     estrellas: 5,
//     texto: '"Me sentí acompañada y segura en todo momento. El resultado superó mis expectativas y ahora me siento mucho más feliz con mi cuerpo."'
//   },
//   {
//     id: 3,
//     nombre: 'Laura Méndez',
//     ciudad: 'Monterrey, Nuevo León',
//     avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
//     estrellas: 5,
//     texto: '"Excelente atención y resultados. Recomiendo al Dr. Lelevier a todas mis amigas. ¡Gracias por devolverme la confianza!"'
//   },
//   {
//     id: 4,
//     nombre: 'Patricia Gómez',
//     ciudad: 'CDMX',
//     avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
//     estrellas: 5,
//     texto: '"El mejor trato y profesionalismo. El proceso fue claro y los resultados increíbles. ¡Repetiría sin dudarlo!"'
//   }
// ];
// function ComentarioCard({nombre, ciudad, avatar, estrellas, texto}) {
//   return `
//     <div class="px-4">
//       <div class="w-[150px] md:w-[340px] h-[600px] rounded-[24px] overflow-hidden relative group shadow-lg">
//         <img src="${avatar}" alt="${nombre}" class="absolute inset-0 w-full h-full object-cover object-center transition scale-100 group-hover:scale-105 duration-300" />
//         <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
//         <div class="absolute left-0 bottom-0 w-full p-6 flex flex-col z-10">
//           <span class="text-white font-abhaya text-xl md:text-2xl">${nombre}</span>
//           <span class="text-gray-200 text-base font-montserrat">${ciudad}</span>
//           <div class="flex items-center gap-1 mt-2 mb-2">
//             <span class="text-yellow-400 text-lg">${'★'.repeat(estrellas)}</span>
//           </div>
//           <span class="text-gray-100 text-base font-montserrat mt-2">${texto}</span>
//         </div>
//       </div>
//     </div>
//   `;
// }

// function renderCarruselComentarios() {
//   const container = document.querySelector('.slick-carousel');
//   if (!container) return;
//   container.innerHTML = comentarios.map(ComentarioCard).join('');
// }

document.addEventListener('DOMContentLoaded', () => {
  // renderCarruselComentarios();
  // Inicializar slick
  $(function() {
    $('.slick-carousel').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '80px',
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '20px'
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