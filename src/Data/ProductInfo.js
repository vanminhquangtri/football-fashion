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
/* arsenal */
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
        require("../Assets/images/product/epl/arsenal/home/hu3.jpg")
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
        require("../Assets/images/product/epl/arsenal/home/hd2.jpg")
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
    id: "EPLARSA2020SHIRT",
    league: "Premier League",
    club: "Arsenal",
    name: "Áo đấu Arsenal sân khách 2020/2021 - điểm cộng cho pháp thủ",
    price: 1500000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/arsenal/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/arsenal/away/au1.jpg"),
        require("../Assets/images/product/epl/arsenal/away/au2.jpg"),
        require("../Assets/images/product/epl/arsenal/away/au3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "",
    point: 5,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLARSA2020SHORT",
    league: "Premier League",
    club: "Arsenal",
    name: "Quần Arsenal sân khách 2020/2021 - thiết kế bắt mắt chuẩn mực",
    price: 800000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/epl/arsenal/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/arsenal/away/ad1.jpg"),
        require("../Assets/images/product/epl/arsenal/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* chelsea */
{
    id: "EPLCHEH2020SHIRT",
    league: "Premier League",
    club: "Chelsea",
    name: "Áo đấu Chelsea sân nhà 2020/2021 - biểu tượng The Blues",
    price: 1300000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/chelsea/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/chelsea/home/hu1.jpg"),
        require("../Assets/images/product/epl/chelsea/home/hu2.jpg"),
        require("../Assets/images/product/epl/chelsea/home/hu3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLCHEH2020SHORT",
    league: "Premier League",
    club: "Chelsea",
    name: "Quần Chelsea sân nhà 2020/2021 - sức mạnh The Blues",
    price: 600000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/chelsea/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/chelsea/home/hd1.jpg"),
        require("../Assets/images/product/epl/chelsea/home/hd2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLCHEA2020SHIRT",
    league: "Premier League",
    club: "Chelsea",
    name: "Áo đấu Chelsea sân khách 2020/2021 - sức mạnh Thành London",
    price: 1300000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/chelsea/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/chelsea/away/au1.jpg"),
        require("../Assets/images/product/epl/chelsea/away/au2.jpg"),
        require("../Assets/images/product/epl/chelsea/away/au3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 5,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLCHEA2020SHORT",
    league: "Premier League",
    club: "Chelsea",
    name: "Quần Chelsea sân khách 2020/2021 - sức mạnh The Blues",
    price: 500000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/epl/chelsea/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/chelsea/away/ad1.jpg"),
        require("../Assets/images/product/epl/chelsea/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* liverpool */
{
    id: "EPLLIVH2020SHIRT",
    league: "Premier League",
    club: "Liverpool",
    name: "Áo đấu Liverpool sân nhà Anfield 2020/2021 - The Kop đã trở lại",
    price: 1800000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/liverpool/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/liverpool/home/hu1.jpg"),
        require("../Assets/images/product/epl/liverpool/home/hu2.jpg"),
        require("../Assets/images/product/epl/liverpool/home/hu3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "20%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLLIVH2020SHORT",
    league: "Premier League",
    club: "Liverpool",
    name: "Quần Liverpool sân nhà 2020/2021",
    price: 700000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/liverpool/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/liverpool/home/hd1.jpg"),
        require("../Assets/images/product/epl/liverpool/home/hd2.jpg")
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
    id: "EPLLIVA2020SHIRT",
    league: "Premier League",
    club: "Liverpool",
    name: "Áo đấu Liverpool sân khách 2020/2021 - Sức mạnh Lữ đoàn đỏ",
    price: 1300000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/liverpool/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/liverpool/away/au1.jpg"),
        require("../Assets/images/product/epl/liverpool/away/au2.jpg"),
        require("../Assets/images/product/epl/liverpool/away/au3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 5,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLLIVA2020SHORT",
    league: "Premier League",
    club: "Liverpool",
    name: "Quần Liverpool sân khách 2020/2021",
    price: 600000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/epl/liverpool/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/liverpool/away/ad1.jpg"),
        require("../Assets/images/product/epl/liverpool/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
];

export default ProductsInfo