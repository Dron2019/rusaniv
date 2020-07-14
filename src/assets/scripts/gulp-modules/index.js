/**Menu hover Effect */
let menuButton = document.querySelector('.menu-button'),
    menu = document.querySelector('menu.top-menu'),
    header = document.querySelector('header.header');
menuButton.querySelectorAll('rect').forEach(rect => {
    rect.dataset.startHeight = rect.getAttribute('width');
})
menuButton.addEventListener('mouseover', (evt) => {
    menuButton.querySelectorAll('rect').forEach(rect => {
        rect.setAttribute('width', '36');
    })
});
menuButton.addEventListener('mouseout', function(evt) {
    menuButton.querySelectorAll('rect').forEach(rect => {
        rect.setAttribute('width', rect.dataset.startHeight);
    })
});
menuButton.addEventListener('click', function(evt) {
    menu.classList.add('opened');
    menuButton.classList.add('opened');
    if (window.screen.width < 576) menuButton.addEventListener('click', closeMenuOnMobile);

});
menu.querySelector('.close-button').addEventListener('click', function(evt) {
    menu.classList.remove('opened');
    menuButton.classList.remove('opened');
});
/**Menu hover Effect  END*/
document.querySelector('div').__proto__.putTempClass = function(className, timeout = 1000) {
    this.classList.add(className);
    setTimeout(() => {
        this.classList.remove(className);
    }, timeout);
};

function closeMenuOnMobile(evt) {
    menu.classList.remove('opened');
    menuButton.classList.remove('opened');
    menuButton.removeEventListener('click', closeMenuOnMobile, false);
}
/**MASK */
// VMasker(document.querySelector(".inputtelmask")).maskPattern("+99 (999) 999-99-99");
/**MASK END*/
console.log(document.querySelector('.common-form'));
document.querySelector('.common-form .form-close-block').onclick = () => {
    $.magnificPopup.close();
};
$('.call-form-js').magnificPopup({
    items: {
        type: 'inline',
        src: '#common-form',
    },
    callbacks: {
        beforeClose: () => document.querySelector('#common-form').putTempClass('f', 2000),
    },
    showCloseBtn: false,
    // other options
});

$('.datetimepicker').datetimepicker({
    //            theme:'dark',
    // value: 'trololo',
    // value: new Date(),
    minDate: new Date(),
    maxTime: '20:00',
    yearStart: 2019,
    yearEnd: 2019,
    dayOfWeekStart: 1,

});


/**checkbox click on label config */

let checkboxes = document.querySelectorAll('.checkbox-group');
checkboxes.forEach(box => {
        box.addEventListener('click', function(evt) {
            console.log(box);

            document.querySelectorAll('.checkbox-wrap').forEach(radio => radio.style.borderColor = `var(--dark-gray)`);
            box.querySelector('input').checked = true;
            box.querySelector('input').checked ?
                box.querySelector('.checkbox-wrap').style.borderColor = `var(--red)` :
                null;

            if (box.classList.contains('with-date-js')) {
                let dateInput = box.querySelector('.datetimewrapper') || null;
                dateInput.style.opacity = `1`;
            } else {

                document.querySelector('.datetimewrapper').style.opacity = `0`;
            }
        });
    })
    /**checkbox click on label config END */

/*Form handler */
/* beautify preserve:start */
@@include('../libs/masked-input/masked-input.min.js');
/* beautify preserve:end */

let submitList = document.querySelectorAll('.submit-js');
const SEND_URL = '/wp-admin/admin-ajax.php';
const ACTION_APPLICATION = 'application';



/** Маска телефонного номера */
$.mask.definitions['#'] = '[0-9]';
$.mask.definitions['9'] = '';
$('input[name=telephone]').mask("+(38) ### ###-##-##", {
    placeholder: "_"
});
submitList.forEach(el => {
    el.addEventListener('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log(submitList);
        let status = checkRequiredFields(el.closest('form'));
        if (typeof status === 'object') {
            send(status, SEND_URL, el.closest('form'));
        }

        //console.log(el.closest('form'));
    });
});

function checkRequiredFields(form) {
    const inputs = form.querySelectorAll('input');
    let sendObject = {};
    sendObject.form_name = form.dataset.name || '';
    sendObject.metka = window.location.href || '';
    inputs.forEach(input => {
        let inputGroup = input.closest('.input-group');
        if (input.dataset.required === 'true' && input.value.length === 0) {
            inputGroup.classList.add('unfilled')
        } else {
            inputGroup.classList.remove('unfilled');
        }
        sendObject[input.name] = input.value;
        getDateFromInput(input, sendObject);
    });
    console.log(sendObject);

    if (form.querySelector('.unfilled') === null) {
        return sendObject;
    } else {
        return false;
    }
    // //console.log(form.querySelector('.unfilled'));

};

function getDateFromInput(input, sendObject) {
    if (input.closest('.with-date-js') === null || !input.closest('.with-date-js').querySelector('input[type=radio]').checked) return;
    if (input.closest('.with-date-js')) sendObject[input.name] = 'off';
    sendObject.call_date = input.closest('.with-date-js').querySelector('input.datetimepicker ').value;

}

function send(object, url, form) {
    let data = new FormData();
    form.querySelector('button[type="submit"]').setAttribute('disabled', '');
    for (const key in object) {
        data.append(key, object[key]);
    }
    data.append('action', ACTION_APPLICATION);
    // console.log(data);
    fetch(url, {
        method: 'POST',
        body: data,
        action: ACTION_APPLICATION,
    }).catch(res => {
        console.log(res);
        sendMessageStatus(form, 'Помилка відправки');
        //console.log(data);
    }).then(res => {
        return res.text();
    }).then(res => {
        if (res.match(/11/)) {
            sendMessageStatus(form, 'Ваше повідомлення відправлено');
            resetForm(form);
        } else {
            sendMessageStatus(form, 'Помилка відправки');
        }
        setTimeout(() => {
            form.querySelector('button[type=submit]').removeAttribute('disabled');
        }, 2000);
    })
};

function resetForm(form) {
    form.querySelectorAll('input[type=text]').forEach(input => {
        input.value = ``;
    });
    form.querySelectorAll('input[type=radio]').forEach(input => {
        input.checked = false;
    });

}

function sendMessageStatus(form, status) {
    let element = document.createElement('span');
    element.style.cssText = `animation: fadeInLeft 1s 1 ease-in-out ; 
            color:#fff; position:absolute; 
            padding:10px 20px; 
            background:var(--blue);
            left:50%;
            top:10%;
            text-align:center;
            font-size:24px; 
            transform:translateX(-50%) `;
    element.innerHTML = status;
    element.classList.add('send-message');
    form.append(element);
    setTimeout(() => {
        form.querySelector('.send-message').style.animation = 'fadeOutRight 1s 1 ease-in';
        form.querySelector('.send-message').addEventListener('animationend', function(evt) {
            form.querySelector('.send-message').remove();
            // form.querySelector('.send-message').style.opacity = `0`;
        });
    }, 3000);


}


/*Form handler END */