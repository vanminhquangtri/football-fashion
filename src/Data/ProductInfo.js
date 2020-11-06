// information of product: name, price, image path,...
// default currency is Vietnamese Dong
/*
id: EPLARSH2020SHIRT
(EPL: league name Premier League, ARS: club name Arsenal, H: Home clothes, 2020: season, SHIRT: shirt)
league
club
price
place: including home, or way, or third
type: including shirt, or short, or shirt_short
main_image
slide_image
size
top-sales
top-viewed
champion
promotion
des
*/
const ProductsInfo = [
{
    id: "EPLARSH2020SHIRT",
    league: "Premier League",
    club: "Arsenal",
    name: "Áo đấu Arsenal sân nhà Emirates Stadium 2020/2021",
    price: 1500000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/arsenal/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/arsenal/home/hu1.jpg"),
        require("../Assets/images/product/epl/arsenal/home/hu2.jpg"),
        require("../Assets/images/product/epl/arsenal/home/hu3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLARSH2020SHORT",
    league: "Premier League",
    club: "Arsenal",
    name: "Quần Arsenal sân nhà Emirates Stadium 2020/2021",
    price: 800000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/arsenal/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/arsenal/home/hd1.jpg"),
        require("../Assets/images/product/epl/arsenal/home/hd2.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLARSH2020SHIRT1",
    league: "Premier League",
    club: "Arsenal",
    name: "Áo đấu Arsenal sân nhà Emirates Stadium 2020/2021",
    price: 1500000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/arsenal/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/arsenal/home/hu1.jpg"),
        require("../Assets/images/product/epl/arsenal/home/hu2.jpg"),
        require("../Assets/images/product/epl/arsenal/home/hu3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLARSH2020SHORT1",
    league: "Premier League",
    club: "Arsenal",
    name: "Quần Arsenal sân nhà Emirates Stadium 2020/2021",
    price: 800000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/arsenal/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/arsenal/home/hd1.jpg"),
        require("../Assets/images/product/epl/arsenal/home/hd2.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
}
];

export default ProductsInfo