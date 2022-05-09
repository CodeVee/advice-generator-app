const url = 'https://api.adviceslip.com/advice';
const adviceId = 'advice-id';
const adviceText = 'advice-text';
const adviceBtn = 'advice-btn'

const handler = (e) => {
    getAdvice(true);
};

const btnHandler = (e) => {
    getAdvice(false);
}

const getAdvice = async (firstLoad) => {
    let finalUrl = url
    if (firstLoad) {
        finalUrl += '/71';
    }
    const advice = await fetch(finalUrl).then(res => res.json()).then(res => res.slip);

    const adviceIdEle = document.getElementById(adviceId);
    adviceIdEle.innerText = advice.id;

    const adviceIdTextEle = document.getElementById(adviceText);
    adviceIdTextEle.innerText = advice.advice;
}

document.addEventListener('DOMContentLoaded', handler);

document.getElementById(adviceBtn).addEventListener('click', btnHandler);
