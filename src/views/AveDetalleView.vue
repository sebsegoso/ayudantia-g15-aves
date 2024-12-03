<template>
    <div v-if="ave">
        <h1>{{ ave.name.spanish }}</h1>
    </div>
    <p v-else>Cargando información...</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            ave: null
        }
    },

    methods: {
        ...mapActions(["fetchAveDetalle"])
    },
    async mounted() {
        const id = this.$route.params.id;
        const data = await this.fetchAveDetalle(id)

        if (!data) {
            this.$router.push({ name: "not-found" })
        }
        this.ave = data


    }
}
</script>

<style scoped></style>