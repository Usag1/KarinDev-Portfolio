<template class="contact">
    <div class="contact-content">
        <h2 class="page-title">Contact Me</h2>
        <p>If you have any job offers, questions or concerns<br>please feel free to contact me</p>
        <form class="card">
            <div class="">
                <label class="label" for="name">Full Name</label>
                <input type="text" name="name" id="name" required="">
            </div>
            <div class="content">
                <label class="label" for="email">Email</label>
                <input type="email" name="email" id="email" required="">
            </div>
            <div class="content">
                <label class="label" for="textarea">Message</label>
                <textarea class="message" name="textarea" id="textarea" required=""></textarea>
            </div>
            <div class="button">
                <input type="submit" value="Send">
            </div>
        </form>
        <div class="information">
            <h3>Contact Information</h3>
                <div>E-mail</div>
                <p>karin-dev@protonmail.com</p>
                <div>Base</div>
                <p>Copenhagen, Denmark / Tokyo, Japan</p>
                <p>I'm based in Copenhagen lately</p>
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
    margin-top: 10px;
}
form {
    text-align: left;
    color: #757575;
    font-size: 16px;
    padding: 20px 20px;
    border-radius: 4px;
    margin: 28px auto;
    min-width: 100px;
    max-width: 500px;
    background: #fff;
    box-shadow:  6px 8px 4px 0 rgba(255, 255, 255, .3);
    }
.contents {
    display: flex;
}
  
label {
    font-size: 1.125rem;
    margin: 10px 0 5px 280px;
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
    margin-left: 280px;

}
textarea {
    min-height: 120px;
    max-width: 170px;
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
    margin: 10px 0 0 350px;
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
.information {
    text-align: center;
    border-radius: 4px;
    background: #00838F;
    height: 260px;
    width: 260px;
    margin-top: -350px;
    z-index: 2;
}
</style>
