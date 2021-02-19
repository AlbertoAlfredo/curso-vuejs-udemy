<template>
    <div>
        <input type="text" :value="getClubName" @keyup="updateClubName($event.target.value)" class="form-control" placeholder="Digite seu clube">
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: mapGetters(['getClubName']),
    methods: mapActions(['updateClubName']),
}
</script>
<style scoped>

</style>