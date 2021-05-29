<template>
    <section class="latest">
        <h3>Latest Posts</h3>
        <div class="posts" v-if="posts.length >= 6">
            <div class="post">
                <div class="image" :style="{ backgroundImage: `url('${require('../assets/html5-logo.png')}')` }"></div>
                <h4 :title="posts[1].title">{{ posts[1].title }}</h4>
            </div>
            <div class="post col-2 row-2">
                <div class="image" :style="{ backgroundImage: `url('${require('../assets/css3-logo.png')}')` }"></div>
                <h4 :title="posts[0].title">{{ posts[0].title }}</h4>
            </div>
            <div class="post row-2">
                <div class="image" :style="{ backgroundImage: `url('${require('../assets/JS-logo.png')}')` }"></div>
                <h4 :title="posts[2].title">{{ posts[2].title }}</h4>
            </div>
            <div class="post row-2">
                <div class="image" :style="{ backgroundImage: `url('${require('../assets/React.js-logo.png')}')` }"></div>
                <h4 :title="posts[3].title">{{ posts[3].title }}</h4>
            </div>
            <div class="post">
                <div class="image" :style="{ backgroundImage: `url('${require('../assets/Vue-logo.png')}')` }"></div>
                <h4 :title="posts[4].title">{{ posts[4].title }}</h4>
            </div>
            <div class="post col-2">
                <div class="image" :style="{ backgroundImage: `url('${require('../assets/node.js-logo.png')}')` }"></div>
                <h4 :title="posts[5].title">{{ posts[5].title }}</h4>
            </div>
        </div>
        <div class="posts" v-else>
            <p>Comming soon...</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'latest',
    props: ['posts']
}
</script>

<style scoped>
.latest {
    display: block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
}
.posts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 196px);
    grid-gap: 30px;
    margin: 15px;
}
.post {
    display: flex;
    flex-direction: column;
    background: none;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
}
.col-2 {
    grid-column: span 2;
}
.row-2 {
    grid-row: span 2;
}
.image {
    flex: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
h4 {
    box-sizing: border-box;
    padding: 3px 15px 0;
    height: 50px;
    line-height: 50px;
    margin: 0;
    overflow: hidden;
    font-size: 20px;
    font-weight: 400;
    text-overflow: ellipsis;
}
</style>