const url = 'https://api.adviceslip.com/advice';
const adviceId = 'advice-id';
const adviceText = 'advice-text';

const handler = (e) => {
    getAdvice();
};

const getAdvice = async () => {
    const advice = await fetch(url).then(res => res.json()).then(res => res.slip);

    const adviceIdEle = document.getElementById(adviceId);
    adviceIdEle.innerText = advice.id;

    const adviceIdTextEle = document.getElementById(adviceText);
    adviceIdTextEle.innerText = advice.advice;
}

document.addEventListener('DOMContentLoaded', handler);
