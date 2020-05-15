<template>
    <div class="people-online width-100 padding-bottom">
        <span class="people-online__span">Сейчас онлайн:</span> 0 человек
        <div class="chat-telegram padding-top">
            <b-button type="is-info" class="chat-telegram__btn">Открыть чат в телеграм</b-button>
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
</style>