<template>
    <div>
        <h2>Blog</h2>
        <Latest :posts="posts" />
        <Posts :posts="posts" :count="postCount" @showMore="this.showMore" />
    </div>
</template>

<script>
import Latest from '../components/Latest';
import Posts from '../components/Posts';

export default {
    name: 'Blog',
    data () {
        return {
            API_URL: "http://localhost:3000/api/",
           posts: [],
           postCount: 6
        }
    },
    components: {
        Latest,
        Posts,
    },
    methods: {
        getPosts () {
            fetch(this.API_URL + "posts/all")
            .then(data => {
                return data.json();
            })
            .then(json => {
                this.posts = json.result;
                this.post = this.posts.sort(function (a, b) {
                    if (a.timestamp < b.timestamp) {
                        return 1;
                    }
                    if (a.timestamp > b.timestamp) {
                        return -1;
                    }
                    return 0;
                });
            });
        },

    },
    beforeMount () {
        this.getPosts();
    }
}
</script>

<style>

</style>