<template>
    <div>
        <h5 v-randomColor>{{ title }}</h5>
        <div class="d-flex gap-2">
            <div>
                <img :src="`/${carDetails.img}`" height="390">
            </div>
            <div class="container text-center bg-light text-primary">
            <div class="row">
                <div class="col">
                    ID
                </div>
                <div class="col">
                    {{ carDetails.id }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    YEAR
                </div>
                <div class="col">
                    {{ carDetails.year }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    MAKE
                </div>
                <div class="col">
                    {{ carDetails.make }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    MODEL
                </div>
                <div class="col">
                    {{ carDetails.model }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    DOORS
                </div>
                <div class="col">
                    {{ carDetails.doors }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    LENGTH
                </div>
                <div class="col">
                    {{ carDetails.length }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    WIDTH
                </div>
                <div class="col">
                    {{ carDetails.width }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    SEATS
                </div>
                <div class="col">
                    {{ carDetails.seats }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    HEIGHT
                </div>
                <div class="col">
                    {{ carDetails.height }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    WHEEL BASE
                </div>
                <div class="col">
                    {{ carDetails.wheel_base }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    GROUND CLEARANCE
                </div>
                <div class="col">
                    {{ carDetails.ground_clearance }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    CARGO CAPACITY
                </div>
                <div class="col">
                    {{ carDetails.cargo_capacity }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    GROSS WEIGHT
                </div>
                <div class="col">
                    {{ carDetails.gross_weight }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    ENGINE TYPE
                </div>
                <div class="col">
                    {{ carDetails.engine_type }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    FUEL TYPE
                </div>
                <div class="col">
                    {{ carDetails.fuel_type }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    CYLENDERS
                </div>
                <div class="col">
                    {{ carDetails.cylinders }}
                </div>
            </div>

        </div>
        </div>         
    </div>
</template>
<script setup>
const title = 'Car Details By ID'
const { id } = useRoute().params
console.log(id)
const { data: carDetails } = await useFetch('/api/cars/' + id)

</script>