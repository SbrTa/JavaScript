<template>
    <div>
        <h2>New</h2>
        <button @click="counter++">Increase</button>
        <p>Counter = {{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return{
                counter:0
            }
        }
    }
</script>

<style >

</style>
