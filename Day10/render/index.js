


const itemTag = (item) =>`
        <div class="item">
            <img src="${item.src}" alt="">
            <div class="info">
                <span class="brand">${item.brand}</span>
                <span class="name">${item.name}</span>
                <span class="price">${item.price}</span>


            </div>
        </div>
        `;

        const clothes = [{
            src : "424.jpeg",
            brand : "무신사 스탠다드",
            name : "플렉스 포스",
            price : "93,420원"
        },
        {
            src : "424.jpeg",
            brand : "무신사 스탠다드",
            name : "플렉스 포스",
            price : "93,420원"
        },
        {
            src : "424.jpeg",
            brand : "무신사 스탠다드",
            name : "플렉스 포스",
            price : "93,420원"
        }
    ]

      
      
        const box = document.querySelector (".box")
        clothes.forEach((x)=>{
            box.insertAdjacentHTML ("beforeend",itemTag(x));

        })
