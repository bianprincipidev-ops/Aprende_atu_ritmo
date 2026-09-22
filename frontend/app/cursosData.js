export const cursos = [
  // --- CATEGORÍA 1: DINERO Y FINANZAS ---
  {
    id: "educacion-financiera",
    titulo: "Educación Financiera",
    categorias: ["dinero-y-finanzas"],
    combos: ["combo-finanzas-completo", "super-pack-emprendedor"],
    linkCheckout: "/checkout/educacion-financiera",
    precio: 15000,
    badge: "Finanzas"
  },
  {
    id: "optimiza-tu-dinero",
    titulo: "Optimiza tu Dinero",
    categorias: ["dinero-y-finanzas"],
    combos: ["combo-finanzas-completo", "super-pack-emprendedor"],
    linkCheckout: "/checkout/optimiza-tu-dinero",
    precio: 15000,
    badge: "Finanzas"
  },
  {
    id: "bono-plan-5-pasos",
    titulo: "Bono - Plan de 5 pasos para ordenar tus finanzas",
    categorias: ["dinero-y-finanzas"],
    combos: ["combo-finanzas-completo", "super-pack-emprendedor"],
    linkCheckout: "/checkout/bono-plan-5-pasos",
    precio: 0,
    badge: "Bono"
  },

  // --- CATEGORÍA 2: VENTAS, MARKETING, ÉXITO Y NEGOCIOS ---
  {
    id: "ventas-y-marketing",
    titulo: "Ventas y Marketing",
    categorias: ["ventas-marketing-exito-negocios", "marketing-y-estrategia"],
    combos: ["combo-fotografo-emprendedor", "super-pack-emprendedor"],
    linkCheckout: "/checkout/ventas-y-marketing",
    precio: 18000,
    badge: "Ventas"
  },
  {
    id: "el-lucrativo-arte-de-hacer-clientes",
    titulo: "El Lucrativo Arte de Hacer Clientes",
    categorias: ["ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/el-lucrativo-arte-de-hacer-clientes",
    precio: 18000,
    badge: "Negocios"
  },
  {
    id: "exito-y-negocios",
    titulo: "Éxito y Negocios",
    categorias: ["ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/exito-y-negocios",
    precio: 18000,
    badge: "Negocios"
  },
  {
    id: "negocios-e-inversiones",
    titulo: "Negocios e Inversiones",
    categorias: ["ventas-marketing-exito-negocios", "dinero-y-finanzas"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/negocios-e-inversiones",
    precio: 20000,
    badge: "Inversiones"
  },
  {
    id: "consejos-para-vender-mas-y-mejor",
    titulo: "Consejos para vender más y mejor",
    categorias: ["ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/consejos-para-vender-mas-y-mejor",
    precio: 0,
    badge: "Bono"
  },
  {
    id: "tecnicas-de-ventas",
    titulo: "Técnicas de Ventas",
    categorias: ["ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/tecnicas-de-ventas",
    precio: 0,
    badge: "Bono"
  },
  {
    id: "estrategias-de-ventas-whatsapp",
    titulo: "Estrategias de ventas por WhatsApp",
    categorias: ["ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/estrategias-de-ventas-whatsapp",
    precio: 0,
    badge: "Bono"
  },
  {
    id: "material-sobre-dropshipping",
    titulo: "Material sobre Dropshipping",
    categorias: ["ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/material-sobre-dropshipping",
    precio: 0,
    badge: "Bono"
  },

  // --- CATEGORÍA 3: HÁBITOS Y PRODUCTIVIDAD ---
  {
    id: "habitos-y-productividad",
    titulo: "Hábitos y Productividad",
    categorias: ["habitos-y-productividad"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/habitos-y-productividad",
    precio: 15000,
    badge: "Productividad"
  },

  // --- CATEGORÍA 4: MARKETING Y ESTRATEGIA ---
  {
    id: "marketing-y-multinivel",
    titulo: "Marketing y Multinivel",
    categorias: ["marketing-y-estrategia", "ventas-marketing-exito-negocios"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/marketing-y-multinivel",
    precio: 18000,
    badge: "Marketing"
  },

  // --- CATEGORÍA 5: TRADING Y BOLSA ---
  {
    id: "trading-forex-mercado-bursatil",
    titulo: "Trading, Forex y Mercado Bursátil",
    categorias: ["trading-y-bolsa", "dinero-y-finanzas"],
    combos: ["super-pack-emprendedor"],
    linkCheckout: "/checkout/trading-forex-mercado-bursatil",
    precio: 25000,
    badge: "Trading"
  },

  // --- CATEGORÍA 6: BIENESTAR Y OFICIOS ---
  {
    id: "fotografia",
    titulo: "Fotografía",
    categorias: ["bienestar-y-oficios", "ventas-marketing-exito-negocios"],
    combos: ["combo-fotografo-emprendedor"],
    linkCheckout: "/checkout/fotografia",
    precio: 16000,
    badge: "Oficios"
  },
  {
    id: "grafologia",
    titulo: "Grafología",
    categorias: ["bienestar-y-oficios"],
    combos: [],
    linkCheckout: "/checkout/grafologia",
    precio: 15000,
    badge: "Bienestar"
  },
  {
    id: "motos",
    titulo: "Motos",
    categorias: ["bienestar-y-oficios"],
    combos: ["combo-seguridad-en-moto"],
    linkCheckout: "/checkout/motos",
    precio: 14000,
    badge: "Oficios"
  },
  {
    id: "primeros-auxilios",
    titulo: "Primeros Auxilios",
    categorias: ["bienestar-y-oficios"],
    combos: ["combo-seguridad-en-moto"],
    linkCheckout: "/checkout/primeros-auxilios",
    precio: 14000,
    badge: "Bienestar"
  },
  {
    id: "tarot",
    titulo: "Tarot",
    categorias: ["bienestar-y-oficios"],
    combos: ["combo-bienestar"],
    linkCheckout: "/checkout/tarot",
    precio: 15000,
    badge: "Bienestar"
  },
  {
    id: "yoga",
    titulo: "Yoga",
    categorias: ["bienestar-y-oficios"],
    combos: ["combo-bienestar"],
    linkCheckout: "/checkout/yoga",
    precio: 15000,
    badge: "Bienestar"
  }
];

export const combosTematicos = [
  {
    id: "combo-fotografo-emprendedor",
    titulo: "Combo Fotógrafo Emprendedor",
    descripcion: "Fotografía + Ventas y Marketing combinadas para despegar tu estudio o servicios.",
    cursosIncluidos: ["fotografia", "ventas-y-marketing"],
    precio: 26000,
    linkCheckout: "/checkout/combo-fotografo-emprendedor"
  },
  {
    id: "combo-bienestar",
    titulo: "Combo Bienestar",
    descripcion: "Yoga + Tarot para equilibrar mente, cuerpo y espiritualidad.",
    cursosIncluidos: ["yoga", "tarot"],
    precio: 24000,
    linkCheckout: "/checkout/combo-bienestar"
  },
  {
    id: "combo-seguridad-en-moto",
    titulo: "Combo Seguridad en Moto",
    descripcion: "Motos + Primeros Auxilios, esencial para conductores precavidos y viajeros.",
    cursosIncluidos: ["motos", "primeros-auxilios"],
    precio: 22000,
    linkCheckout: "/checkout/combo-seguridad-en-moto"
  },
  {
    id: "combo-finanzas-completo",
    titulo: "Combo Finanzas Completo",
    descripcion: "Educación financiera + Optimiza tu dinero + Bono plan de 5 pasos.",
    cursosIncluidos: ["educacion-financiera", "optimiza-tu-dinero", "bono-plan-5-pasos"],
    precio: 25000,
    linkCheckout: "/checkout/combo-finanzas-completo"
  }
];

export const superPackEmprendedor = {
  id: "super-pack-emprendedor",
  titulo: "Super Pack Emprendedor (Todo Incluido)",
  descripcion: "Contiene TODAS las categorías de Dinero, Negocios, Ventas, Hábitos y Trading + todos los bonos exclusivos.",
  linkCheckout: "/checkout/super-pack-emprendedor",
  precio: 65000,
  badge: "Más elegido"
};