import img from './rudo.webp'
import img1 from './rudo1.webp'
import img2 from './Cable-Uso-Rudo-SJT-33.jpg'
console.log('importando archivo 1')

const info = {
  id: 'uno',
  cover: img2,
  images: [img, img1],
  brand: 'Condulac',

  title: 'Cable uso rudo tipo SJT',
  description: `Conductores flexibles de cobre suave, aislamiento a base de policloruro de vinilo  y cubierta exterior de policloruro de vinilo estriada en color negro.
  
  Se recomienda su uso general en instalaciones fijas, visibles, directamente situadas sobre muros o paredes para aparatos pequeños, incluyendo bocinas fijas y timbres.
  `,

  tecnicalData: [
    'Conductores flexibles de cobre suave',
    'Aislamiento a base de policloruro de vinilo (PVC) ',
    'Cubierta exterior de policloruro de vinilo (PVC)',
  ],
  technicalFile: '/fichasTecnicas/electricidad/condulac-rudo.pdf',
}
export default info
