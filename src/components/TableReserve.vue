<template>
    <h4 class="d-inline-block text-primary text-uppercase bg-light py-1 px-2 text-center mx-auto d-flex justify-content-center">Reservation Table</h4>
    <h1 class="mb-4 text-center">Your appointments will be recorded that way</h1>
    <div class="container my-5">
      <table class="table table-striped table-bordered table-hover tabla-sm table-light thead-light">
        <thead>
          <tr>
            <th class="cuerpo">#Reserva</th>
            <th class="cuerpo">Fecha</th>
            <th class="cuerpo">Hora</th>
            <th class="cuerpo">Servicios</th>
            <th class="cuerpo">Costo</th>
            <th class="cuerpo">ID del Cliente</th>
          </tr>
        </thead>
        <tbody class="cuerpo">
          <tr v-for="(reservation, index) in reservations" :key="index">
            <td class="cuerpo">{{ reservation.reserva }}</td>
            <td class="cuerpo">{{ reservation.fecha }}</td>
            <td class="cuerpo">{{ reservation.hora }}</td>
            <td class="cuerpo">{{ reservation.servicios }}</td>
            <td class="cuerpo">{{ reservation.costo }}</td>
            <td class="cuerpo">{{ reservation.idCliente }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const reservations = ref([
    {
      reserva: '001',
      fecha: '2024-11-28',
      hora: '10:00 AM',
      servicios: 'Masaje, Sauna',
      costo: '$50',
      idCliente: 'A123'
    },
    {
      reserva: '002',
      fecha: '2024-11-29',
      hora: '02:00 PM',
      servicios: 'Facial, Manicure',
      costo: '$70',
      idCliente: 'B456'
    },
    {
      reserva: '003',
      fecha: '2024-11-29',
      hora: '05:00 PM',
      servicios: 'Facial, Skin care',
      costo: '$200',
      idCliente: 'B476'
    },
    {
      reserva: '004',
      fecha: '2024-11-30',
      hora: '01:00 PM',
      servicios: 'Body Treatment',
      costo: '$50',
      idCliente: 'B456'
    },
  ]);
  </script>
  
  <style scoped>
  .table {
    margin-top: 20px;
    background-color: lightcoral;
    border-color: black;
  }

  .cuerpo{
    background-color: rgb(241, 199, 199);
    border-color: black;
  }
  </style>
  