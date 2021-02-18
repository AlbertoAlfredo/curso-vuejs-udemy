<template>
    <div>
        <input type="text" :value="value" @keyup="$emit('input', $event.target.value)" class="form-control" placeholder="Digite sue clube">
    </div>
</template>
<script>
export default {
    props: {
        value: String,
    }
}
</script>
<style scoped>

</style>