<template>
    <div>
        <NuxtWelcome />
    </div>
</template>
<script>
export default {
    mounted() {
        const logo = document.getElementsByClassName("nuxt-logo")
        logo[0].href = "/precing"
        logo[0].target = ""
    }
}
</script>