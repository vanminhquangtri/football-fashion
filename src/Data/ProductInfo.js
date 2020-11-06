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
    promotion: "",
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
    promotion: "",
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
    main_image: require("../Assets/images/product/epl/liverpool/away/ad2.jpg"),
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
/* manchester-city */
{
    id: "EPLMCTH2020SHIRT",
    league: "Premier League",
    club: "Manchester City",
    name: "Áo đấu Manchester City sân nhà Etihad 2020/2021 - Niềm tự hào nửa xanh thành Manchester",
    price: 1700000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/manchester-city/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-city/home/hu1.jpg"),
        require("../Assets/images/product/epl/manchester-city/home/hu2.jpg"),
        require("../Assets/images/product/epl/manchester-city/home/hu3.jpg")
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
    id: "EPLMCTH2020SHORT",
    league: "Premier League",
    club: "Manchester City",
    name: "Quần Manchester City sân nhà Etihad 2020/2021",
    price: 800000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/manchester-city/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-city/home/hd1.jpg"),
        require("../Assets/images/product/epl/manchester-city/home/hd2.jpg")
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
    id: "EPLMCTA2020SHIRT",
    league: "Premier League",
    club: "Manchester City",
    name: "Áo đấu Manchester City sân khách 2020/2021 - Pep khẳng định đẳng cấp",
    price: 1500000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/manchester-city/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-city/away/au1.jpg"),
        require("../Assets/images/product/epl/manchester-city/away/au2.jpg"),
        require("../Assets/images/product/epl/manchester-city/away/au3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLMCTA2020SHORT",
    league: "Premier League",
    club: "Manchester City",
    name: "Quần Manchester City sân khách 2020/2021",
    price: 500000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/epl/manchester-city/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-city/away/ad1.jpg"),
        require("../Assets/images/product/epl/manchester-city/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* manchester-united */
{
    id: "EPLMANH2020SHIRT",
    league: "Premier League",
    club: "Manchester United",
    name: "Áo đấu Manchester United sân nhà 2020/2021 - Nửa đỏ thành Manchester",
    price: 1900000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/manchester-united/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-united/home/hu1.jpg"),
        require("../Assets/images/product/epl/manchester-united/home/hu2.jpg"),
        require("../Assets/images/product/epl/manchester-united/home/hu3.jpg")
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
    id: "EPLMANH2020SHORT",
    league: "Premier League",
    club: "Manchester United",
    name: "Quần Manchester United sân nhà Old Trafford 2020/2021",
    price: 700000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/manchester-united/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-united/home/hd1.jpg"),
        require("../Assets/images/product/epl/manchester-united/home/hd2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "",
    point: 4,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLMANA2020SHIRT",
    league: "Premier League",
    club: "Manchester United",
    name: "Áo đấu Manchester United sân khách 2020/2021 - tràn trề năng lượng",
    price: 1400000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/manchester-united/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-united/away/au1.jpg"),
        require("../Assets/images/product/epl/manchester-united/away/au2.jpg"),
        require("../Assets/images/product/epl/manchester-united/away/au3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLMANA2020SHORT",
    league: "Premier League",
    club: "Manchester United",
    name: "Quần Manchester United sân khách 2020/2021",
    price: 500000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/epl/manchester-united/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/manchester-united/away/ad1.jpg"),
        require("../Assets/images/product/epl/manchester-united/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* tottenham-hotspur */
{
    id: "EPLTOTH2020SHIRT",
    league: "Premier League",
    club: "Tottenham Hotspur",
    name: "Áo đấu Tottenham Hotspur sân nhà 2020/2021 - gà trống gáy vang",
    price: 1400000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/tottenham-hotspur/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/tottenham-hotspur/home/hu1.jpg"),
        require("../Assets/images/product/epl/tottenham-hotspur/home/hu2.jpg"),
        require("../Assets/images/product/epl/tottenham-hotspur/home/hu3.jpg")
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
    id: "EPLTOTH2020SHORT",
    league: "Premier League",
    club: "Tottenham Hotspur",
    name: "Quần Tottenham Hotspur sân nhà 2020/2021",
    price: 700000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/epl/tottenham-hotspur/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/tottenham-hotspur/home/hd1.jpg"),
        require("../Assets/images/product/epl/tottenham-hotspur/home/hd2.jpg")
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
    id: "EPLTOTA2020SHIRT",
    league: "Premier League",
    club: "Tottenham Hotspur",
    name: "Áo đấu Tottenham Hotspur sân khách 2020/2021 - xưng bá ngoại hạng Anh",
    price: 1500000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/epl/tottenham-hotspur/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/tottenham-hotspur/away/au1.jpg"),
        require("../Assets/images/product/epl/tottenham-hotspur/away/au2.jpg"),
        require("../Assets/images/product/epl/tottenham-hotspur/away/au3.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "20%",
    point: 5,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "EPLTOTA2020SHORT",
    league: "Premier League",
    club: "Tottenham Hotspur",
    name: "Quần Tottenham Hotspur sân khách 2020/2021",
    price: 400000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/epl/tottenham-hotspur/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/epl/tottenham-hotspur/away/ad1.jpg"),
        require("../Assets/images/product/epl/tottenham-hotspur/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* end epl */
/* bayer-leverkusen */
{
    id: "BUNBLVH2020SHIRT",
    league: "Bundes Liga",
    club: "Bayer Leverkusen",
    name: "Áo đấu Bayer Leverkusen sân nhà 2020/2021",
    price: 1400000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/bayer-leverkusen/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayer-leverkusen/home/hu1.jpg"),
        require("../Assets/images/product/bundesliga/bayer-leverkusen/home/hu2.jpg"),
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
    id: "BUNBLVH2020SHORT",
    league: "Bundes Liga",
    club: "Bayer Leverkusen",
    name: "Quần Bayer Leverkusen sân nhà 2020/2021",
    price: 700000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/bayer-leverkusen/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayer-leverkusen/home/hd1.jpg"),
        require("../Assets/images/product/bundesliga/bayer-leverkusen/home/hd2.jpg")
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
    id: "BUNBLVA2020SHIRT",
    league: "Bundes Liga",
    club: "Bayer Leverkusen",
    name: "Áo đấu Bayer Leverkusen sân khách 2020/2021",
    price: 1500000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/bayer-leverkusen/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayer-leverkusen/away/au1.jpg"),
        require("../Assets/images/product/bundesliga/bayer-leverkusen/away/au2.jpg"),
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
    id: "BUNBLVA2020SHORT",
    league: "Bundes Liga",
    club: "Bayer Leverkusen",
    name: "Quần Bayer Leverkusen sân khách 2020/2021",
    price: 400000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/bayer-leverkusen/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayer-leverkusen/away/ad1.jpg"),
        require("../Assets/images/product/bundesliga/bayer-leverkusen/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* bayern-munich */
{
    id: "BUNBMNH2020SHIRT",
    league: "Bundes Liga",
    club: "Bayer Munich",
    name: "Áo đấu Bayer Munich sân nhà 2020/2021",
    price: 1600000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/bayern-munich/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayern-munich/home/hu1.jpg"),
        require("../Assets/images/product/bundesliga/bayern-munich/home/hu2.jpg"),
        require("../Assets/images/product/bundesliga/bayern-munich/home/hu3.jpg"),
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
    id: "BUNBMNH2020SHORT",
    league: "Bundes Liga",
    club: "Bayer Munich",
    name: "Quần Bayer Munich sân nhà 2020/2021",
    price: 800000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/bayern-munich/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayern-munich/home/hd1.jpg"),
        require("../Assets/images/product/bundesliga/bayern-munich/home/hd2.jpg")
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
    id: "BUNBMNA2020SHIRT",
    league: "Bundes Liga",
    club: "Bayer Munich",
    name: "Áo đấu Bayer Munich sân khách 2020/2021",
    price: 1600000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/bayern-munich/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayern-munich/away/au1.jpg"),
        require("../Assets/images/product/bundesliga/bayern-munich/away/au2.jpg"),
        require("../Assets/images/product/bundesliga/bayern-munich/away/au3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "20%",
    point: 5,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNBMNA2020SHORT",
    league: "Bundes Liga",
    club: "Bayer Munich",
    name: "Quần Bayer Munich sân khách 2020/2021",
    price: 500000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/bayern-munich/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/bayern-munich/away/ad1.jpg"),
        require("../Assets/images/product/bundesliga/bayern-munich/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* borussia-dortmund */
{
    id: "BUNBDMH2020SHIRT",
    league: "Bundes Liga",
    club: "Borussia Dortmund",
    name: "Áo đấu Borussia Dortmund sân nhà 2020/2021",
    price: 1900000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/borussia-dortmund/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/borussia-dortmund/home/hu1.jpg"),
        require("../Assets/images/product/bundesliga/borussia-dortmund/home/hu2.jpg"),
        require("../Assets/images/product/bundesliga/borussia-dortmund/home/hu3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNBDMH2020SHORT",
    league: "Bundes Liga",
    club: "Borussia Dortmund",
    name: "Quần Borussia Dortmund sân nhà 2020/2021",
    price: 700000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/borussia-dortmund/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/borussia-dortmund/home/hd1.jpg"),
        require("../Assets/images/product/bundesliga/borussia-dortmund/home/hd2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNBDMA2020SHIRT",
    league: "Bundes Liga",
    club: "Borussia Dortmund",
    name: "Áo đấu Borussia Dortmund sân khách 2020/2021",
    price: 1600000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/borussia-dortmund/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/borussia-dortmund/away/au1.jpg"),
        require("../Assets/images/product/bundesliga/borussia-dortmund/away/au2.jpg"),
        require("../Assets/images/product/bundesliga/borussia-dortmund/away/au3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 4,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNBDMA2020SHORT",
    league: "Bundes Liga",
    club: "Borussia Dortmund",
    name: "Quần Borussia Dortmund sân khách 2020/2021",
    price: 400000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/borussia-dortmund/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/borussia-dortmund/away/ad1.jpg"),
        require("../Assets/images/product/bundesliga/borussia-dortmund/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* rb-leipzig */
{
    id: "BUNRBLH2020SHIRT",
    league: "Bundes Liga",
    club: "RB Leipzig",
    name: "Áo đấu RB Leipzig sân nhà 2020/2021",
    price: 1600000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/rb-leipzig/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/rb-leipzig/home/hu1.jpg"),
        require("../Assets/images/product/bundesliga/rb-leipzig/home/hu2.jpg"),
        require("../Assets/images/product/bundesliga/rb-leipzig/home/hu3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "25%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNRBLH2020SHORT",
    league: "Bundes Liga",
    club: "RB Leipzig",
    name: "Quần RB Leipzig sân nhà 2020/2021",
    price: 800000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/rb-leipzig/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/rb-leipzig/home/hd1.jpg"),
        require("../Assets/images/product/bundesliga/rb-leipzig/home/hd2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 4,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNRBLA2020SHIRT",
    league: "Bundes Liga",
    club: "RB Leipzig",
    name: "Áo đấu RB Leipzig sân khách 2020/2021",
    price: 1500000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/rb-leipzig/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/rb-leipzig/away/au1.jpg"),
        require("../Assets/images/product/bundesliga/rb-leipzig/away/au2.jpg"),
        require("../Assets/images/product/bundesliga/rb-leipzig/away/au3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNRBLA2020SHORT",
    league: "Bundes Liga",
    club: "RB Leipzig",
    name: "Quần RB Leipzig sân khách 2020/2021",
    price: 500000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/rb-leipzig/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/rb-leipzig/away/ad1.jpg"),
        require("../Assets/images/product/bundesliga/rb-leipzig/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "5%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* schalke-04 */
{
    id: "BUNSK4H2020SHIRT",
    league: "Bundes Liga",
    club: "Schalke 04",
    name: "Áo đấu Schalke 04 sân nhà 2020/2021",
    price: 1500000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/schalke-04/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/schalke-04/home/hu1.jpg"),
        require("../Assets/images/product/bundesliga/schalke-04/home/hu2.jpg"),
        require("../Assets/images/product/bundesliga/schalke-04/home/hu3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNSK4H2020SHORT",
    league: "Bundes Liga",
    club: "Schalke 04",
    name: "Quần Schalke 04 sân nhà 2020/2021",
    price: 500000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/schalke-04/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/schalke-04/home/hd1.jpg"),
        require("../Assets/images/product/bundesliga/schalke-04/home/hd2.jpg")
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
    id: "BUNSK4A2020SHIRT",
    league: "Bundes Liga",
    club: "Schalke 04",
    name: "Áo đấu Schalke 04 sân khách 2020/2021",
    price: 1600000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/schalke-04/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/schalke-04/away/au1.jpg"),
        require("../Assets/images/product/bundesliga/schalke-04/away/au2.jpg"),
        require("../Assets/images/product/bundesliga/schalke-04/away/au3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "10%",
    point: 4,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNSK4A2020SHORT",
    league: "Bundes Liga",
    club: "Schalke 04",
    name: "Quần Schalke 04 sân khách 2020/2021",
    price: 600000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/schalke-04/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/schalke-04/away/ad1.jpg"),
        require("../Assets/images/product/bundesliga/schalke-04/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
/* wolfsburg */
{
    id: "BUNWBGH2020SHIRT",
    league: "Bundes Liga",
    club: "Wolfsburg",
    name: "Áo đấu Wolfsburg sân nhà 2020/2021",
    price: 1200000,
    place: "home",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/wolfsburg/home/hu1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/wolfsburg/home/hu1.jpg"),
        require("../Assets/images/product/bundesliga/wolfsburg/home/hu2.jpg"),
        require("../Assets/images/product/bundesliga/wolfsburg/home/hu3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "25%",
    point: 4,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNWBGH2020SHORT",
    league: "Bundes Liga",
    club: "Wolfsburg",
    name: "Quần Wolfsburg sân nhà 2020/2021",
    price: 500000,
    place: "home",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/wolfsburg/home/hd1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/wolfsburg/home/hd1.jpg"),
        require("../Assets/images/product/bundesliga/wolfsburg/home/hd2.jpg")
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
    id: "BUNWBGA2020SHIRT",
    league: "Bundes Liga",
    club: "Wolfsburg",
    name: "Áo đấu Wolfsburg sân khách 2020/2021",
    price: 1300000,
    place: "away",
    type: "shirt",
    main_image: require("../Assets/images/product/bundesliga/wolfsburg/away/au1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/wolfsburg/away/au1.jpg"),
        require("../Assets/images/product/bundesliga/wolfsburg/away/au2.jpg"),
        require("../Assets/images/product/bundesliga/wolfsburg/away/au3.jpg"),
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "20%",
    point: 2,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
{
    id: "BUNWBGA2020SHORT",
    league: "Bundes Liga",
    club: "Wolfsburg",
    name: "Quần Wolfsburg sân khách 2020/2021",
    price: 600000,
    place: "away",
    type: "short",
    main_image: require("../Assets/images/product/bundesliga/wolfsburg/away/ad1.jpg"),
    slide_image: [
        require("../Assets/images/product/bundesliga/wolfsburg/away/ad1.jpg"),
        require("../Assets/images/product/bundesliga/wolfsburg/away/ad2.jpg")
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    top_sales: true,
    top_viewed: true,
    champion: true,
    promotion: "15%",
    point: 3,
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nesciunt distinctio reprehenderit ad est mollitia ducimus neque consequuntur eos perferendis id pariatur, magnam quae esse facilis nihil accusantium deserunt totam."
},
];

export default ProductsInfo