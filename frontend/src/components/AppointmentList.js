import React from 'react';

function AppointmentList() {
  const appointments = [
    { id: 1, patient: "Juan Pérez", date: "2025-02-25", doctor: "Dr. Gómez" },
    { id: 2, patient: "María López", date: "2025-02-26", doctor: "Dr. Sánchez" },
  ];

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patient} - {appointment.date} - {appointment.doctor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
