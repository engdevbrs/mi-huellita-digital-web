export const SITE_CONFIG = {
  name: "Mi Huellita Digital",
  tagline: "Conectando corazones, cuidando vidas",
  description:
    "El carnet digital de tu mascota, siempre contigo. Guarda todo el historial médico en un solo lugar.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mihuellitadigital.com",
  email: "contacto@mihuellitadigital.cl",
};

export const SUBSCRIPTION_PLANS = [
  {
    id: "basico",
    name: "Básico",
    price: 600,
    priceLabel: "$600",
    period: "mes",
    description: "Plan ideal para dueños con una mascota",
    features: [
      { text: "1 mascota", included: true },
      { text: "10 análisis IA/mes", included: true },
      { text: "50 archivos por mascota", included: true },
      { text: "Soporte por email", included: true },
    ],
    popular: false,
    cta: "Comenzar",
  },
  {
    id: "estandar",
    name: "Estándar",
    price: 1100,
    priceLabel: "$1,100",
    period: "mes",
    description: "Plan para dueños con hasta 5 mascotas",
    features: [
      { text: "5 mascotas", included: true },
      { text: "20 análisis IA/mes", included: true },
      { text: "50 archivos por mascota", included: true },
      { text: "Soporte por email", included: true },
    ],
    popular: true,
    cta: "Comenzar",
  },
  {
    id: "intermedio",
    name: "Intermedio",
    price: 1600,
    priceLabel: "$1,600",
    period: "mes",
    description: "Plan ideal para dueños con varias mascotas",
    features: [
      { text: "8 mascotas", included: true },
      { text: "30 análisis IA/mes", included: true },
      { text: "50 archivos por mascota", included: true },
      { text: "Soporte por email", included: true },
    ],
    popular: false,
    cta: "Comenzar",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2100,
    priceLabel: "$2,100",
    period: "mes",
    description: "Plan para dueños con hasta 15 mascotas",
    features: [
      { text: "15 mascotas", included: true },
      { text: "50 análisis IA/mes", included: true },
      { text: "50 archivos por mascota", included: true },
      { text: "Soporte prioritario", included: true },
    ],
    popular: false,
    cta: "Comenzar",
  },
  {
    id: "empresarial",
    name: "Empresarial",
    price: 5100,
    priceLabel: "$5,100",
    period: "mes",
    description: "Plan para criaderos y refugios con hasta 50 mascotas",
    features: [
      { text: "50 mascotas", included: true },
      { text: "150 análisis IA/mes", included: true },
      { text: "50 archivos por mascota", included: true },
      { text: "Soporte dedicado", included: true },
      { text: "Reportes avanzados", included: true },
    ],
    popular: false,
    cta: "Contactar",
  },
];

export const FEATURES = [
  {
    title: "Acceso 24/7",
    description:
      "Consulta el historial médico de tu mascota en cualquier momento y lugar, desde cualquier dispositivo.",
    icon: "Zap",
    color: "orange",
  },
  {
    title: "Seguridad Total",
    description:
      "Datos encriptados con tecnología de nivel bancario. Tu información está completamente protegida.",
    icon: "Shield",
    color: "green",
  },
  {
    title: "QR Instantáneo",
    description:
      "Acceso inmediato al historial completo. Cualquier veterinario puede escanear y ver toda la información.",
    icon: "QrCode",
    color: "yellow",
  },
  {
    title: "Recordatorios",
    description:
      "Nunca olvides una vacuna o control. Recibe notificaciones automáticas para mantener a tu mascota protegida.",
    icon: "Bell",
    color: "orange",
  },
];

export const TESTIMONIALS = [
  {
    name: "María González",
    role: "Dueña de Max",
    content:
      "Max se lastimó jugando en el parque. Llegamos a la clínica de emergencia y el veterinario escaneó su QR. En segundos tuvo acceso a sus alergias a medicamentos, vacunas recientes y condiciones médicas. ¡Salvamos su vida en minutos!",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    role: "Dueño de Luna",
    content:
      "Nos mudamos de ciudad y tuvimos que cambiar de veterinario. Con Mi Huellita Digital, el nuevo doctor vio todo el historial de Luna desde que era cachorra. Transición sin complicaciones.",
    rating: 5,
  },
  {
    name: "Familia Rodríguez",
    role: "4 mascotas",
    content:
      "Tenemos 2 perros y 2 gatos, cada uno con sus vacunas, controles y necesidades diferentes. Con la app puedo ver todo en un solo lugar y nunca se me olvida una vacuna. Los recordatorios son una bendición.",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "¿Es seguro guardar la información médica de mi mascota en la nube?",
    answer:
      "Sí. Usamos encriptación AES-256, la misma que los bancos. Solo tú y los veterinarios autorizados pueden acceder a la información. Tus datos están completamente protegidos.",
  },
  {
    question: "¿Qué pasa si mi veterinario no usa la app?",
    answer:
      "Puedes compartir un código QR temporal que permite acceso al historial completo sin necesidad de registro. El veterinario solo escanea y ve toda la información.",
  },
  {
    question: "¿Puedo exportar el historial si dejo de usar la app?",
    answer:
      "Sí, puedes descargar todo el historial en PDF en cualquier momento, sin restricciones. Tus datos te pertenecen siempre.",
  },
  {
    question: "¿Funciona sin conexión a internet?",
    answer:
      "Para ver tu información sí. Para sincronizar nuevos datos necesitas conexión. El QR siempre funciona ya que genera un enlace web.",
  },
  {
    question: "¿Puedo tener múltiples mascotas en un solo plan?",
    answer:
      "Sí. El plan Estándar permite hasta 5 mascotas, el Intermedio hasta 8, Premium hasta 15 y Empresarial hasta 50.",
  },
  {
    question: "¿Hay costo por usar el código QR?",
    answer:
      "No, el QR es completamente gratuito e ilimitado. Es parte del servicio y puedes usarlo todas las veces que necesites.",
  },
];

