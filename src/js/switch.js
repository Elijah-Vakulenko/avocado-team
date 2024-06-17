const changeTheme = document.querySelector('#switch');
const root = document.documentElement;
const p = document.querySelectorAll('p')
const li = document.querySelectorAll('li')
const a = document.querySelectorAll('a')
const h4 = document.querySelectorAll("h4")
const btn = document.querySelectorAll('button')
const faqItem = document.querySelectorAll("#faq-list-item")

changeTheme.addEventListener('change', (event) => {
    const checked = event.target.checked;

    if (checked) {
        root.style.setProperty('background-color', '#1E2023');
        root.style.setProperty('color', 'white');
        p.forEach((p)=>{
            p.style.setProperty('color', "#f0f0f0")
        })

        li.forEach((p)=>{
            p.style.setProperty('color', "#f0f0f0")
        })

        a.forEach((p)=>{
            p.style.setProperty('color', "#f0f0f0")
        })

        h4.forEach((p)=>{
            p.style.setProperty('color', "#292929")
        })
        faqItem.forEach((p)=>{
            p.style.setProperty("background", "#2A2D32")

            console.log(p.children.forEach(p => {
                p.div.styles.setProperty("color", "f0f0f0")
            }));

        })

    } else if(!checked) {
        root.style.removeProperty('background-color');
        root.style.removeProperty('color', 'white');
        p.forEach((p)=>{
            p.style.removeProperty('color')
        })

        li.forEach((p)=>{
            p.style.removeProperty('color')
        })

        a.forEach((p)=>{
            p.style.removeProperty('color', )
        })

        h4.forEach((p)=>{
            p.style.removeProperty('color',)
        })
    }
});
