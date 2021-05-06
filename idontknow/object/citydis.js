// let cityArray= [
//     {name: 'taipei',ch_name:'台北',district:[{ id: 'taipei01', district: '中正區' },
//     { id: 'taipei02', district: '萬華區' },
//     { id: 'taipei03', district: '信義區' }]},
//     {name: 'taoyuan01',ch_name:'桃園',district:[{ id: 'taoyuan01', district: '桃園市' },
//     { id: 'taoyuan02', district: '八德市' },
//     { id: 'taoyuan03', district: '中壢市' }]},
//     {name: 'taoyuan01',ch_name:'台中',district:[{ id: 'taichung01', district: '台中市' },
//     { id: 'taichung02', district: '⼤⾥市' },
//     { id: 'taichung03', district: '清⽔市' }]}
// ]

// cityArray.forEach((city,index) => {
//     console.log(city.name);
//     console.log(city.ch_name);
//     // console.log(city.district);
//     city.district.forEach((dt,index) =>{
//         console.log(`${dt.id},${dt.district}`);
//     })
// });

let cityObject = {
    taipei: [
    { id: 'taipei01', district: '中正區' },
    { id: 'taipei02', district: '萬華區' },
    { id: 'taipei03', district: '信義區' }],
    taoyuan: [
    { id: 'taoyuan01', district: '桃園市' },
    { id: 'taoyuan02', district: '八德市' },
    { id: 'taoyuan03', district: '中壢市' }],
    taichung: [
    { id: 'taichung01', district: '台中市' },
    { id: 'taichung02', district: '⼤⾥市' },
    { id: 'taichung03', district: '清⽔市' }]
};

    let cities = Object.keys(cityObject);
    cities.forEach((city,index)=>{
        cityObject[city].forEach((dt,index)=>{
            console.log(dt.id + "," +dt.district);
        });
    });

