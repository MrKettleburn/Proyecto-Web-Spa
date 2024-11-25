<template>
<!-- Navbar Start -->
<div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 text-primary"><span class="text-dark">SPA</span> Center</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <router-link to="/" class="nav-item nav-link active" >Home</router-link>
                    <router-link to="/about" class="nav-item nav-link active" >About</router-link>
                    <router-link to="/services" class="nav-item nav-link active" >Services</router-link>
                </div>
                <a href="" class="btn btn-primary d-none d-lg-block">Login</a>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->
<RouterView/>
</template>


<style lang="scss" scoped>

</style>