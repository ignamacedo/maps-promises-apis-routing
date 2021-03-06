export const ItemList = () =>{
    const data = [
        {
            id: 1,
            imgUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/potw1934a.jpg",
            titulo: "Titulo 1",
            descripcion: "Descripcion 1",
            categoria: "estrellas",
            precio: "$750M",
            alt: "Imagen Producto 3",
            initial: 1,
            stock: 5
        },
        {
            id: 2,
            imgUrl: "https://cff2.earth.com/uploads/2019/07/23191124/CrabNebula.jpg",
            titulo: "Titulo 2",
            descripcion: "Descripcion 2",
            categoria: "estrellas",
            precio: "$800M",
            alt: "Imagen Producto 3",
            initial: 1,
            stock: 3
        },
        {
            id: 3,
            imgUrl: "https://cdn.vox-cdn.com/thumbor/066HzJ4wFC9P8vYj04BEHtZK4Ek=/0x0:2000x1361/1200x800/filters:focal(840x521:1160x841)/cdn.vox-cdn.com/uploads/chorus_image/image/67730255/archives_helix.0.jpg",
            titulo: "Titulo 3",
            descripcion: "Descripcion 3",
            categoria: "estrellas",
            precio: "$70M",
            alt: "Imagen Producto 3",
            initial: 1,
            stock: 12
        },
        {
            id: 4,
            imgUrl: "http://www.nasa.gov/sites/default/files/thumbnails/image/tycho.jpg",
            titulo: "Titulo 4",
            descripcion: "Descripcion 4",
            categoria: "estrellas",
            precio: "$250M",
            alt: "Imagen Producto 4",
            initial: 1,
            stock: 8
    
        },
        {
            id: 5,
            imgUrl: "https://ichef.bbci.co.uk/news/800/cpsprodpb/51B7/production/_118791902_venus10.jpg",
            titulo: "Titulo 5",
            descripcion: "Descripcion 5",
            categoria: "planetas",
            precio: "$1550M",
            alt: "Imagen Producto 5",
            initial: 1,
            stock: 1
    
        },
        {
            id: 6,
            imgUrl: "https://cdn77.pressenza.com/wp-content/uploads/2020/01/frc-d534f5b0d08ab883e53822d23e742642.jpg",
            titulo: "Titulo 6",
            descripcion: "Descripcion 6",
            categoria: "planetas",
            precio: "$2300M",
            alt: "Imagen Producto 6",
            initial: 1,
            stock: 1
    
        },
        {
            id: 7,
            imgUrl: "https://www.latercera.com/resizer/B16344F8TXM5pTsujbRczLtN-9c=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/3EX4JVB6BRDEZKNKG6AA72WXRI.jpg",
            titulo: "Titulo 7",
            descripcion: "Descripcion 7",
            categoria: "planetas",
            precio: "$3650M",
            alt: "Imagen Producto 7",
            initial: 1,
            stock: 1
    
        },
        {
            id: 8,
            imgUrl: "https://img.culturacolectiva.com/content/2018/10/12/1539366073247/cuantas-lunas-hay-en-sistema-solar-high.jpg",
            titulo: "Titulo 8",
            descripcion: "Descripcion 8",
            categoria: "stelites",
            precio: "$2500M",
            alt: "Imagen Producto 8",
            initial: 1,
            stock: 3
    
        },
        {
            id: 9,
            imgUrl: "https://img.culturacolectiva.com/content/2018/10/12/1539366572537/cuantas-lunas-existen-en-el-sistema-solar-high.jpg",
            titulo: "Titulo 9",
            descripcion: "Descripcion 9",
            categoria: "satelites",
            precio: "$1321M",
            alt: "Imagen Producto 9",
            initial: 1,
            stock: 4
    
        }
   ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        },2000);
    });
};