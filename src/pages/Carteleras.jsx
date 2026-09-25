import { useState } from "react";
import { actividades } from "../data/actividades";

export default function Cartelera({ inscripciones, onInscribir }) {
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  // Obtener categorías únicas dinámicamente
  const categorias = ["Todas", ...new Set(actividades.map((a) => a.categoria))];

  // Filtrar las actividades según el select
  const actividadesFiltradas = categoriaFiltro === "Todas"
    ? actividades
    : actividades.filter((act) => act.categoria === categoriaFiltro);

  return (
    <section>
      <h2>Cartelera de Actividades</h2>

      {/* Control de Filtro */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="filtro-categoria">Filtrar por categoría: </label>
        <select
          id="filtro-categoria"
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grilla de Actividades */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {actividadesFiltradas.map((act) => {
          // Validar si la actividad ya está en el arreglo de inscritos
          const yaInscrito = inscripciones.some((item) => item.id === act.id);

          return (
            <article
              key={act.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{act.nombre}</h3>
              <p><strong>Categoría:</strong> {act.categoria}</p>
              <p>{act.descripcion}</p>
              <p><strong>Cupos disponibles:</strong> {act.cupos}</p>
              
              {/* Condición para mostrar "Gratis" cuando el precio sea 0 */}
              <p>
                <strong>Precio:</strong>{" "}
                {act.precio === 0 ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>Gratis</span>
                ) : (
                  `$${act.precio.toLocaleString("es-CL")}`
                )}
              </p>

              {/* Botón que se inhabilita si ya se encuentra inscrito */}
              <button
                onClick={() => onInscribir(act)}
                disabled={yaInscrito}
                style={{
                  padding: "8px 12px",
                  cursor: yaInscrito ? "not-allowed" : "pointer",
                }}
              >
                {yaInscrito ? "Ya inscrito" : "Inscribirme"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}