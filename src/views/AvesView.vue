<template>
    <div class="container">
        <h1>Todas las aves</h1>

        <div class="row">

            <div v-for="ave in aves" :key="ave.uid" class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <AveCard :ave="ave" />
            </div>
        </div>
    </div>
</template>

<script>
import AveCard from '@/components/AveCard.vue';
import { mapState } from 'vuex';

export default {
    components: { AveCard },
    computed: {
        ...mapState(["aves"])
    }
}
</script>

<style scoped></style>