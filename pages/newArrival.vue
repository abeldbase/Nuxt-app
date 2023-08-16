<template>
    <div>
      <carousel :carousels="carousels"/>
    </div>
  </template>
  
  <script>
 
  export default {
    data() {
    return {
        carousels: {
        title: 'New Arrivals',
        images: [{ title: 'Fantasy', alt: 'Fantasy', src: "Fantasy.jpg" }, { title: 'AudiStyle', alt: 'AudiStyle', src: 'AudiStyle.jpg' }, { title: 'Racer', alt: 'Racer', src: 'Racer.jpg' }]
      }
    }
  },
}
  </script>
  <style scoped>
  </style>