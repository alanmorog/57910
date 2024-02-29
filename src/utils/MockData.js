export const products = [
    {
        cod: 1,
        nombre: "Fender",
        modelo: "Stratocaster",
        description:
            "Guitarra fender modelo stratocaster diseñada con madera de caoba ensamblada en California",
        precio: 30000,
        stock: 2,
        image: "https://mariogomez.com.ar/wp-content/uploads/2023/12/fender-stratocaster-eric-johnson-s-principal-600x600.jpg",
        category: "guitarra"
    },
    {
        cod: 2,
        nombre: "Fender",
        modelo: "Squier",
        description:
            "Guitarra fender modelo stratocaster diseñada con madera de caoba ensamblada en California",
        precio: 15000,
        stock: 3,
        image: "https://www.miche.com.co/cdn/shop/products/GUITARRAELECTRICAFENDERSQUIER40ANIVERSARIOSTRATOCASTEREDICIONDORADALRLSSBMOD0379410547DIAPSONENMAPLEMICHETIENDAGUI960-3_809x894.jpg?v=1667595270",
        category: "guitarra"
    },
    {
        cod: 3,
        nombre: "Gibson",
        modelo: "Les Paul",
        description:
            "La guitarra eléctrica Gibson Les Paul Standard 2018 en mojave burst brillante es la elección perfecta para los amantes de la música que buscan un instrumento de alta calcodad y diseño clásico.",
        precio: 15000,
        stock: 1,
        image: "https://media.guitarcenter.com/is/image/MMGS7/L54489000002000-00-720x720.jpg",
        category: "guitarra"
    },
    {
        cod: 4,
        nombre: "Ibanez",
        modelo: "Js Series Js3",
        description:
            "",
        precio: 15000,
        stock: 5,
        image: "https://http2.mlstatic.com/D_NQ_NP_660236-MLA31595237710_072019-O.webp",
        category: "bajo"
    },
    {
        cod: 5,
        nombre: "Natal",
        modelo: "Natal5",
        description:
            "La batería NATAL DNA viene completa, con hardware, platillos, pedal para el bombo, butaca e incluso baquetas",
        precio: 55000,
        stock: 3,
        image: "https://http2.mlstatic.com/D_NQ_NP_712859-MLA71414454611_082023-O.webp",
        category: "bateria"
    },
    {
        cod: 6,
        nombre: "Yamaha",
        modelo: "PRS Series",
        description:
            "Yamaha es una marca que fabrica instrumentos de alta calcodad combinando lo artesanal y tradicional con la última tecnología digital.",
        precio: 15000,
        stock: 3,
        image: "https://http2.mlstatic.com/D_NQ_NP_659504-MLA46440505116_062021-O.webp",
        category: "teclado"
    },
    {
        cod: 7,
        nombre: "Krorg",
        modelo: "Kross WorkStation",
        description:
            "detalle de teclado.",
        precio: 15500,
        stock: 3,
        image: "https://cdn.korg.com/ar/products/upload/eede18adc67c01de05b8c4944c280051_sp.jpg",
        category: "teclado"
    },
    {
        cod: 8,
        nombre: "Roland",
        modelo: "Go 61k",
        description:
            "detalle de teclado.",
        precio: 20000,
        stock: 3,
        image: "https://www.heavenimagenes.com/heavencommerce/c98a269a-2842-4da0-a6e5-e0e155d29966/images/v2/ROLAND/7051_medium.jpg",
        category: "teclado"
    },
    {
        cod: 9,
        nombre: "Fender",
        modelo: "Bass Black",
        description:
            "detalle de bajo.",
        precio: 10000,
        stock: 3,
        image: "https://101db.com.ar/10292-large_default/bajo-electrico-fender-player-precision-bass-black-mastil-maple.jpg",
        category: "bajo"
    },
    {
        cod: 10,
        nombre: "Fender",
        modelo: "Telecaster",
        description:
            "detalle de guitarra.",
        precio: 12000,
        stock: 3,
        image: "https://compasuno.com.ar/wp-content/uploads/2021/12/D_606516-MLA42458502390_072020-F-600x600.jpg",
        category: "guitarra"
    },
    {
        cod: 11,
        nombre: "PRS",
        modelo: "Custom mod24",
        description:
            "detalle de guitarra.",
        precio: 12000,
        stock: 3,
        image: "https://compasuno.com.ar/wp-content/uploads/2022/09/D_645262-MLA48961712165_012022-F-1-600x600.jpg",
        category: "guitarra"
    },
    {
        cod: 12,
        nombre: "Jackson",
        modelo: "JS12",
        description:
            "detalle de guitarra.",
        precio: 12000,
        stock: 3,
        image: "",
        category: "guitarra"
    },
]

const categories = [
    {
        category: "guitarra",
    },
    {
        category: "bateria",
    },
    {
        category: "bajo",
    },
    {
        category: "teclado",
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(products)
        }, 1500);
    });
};

export const getCategories = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(categories)
        }, 1500);
    });
};

export const getProductscod = (cod) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(products[cod-1])
        }, 1500);
    });
};