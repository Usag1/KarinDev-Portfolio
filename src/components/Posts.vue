<template>
    <div class="posts">
        <div class="post" v-for="post in posts.slice(6, count)" :key="post._id">
            <h3>{{ post.title }}</h3>
        </div>
        <button class="load" @click="$emit('showMore')" v-if="count < posts.length">See More</button>
    </div>
</template>

<script>
    export default {
        name: 'posts',
        props: ['posts', 'count']
    }
</script>

<style scoped>
.posts {
    width: 100%;
    margin: 0 auto;
}
.post {
    display: block;
    padding: 15px;
    background: none;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
    margin-bottom: 15px;
}
.load {
    display: block;
    width: 100%;
    max-width: 250px;
    height: 50px;
    margin: 0 auto;
    outline: none;
    border: none;
    border-radius: 4px;
    appearance: none;
    background: #00838F;
    color: #212121;
    cursor: pointer;
    font-size: 1.25rem;
    padding-top: 7px;
    box-sizing: border-box;
}
.load:hover {
  box-shadow: 0 0 8px 2px #00838F; 
}
</style>