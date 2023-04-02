let names = [
    {
        label: 'Сергей',
        value: 'Васильев С. П.'
    },
    {
        label: 'Артём',
        value: 'Исаев А. Д.'
    },
    {
        label: 'Дарья',
        value: 'Костикова Д. О.'
    }
]

function getList (array, value = names[0].label) {
    let select = document.createElement('select')
    document.body.append(select)

    for (let i = 0; i < names.length; i++) {
        
        let option = document.createElement('option')
        select.append(option)
        option.innerHTML = names[i].label

        if (option.label === value) {
            option.setAttribute('selected', true)
        }
    }
}

getList(names, 'Дарья')