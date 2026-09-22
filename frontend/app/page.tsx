'use client';
import React, { useState } from 'react';
import { cursos, combosTematicos, superPackEmprendedor } from './cursosData';

export default function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

  // Filtrar cursos según la categoría activa en el sidebar
  const cursosFiltrados = categoriaSeleccionada === 'todos'
    ? cursos
    : cursos.filter(curso => curso.categorias.includes(categoriaSeleccionada));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* HEADER */}
      <header className="header-container">
        <div className="header-content">
          <h1 className="header-logo">Aprende a tu ritmo</h1>
          <nav className="header-nav">
            <a href="#catalogo" className="header-link">Cursos</a>
            <a href="#combos" className="header-link">Combos Temáticos</a>
            <a href="#super-pack" className="text-[#F97316] font-extrabold">Super Pack</a>
          </nav>
          <button className="btn-primary">Ver Mis Cursos</button>
        </div>
      </header>

      {/* SECCIÓN HERO / SUPER PACK DESTACADO */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-blue-900 text-white py-16 px-4 mb-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block shadow-md">
            {superPackEmprendedor.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            {superPackEmprendedor.titulo}
          </h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {superPackEmprendedor.descripcion}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <span className="text-3xl font-extrabold text-[#F97316]">${superPackEmprendedor.precio} ARS</span>
            <a href={superPackEmprendedor.linkCheckout} className="btn-primary text-lg px-8 py-3.5 shadow-xl">
              Obtener Super Pack Ahora
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL (CATÁLOGO + SIDEBAR) */}
      <main id="catalogo" className="catalog-layout">
        
        {/* SIDEBAR DE CATEGORÍAS */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Categorías</h3>
          <div className="sidebar-menu">
            <button 
              onClick={() => setCategoriaSeleccionada('todos')}
              className={categoriaSeleccionada === 'todos' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              🔥 Todos los cursos
            </button>
            <button 
              onClick={() => setCategoriaSeleccionada('dinero-y-finanzas')}
              className={categoriaSeleccionada === 'dinero-y-finanzas' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              Dinero y Finanzas
            </button>
            <button 
              onClick={() => setCategoriaSeleccionada('ventas-marketing-exito-negocios')}
              className={categoriaSeleccionada === 'ventas-marketing-exito-negocios' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              Ventas, Marketing y Negocios
            </button>
            <button 
              onClick={() => setCategoriaSeleccionada('habitos-y-productividad')}
              className={categoriaSeleccionada === 'habitos-y-productividad' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              Hábitos y Productividad
            </button>
            <button 
              onClick={() => setCategoriaSeleccionada('marketing-y-estrategia')}
              className={categoriaSeleccionada === 'marketing-y-estrategia' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              Marketing y Estrategia
            </button>
            <button 
              onClick={() => setCategoriaSeleccionada('trading-y-bolsa')}
              className={categoriaSeleccionada === 'trading-y-bolsa' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              Trading y Bolsa
            </button>
            <button 
              onClick={() => setCategoriaSeleccionada('bienestar-y-oficios')}
              className={categoriaSeleccionada === 'bienestar-y-oficios' ? 'sidebar-item-active text-left' : 'sidebar-item text-left'}
            >
              Bienestar y Oficios
            </button>
          </div>
        </aside>

        {/* GRILLA DE CURSOS */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center border-b pb-4">
            <h3 className="text-2xl font-bold text-[#1E3A8A]">Catálogo de Cursos</h3>
            <span className="text-sm text-slate-500 font-medium">{cursosFiltrados.length} cursos disponibles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosFiltrados.map((curso) => (
              <div key={curso.id} className="course-card">
                <div className="course-card-img-placeholder flex items-center justify-center text-slate-400 font-semibold bg-slate-100">
                  {curso.titulo}
                </div>
                <div className="course-card-content">
                  <span className="course-badge">{curso.badge}</span>
                  <h3 className="course-title text-lg">{curso.titulo}</h3>
                  
                  <div className="course-footer mt-auto pt-4">
                    <span className="course-price text-xl">
                      {curso.precio === 0 ? "GRATIS (Bono)" : `$${curso.precio}`}
                    </span>
                    <a href={curso.linkCheckout} className="btn-primary text-sm py-2 px-4">
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* SECCIÓN DE COMBOS TEMÁTICOS */}
      <section id="combos" className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#1E3A8A]">Combos Temáticos Especiales</h2>
          <p className="text-slate-600 mt-2">Llevate packs armados de 2 o 3 cursos con beneficios exclusivos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {combosTematicos.map((combo) => (
            <div key={combo.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="bg-orange-100 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                  Combo Ahorro
                </span>
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{combo.titulo}</h3>
                <p className="text-sm text-slate-600 mb-6">{combo.descripcion}</p>
              </div>
              <div className="border-t pt-4 flex items-center justify-between">
                <span className="text-xl font-extrabold text-[#1E3A8A]">${combo.precio}</span>
                <a href={combo.linkCheckout} className="btn-secondary text-sm py-2 px-4">
                  Ver Combo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-8 mt-auto text-center text-sm text-slate-400">
        <p>© 2026 Aprende a tu ritmo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}