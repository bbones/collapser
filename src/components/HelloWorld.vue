<template>
    <div>
        <b-button id="open" v-b-toggle.my-collapse class="m-1" @toggle="onClick">Toggle Collapse</b-button>
        <b-collapse visible id="my-collapse" @show="onShow" @hide="onHide">
            <b-card>I should start open!</b-card>
        </b-collapse>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',

    methods: {
        onClick(data) {
            console.log('Toggle', data)
        },
        onShow() {
            console.log("Show")
        },
        onHide() {
            console.log("Hide")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
