<template>
    <div class="contact">
        <h2>Contact Me</h2>
            <p>If you have any job offers, questions or concerns<br>please feel free to contact me</p>
            <div class="container">
                <form action="mailto:karin-dev@protonmail.com" method="post" enctype="text/plain" class="card">
                    <div>
                        <label class="label" for="name">Full Name</label>
                        <input type="text" name="name" id="name" required="">
                    </div>
                    <div>
                        <label class="label" for="email">Email</label>
                        <input type="email" name="email" id="email" required="">
                    </div>
                    <div>
                        <label class="label" for="subject">Subject</label>
                        <input type="subject" name="subject" id="subject" required="">
                    </div>
                    <div>
                        <label class="label" for="textarea">Message</label>
                        <textarea class="message" name="textarea" id="textarea" required=""></textarea>
                    </div>
                    <div class="button">
                        <input type="submit" value="Send">
                    </div>
                </form>
                <section class="information">
                    <h3>Contact Information</h3>
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                        </svg>E-mail</h4>
                            <a href="mailto:karin-dev@protonmail.com">karin-dev@protonmail.com</a>
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>Base</h4>
                            <p>Copenhagen, Denmark / Tokyo, Japan<br>
                            I'm based in Copenhagen lately</p>
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
    height: 100%;
    padding: 3%;
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
input[type="subject"],
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
input[type="subject"]:focus,
textarea:focus {
    outline: none;
    border-color: #006064;
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
    box-shadow: 0 0 5px rgba(0, 96, 100, .2);
}
.information {
    text-align: center;
    padding: 0 15px;
    border-radius: 4px;
    background-image: linear-gradient(45deg, #26C6DA, #00838F, #006064);
    height: 280px;
    width: 310px;
    box-shadow: 6px 8px 4px 0 rgba(0, 131, 143, .3);
    position: absolute;
    top: 18%;
    right: 55%;
}
.container {
    position: relative;
}
.information h3 {
    font-size: 1.5rem;
}
.information h4 {
    font-size: 1.125rem;
}
.information p {
    font-size: 1rem;
    line-height: 25px;
    letter-spacing: .6px;
}
.bi {
    margin-right: 10px;
    margin-left: -10px;
}

/* Mobile & Tablet */
@media (max-width: 768px) {
    .contact {
        padding-bottom: 50em;
    }
    .card {
        text-align: center;
        font-size: 12px;
        padding: 20px 20px;
        margin: auto ;
        min-width: 80%;
        position: absolute;
        top: 270px;
        right: 0;
        left: 0;
    }
    .label {
        font-size: 1.125rem;
        margin: 5px 8% 5px ;
        text-align: left;
        display: block;
    }
    input[type="text"],
    input[type="email"],
    input[type="subject"],
    textarea {
        background: rgba(0, 131, 143, .04);
        border: 1px solid #cfd9db;
        border-radius: 0.25em;
        padding: 12px;
        font-size: 1rem;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .08); 
        width: 80%;
        margin-left: 0;
    }
    textarea {
        min-height: 120px;
        min-width: 80%;
        resize: vertical;
        overflow: auto;
    }
    input[type="submit"] {
        margin: 10px 35% ;
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
    .information {
        text-align: center;
        padding: 0;
        border-radius: 4px;
        background-image: linear-gradient(45deg, #26C6DA, #00838F, #006064);
        min-width: 80%;
        top: 0;
        right: 0;
        left: 0;
        margin: auto;
    }
    .information h3 {
        font-size: 1.2rem;
    }
    .information h4 {
        font-size: 1rem;
    }
    .information p {
        font-size: .8rem;
        line-height: 20px;
        letter-spacing: .6px;
    }
}
</style>
