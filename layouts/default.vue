<template>
    <header>
        <!--Nav bar section-->
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a class="navbar-brand" href="#">
                <h1>CarCare</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav-bar nav">
                    <li class="nav-item active">
                        <!-- Home link redirects to HomePage component-->
                        <NuxtLink to="/" class="nav-link">{{ headers.home }}</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <!-- make link redirects to CarMake component-->
                        <NuxtLink to="/make" class="nav-link">{{ headers.make }}</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <!-- model link redirects to CarModel component-->
                        <router-link to="/model" class="nav-link">{{ headers.model }}</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- new arrival link redirects to New Arrivals component-->
                        <NuxtLink to="/newArrival" class="nav-link">{{ headers.newArrivals }}</NuxtLink>
                    </li>
                    <li class="nav-item me-5">
                        <!-- type link redirects to Type component-->
                        <NuxtLink to="/type" class="nav-link">{{ headers.type }}</NuxtLink>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-primary" type="submit">{{ headers.search }}</button>
                </form>
            </div>
        </nav>
    </header>
    <div>
        <slot />
    </div>
</template>
<script setup>
   const headers = {home: 'Home', make: 'Make', model: 'Model', newArrivals: 'New Arrivals', type: 'Type', search: 'Search'}
   
</script>
