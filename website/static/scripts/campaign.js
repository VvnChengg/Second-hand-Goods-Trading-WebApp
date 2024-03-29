

// document.querySelector('.campaign-add')?.addEventListener('click', () => {
//     document.querySelector('.campaign-form-container')?.classList.add('form-active');
//     document.querySelector('.campaign-form-overlay')?.classList.add('overlay-active');
// })

document.querySelector('.campaign-form-close')?.addEventListener('click', () => {
    document.querySelector('.campaign-form-container')?.classList.remove('form-active');
    document.querySelector('.campaign-form-overlay')?.classList.remove('overlay-active');
})

// query the campaign contents
const submit_btn = document.querySelector('.campaign-form-add');

submit_btn?.addEventListener('submit', (event) => {
    event.preventDefault();

    const event_name = document.querySelector('#name-input').value;
    const event_date = document.querySelector('#date-input').value;
    const event_time = document.querySelector('#time-input').value;
    const event_loca = document.querySelector('#loca-input').value;
    const event_desc = document.querySelector('#desc-input').value;

    // create_campaign({
    //     'name': event_name,
    //     'date': event_date,
    //     'time': event_time,
    //     'loca': event_loca,
    //     'desc': event_desc
    // });

    document.querySelector('.campaign-form-overlay').classList.remove('overlay-active');
    document.querySelector('.campaign-form-container').classList.remove('form-active');
    // window.location.href = 'http://127.0.0.1:8000/#campaign';

});

function create_campaign(event) {
    document.querySelector('.campaign-row').insertAdjacentHTML(
        'beforeend',
        `<div class="campaign-col">
            <div class="campaign-contents">
                <span class="campaign-date">${event.date}</span>
                <span class="campaign-name">${event.name}</span>
                <span class="campaign-people">0 人已報名</span>
                <div class="campaign-register">
                    <span>報名活動</span>
                </div>
            </div>
        </div>`
    )
}

// campaign dragger
const campaign_shelve = document.querySelector('.campaign-shelve');
let isDragStart = false, prePageX, preScrollLeft;

campaign_shelve?.addEventListener('mousedown', (event) => {
    isDragStart = true;
    prePageX = event.pageX;
    preScrollLeft = campaign_shelve.scrollLeft;
});

campaign_shelve?.addEventListener('mouseup', () => {
    isDragStart = false;
});

campaign_shelve?.addEventListener('mousemove', (event) => {
    if (!isDragStart) return;
    event.preventDefault();
    let positionDiff = event.pageX - prePageX;
    campaign_shelve.scrollLeft = preScrollLeft - positionDiff;
});
