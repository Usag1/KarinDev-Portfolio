<template class="contact">
    <div class="contact-content">
        <h2 class="page-title">Contact Me</h2>
        <p>If you have any job offers, questions or concerns<br>please feel free to contact me</p>
        <div class="container">
            <form class="card">
                <div>
                    <label class="label" for="name">Full Name</label>
                    <input type="text" name="name" id="name" required="">
                </div>
                <div>
                    <label class="label" for="email">Email</label>
                    <input type="email" name="email" id="email" required="">
                </div>
                <div>
                    <label class="label" for="textarea">Message</label>
                    <textarea class="message" name="textarea" id="textarea" required=""></textarea>
                </div>
                <div class="button">
                    <input type="submit" value="Send">
                </div>
            </form>
            <section class="infor-box">
                <h3>Contact Information</h3>
                    <div class="information">
                        <h4>E-mail</h4>
                        <p>karin-dev@protonmail.com</p>
                        <h4>Base</h4>
                        <p>Copenhagen, Denmark / Tokyo, Japan</p>
                        <p>I'm based in Copenhagen lately</p>
                    </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact'

    }
</script>

<style scoped>
.contact {
    align-items: center;
}
p {
    font-size: 1rem;
    margin-top: 20px;
}
.card {
    text-align: left;
    color: #757575;
    font-size: 16px;
    padding: 20px 20px;
    border-radius: 4px;
    margin: 50px auto;
    min-width: 100px;
    max-width: 600px;
    background: #fff;
    box-shadow:  6px 8px 4px 0 rgba(255, 255, 255, .3);
    
    }
.label {
    font-size: 1.125rem;
    margin: 10px 0 5px 300px;
    display: block;
}
input[type="text"],
input[type="email"],
textarea {
    background: rgba(0, 131, 143, .04);
    border: 1px solid #cfd9db;
    border-radius: 0.25em;
    padding: 12px;
    font-size: 1rem;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .08); 
    margin-left: 300px;
    min-width: 250px;
}
textarea {
    min-height: 120px;
    max-width: 250px;
    resize: vertical;
    overflow: auto;
}
input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline: none;
    border-color: #006064;
    box-shadow: 0 0 5px rgba(0, 96, 100, .2);
}
input[type="submit"] {
    margin: 10px 0 0 400px;
    border: none;
    background: #00838F;
    border-radius: 0.25em;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    appearance: none;
}
input[type="submit"]:active {
    transform: scale(0.9);
}
.infor-box {
    text-align: center;
    padding: 15px;
    border-radius: 4px;
    background-image: linear-gradient(45deg, #26C6DA, #00838F, #006064);
    height: 260px;
    width: 310px;
    position: absolute;
    top: 18%;
    right: 55%;
    z-index: 2;
}
.container {
    position: relative;
}
</style>
