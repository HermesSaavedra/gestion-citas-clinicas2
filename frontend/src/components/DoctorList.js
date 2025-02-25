import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function DoctorList() {
  const [doctores, setDoctores] = useState([]);

  const obtenerDoctores = async () => {
    const { data, error } = await supabase.from("doctores").select("*");

    if (error) {
      console.error("Error al obtener doctores:", error);
    } else {
      setDoctores(data);
    }
  };

  return (
    <div className="doctor-list">
      <button onClick={obtenerDoctores} className="button-doctors">
        Ver Doctores
      </button>
      {doctores.length > 0 && (
        <ul>
          {doctores.map((doctor) => (
            <li key={doctor.id}>
              {doctor.nombre} {doctor.apellido} - {doctor.especialidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DoctorList;
