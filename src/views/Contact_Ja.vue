<template>
    <div id="contact-ja">
        <h2>Contact Me</h2>
            <p>ご質問やお仕事のご依頼などございましたら<br>お気軽にご連絡ください</p>
            <div class="container">
                <form class="card">
                    <div>
                        <label class="label" for="name">氏名</label>
                        <input type="text" name="name" id="name" required="">
                    </div>
                    <div>
                        <label class="label" for="email">メールアドレス</label>
                        <input type="email" name="email" id="email" required="">
                    </div>
                    <div>
                        <label class="label" for="textarea">メッセージ</label>
                        <textarea class="message" name="textarea" id="textarea" required=""></textarea>
                    </div>
                    <div class="button">
                        <input type="submit" value="送信">
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
                            <h5>コペンハーゲン / 東京</h5>
                            <p>※現在はデンマークのコペンハーゲンを<br>ベースにしています</p>
                </section>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact_Ja'

    }
</script>

<style scoped>
#contact {
    align-items: center;
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
.information {
    text-align: center;
    padding: 0 15px;
    border-radius: 4px;
    background-image: linear-gradient(45deg, #26C6DA, #00838F, #006064);
    height: 310px;
    width: 310px;
    position: absolute;
    top: 15%;
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
.information h5 {
    font-size: .9rem;
    padding: 0;
    margin: 0;
}
.information p {
    font-size: .7rem;
    line-height: 20px;
    letter-spacing: .8px;
}
.bi {
    margin-right: 10px;
    margin-left: -10px;
}

</style>