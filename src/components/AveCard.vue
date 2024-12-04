<template>
    <div class="card h-100">
        <img :src="ave.images.thumb" :alt="ave.name.spanish" class="card-image-top h-100">
        <div class="card-body">
            <h5 class="card-title">{{ ave.name.spanish }}</h5>
            <p class="card-text"><b>Nombre científico:</b> {{ ave.name.latin }}</p>
            <router-link class="btn btn-primary" :to="{
                name: 'ave-detalle',
                params: {
                    id: ave.uid
                }
            }">Ver detalles</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ave: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped></style>