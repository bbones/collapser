<template>
    <div>
        <b-button id="open" v-b-toggle.my-collapse class="m-1">Toggle Collapse</b-button>
        <b-collapse visible id="my-collapse">
            <b-card>I should start open!</b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
