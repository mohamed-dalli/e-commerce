///// we used OOP to creat the product 
function Electro(id,src,title,price){
  return{id,src,title,price}
}

var electro1 = Electro(0,"Samsung-UN32N5300AFXZA-1080p-LED-LCD-Smart-TV-5b421594c9e77c0054c1f861.jpg","screen TV",16)
var electro2 = Electro(1,"./airpods-avec-boitier-de-charge-sans-fil.jpg","Air pods",15)
var electro3 = Electro(2,"https://www.scoop.com.tn/36624-home_default/smartphone-apple-iphone-11-64go-ecran-61-black.jpg","Iphone 13",65)
var electro4 = Electro(3,"https://tdiscount.tn/43555-large_default/machine-a-laver-automatique-tornado-8-kg-1200-trsmin-argent.webp","Machine a laver",160)
var electro5 = Electro(4,"https://www.lg.com/tn/images/lave-vaiselle/md07522209/gallery/dm-05.jpg","Lavisel",120)
var electro6 = Electro(5,"https://tdiscount.tn/blog/wp-content/uploads/2022/07/pc-gamer-tunisie-1.png","Pc Gamer",80)
var electro7 = Electro(6,"https://spacenet.tn/63636-home_default/ecran-huawei-238-full-hd-ad80hw.jpg","Ecran pc",90)
var electro8 = Electro(7,"https://musicplus.tn/modules/ajaxzoom/axZm/zoomLoad.php?azImg=/img/p/2/7/9/4/2794.jpg&qual=80&width=1200&height=1200","Camera canon",300)
var electro9 = Electro(8,"https://tunisiatech.tn/8344-medium_default/flash-usb-sandisk-cruzer-blade-32gb.jpg","Flash usb",20)
var electro10 = Electro(9,"https://advancedoffice.dz/media/catalog/product/cache/1/image/17149bac2779a7bccf629fa0b9379a14/i/m/image.jpeg_14771_1_4063_1_2913_1_765_2_4038_1_1278_1_9531_1_828.jpg","Data cheau",50)
var electro11 = Electro(10,"https://i.rtings.com/assets/products/1htouLNw/amazonbasics-3-button-usb-wired-mouse/design-medium.jpg","Mouse",5)



var myItems=[]
///// we push the product in array to loop throw them easly
var store = [
  electro1,electro2,electro3,electro4,electro5,electro6,electro7,electro8,electro9,electro10,electro11
]



function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  

    ///////// this function to show the all product 
    function showAll(arr){

      each(arr,function(element){
      
      $(".card_container").append(
          `<div class="card"  >
          <div class="card-img" >
      
          </div>
          <div class="card-info">
              <img src=${element.src} width="105px">
            <p class="text-title">${element.title} </p>
            <p class="text-body"zee&éeé"r"'tr"'(t'(</p>
          </div>
          <div class="card-footer">
          <p class="text-title">${element.price}</p>
      
          <div  id=${element.id} class="card-button">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
              <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
            </svg>
          </div>
        </div>
      </div>`
      )
      })
    }

    showAll(store)

var sum=[]

$("#b1").on("click",function(){
var summ = reduce(sum,function(acc,curr){
return acc + curr
},0)
$('.tot').text(`${summ} DN`)
})


$('.card-button').on('click',function(){
    console.log(this.id)
    id=parseInt(this.id)
   
    var arr=filter(store,function(element){
        
        console.log(element.id)
        return element.id==this.id
    })
    console.log("arr",arr)
  
    myItems.push(arr[0])
    var list = $("<div></div").text(`${arr[0].title} : price ${arr[0].price} DN`)
    sum.push(arr[0].price)
    
    $("#cartItem").append(list);
})


//////// we creat this function to search for the product by the title 
function search(){
  var chercher = document.getElementById("pute").value.toUpperCase()
  var felter = filter(store,function(element){
    return element.title.toUpperCase().includes(chercher)
  })
  console.log(felter);
  $(".card_container").empty()
  showAll(felter)
}


