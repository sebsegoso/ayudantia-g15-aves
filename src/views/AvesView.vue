<template>
    <div>
        <h1>Todas las aves</h1>
        
        <ul>
            <li v-for="ave in aves" :key="ave.uid">
                <router-link :to="{
                    name: 'ave-detalle',
                    params: {
                        id: ave.uid
                    }
                }">{{ ave.name.spanish }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(["aves"])
    }
}
</script>

<style scoped></style>