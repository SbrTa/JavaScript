<template>
    <div>
        <h3>Some User Details</h3>
        <hr>
        <p>Loaded User: {{$route.params.id}}</p>

        <router-link
                tag="button"
                :to="{name: 'userEdit', params: {id: $route.params.id}}"
                class="btn btn-primary">Edit</router-link>
    </div>
</template>
