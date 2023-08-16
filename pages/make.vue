<template>
    <div>
      <h5 class="bg-warning" v-randomColor>{{ title }}</h5>
      <div style="display: flex; gap: 10px; margin-left: 12px;">
      <input class="col-xs-2" type="text" v-model="search" placeholder="Search"> 
      <p> Search Input: {{ search }}</p>
    </div>
      <table class="table table-success table-striped">
        <thead class="table-dark">
            <tr>
          <!--XS size for mobile devices view-->
          <th class="col">ID' S</th>
          <!--SM size for Tab devices view-->
          <th class="col">Year</th>
          <th class="col">Make</th>
          <!--MD size for desktop devices view-->
          <th class="col">Model</th>
          <th class="col">Type</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(car, index) in filteredCars" :key="index">
          <td><NuxtLink :to="`/${car.id}`">{{ car.id }}</NuxtLink></td>
          <td>{{ car.year }}</td>
          <td>{{ car.make }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.type }}</td>
        
        </tr>
    </tbody>
  
      
    </table>
</div>
  </template>
  
  <script setup>
    const title = 'Fetching User Data from API into Grid'
    const {data: cars} = await useFetch('/api/cars')
    console.log(cars)
    console.log(cars.value)
    const search = ref(''); 
    
    const filteredCars = computed(()=> {           
            return cars.value.data.filter((car)=> {
                
                return (car.make.toLowerCase().match(search.value.toLowerCase()) ||
                car.model.toLowerCase().match(search.value.toLowerCase()) ||
                car.type.toLowerCase().match(search.value.toLowerCase()) ||
                car.id.toString().toLowerCase().match(search.value.toLowerCase()) ||
                car.year.toString().toLowerCase().match(search.value.toLowerCase())
                );
            })
    })
        

   
    
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .table {
    margin: 15px;
  }
  
  h5 {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  