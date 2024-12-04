<template>
    <div v-if="ave" class="ave-details container">
        <!-- cabecera -->
        <h1 class="ave-details__title text-primary">{{ nombreEspaniol }}</h1>
        <p class="ave-details__latin text-muted fst-italic">
            <b>Nombre científico:</b> {{ ave.name.latin }}
        </p>

        <div class="row">
            <!-- imagen principal -->
            <img :src="ave.images.main" :alt="nombreEspaniol" class="col-12 col-md-8 ave-details__section">
            <!-- distribución -->
            <section class="col-12 col-md-4 ave-details__section">

                <h3>Distribución</h3>
                <p>{{ ave.map.title }}</p>
                <img :src="ave.map.image" :alt="nombreEspaniol">
            </section>

            <!-- habitat -->
            <section class="col-12 col-md-6 ave-details__section">
                <h3>Habitat</h3>
                <p>{{ ave.habitat }}</p>
            </section>
            <!-- estado de conservación -->
            <section class="col-12 col-md-6 ave-details__section">
                <h3>Estado de conservación</h3>
                <h4>{{ ave.iucn.title }}</h4>
                <p>{{ ave.iucn.description }}</p>
            </section>
            <!-- dato curioso -->
            <section class="col-12 ave-details__section">
                <h3>¿Sabías que?</h3>
                <p>{{ ave.didyouknow }}</p>
            </section>


            <section class="col-12 ave-details__section">
                <h3>Información adicional</h3>
                <table class="table">
                    <tr>
                        <th>
                            Orden
                        </th>
                        <td>
                            {{ ave.order }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Especie
                        </th>
                        <td>
                            {{ ave.species }}
                        </td>
                    </tr>
                </table>
            </section>
        </div>
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
    computed: {
        nombreEspaniol() {
            return this.ave.name.spanish
        }
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

<style scoped lang="scss">
.ave-details {
    padding-bottom: 10vh;

    &__title {
        font-weight: bold;
        font-size: 2.5rem;
    }

    &__latin {
        font-size: 1rem;
    }

    &__section {
        margin-block: 2rem;
    }
}
</style>