<template>
    <div class="people-online width-100 padding-bottom">
        <span class="people-online__span">Сейчас онлайн:</span> 0 человек
        <div class="chat-telegram padding-top">
            <a class="chat-telegram__btn" href="https://t.me/atknin">
                <b-button type="is-info">
                    Открыть чат в телеграм
                </b-button>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PeopleOnline'
}
</script>
<style scoped>
.chat-telegram {
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.chat-telegram__btn {
    border-radius: 0;
    background: #3987C7;
    color: white;
    width: 90%;
}
.people-online__span {
    font-weight: bold;
    font-size: 20px;
}
.button {
    width: 100%;
}
</style>