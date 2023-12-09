function zodiac(){
  var birthmonth = document.getElementById("month").value;
  var birthday = document.getElementById("day").value;
  var result = " unknown because you didn't put a valid date.";
 
 
 if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18){
         result = ("Amethyst");
      document.getElementById("photo").innerHTML="<img src='https://www.weavers.com.tr/assets/uploads/product-detail/amestist_1.jpg'width=20%>";
    document.getElementById("characteristic").innerHTML="Amethyst is the purple variety of the quartz mineral species. It's the gem that's most commonly associated with the color purple, even though there are other purple gems such as sapphire and tanzanite. Its purple color can be cool and bluish, or a reddish purple that's sometimes referred to as “raspberry.”";
   
     }
 
     if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
        result = ("Aquamarine");
        document.getElementById("photo").innerHTML="<img src='https://5.imimg.com/data5/SELLER/Default/2020/9/WV/EV/FZ/34804027/rough-cut-milky-aquamarine-stone-500x500.jpeg'width=20%>";
       document.getElementById("characteristic").innerHTML="Aquamarine is a very special stone that helps in opening a clear channel between your heart and throat chakras. This ever so important connection allows one to constantly speak from the heart and to the highest truths. This beryl variety is a perfect stone to help aid you in the solving of conflicts, arguments and disagreements. ";
       
     }
    if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
        result = ("Diamond");
       document.getElementById("photo").innerHTML="<img src='https://amiel.club/uploads/posts/2022-03/thumbs/1647700854_46-amiel-club-p-kartinki-brilliantov-49.jpg'width=20%>";
      document.getElementById("characteristic").innerHTML="Diamond is a healing crystal that has been used for centuries to promote physical and spiritual health. It is one of the most popular crystals due to its many benefits, which include cleansing and energizing the body, enhancing mental clarity, and promoting spiritual growth.";
    }
   
     if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
         result = ("Emerald");
        document.getElementById("photo").innerHTML="<img src='https://www.livingbyexample.org/wp-content/uploads/2023/08/types-of-emeralds.jpg'width=20%>";
        document.getElementById("characteristic").innerHTML="Through time, the emerald has been known as a symbol of truth and love. In ancient Greece and Rome, emerald was said to be the gemstone of the goddess Venus, purveyor of love and hope. On the other side of the world, emeralds were revered by the Incas and believed by the Egyptians to be a source of eternal life.";
       
     }
   
     if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
      ){
         result = ("Agate");
        document.getElementById("photo").innerHTML="<img src='https://www.pezios.com/wp-content/uploads/2022/05/20220323-21-26-45-20220324-02-29-38-20220323-212654-DSC_0000-1.jpeg'width=20%>";
       document.getElementById("characteristic").innerHTML="Known as the stone of balance and harmony, agate is widely used for its ability to bring emotional healing to mind, body and spirit. It makes sense of the madness that we deal with in everyday life. Agate can be used to bring information to the surface that's deeply rooted in the subconscious.";
      
     }
   
     if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
         result = ("Pearl");
        document.getElementById("photo").innerHTML="<img src='https://i.pinimg.com/564x/09/36/5c/09365c171913631cc2d0933017614e17.jpg'width=20%>";
       document.getElementById("characteristic").innerHTML="The inner glow (orient) of pearls is thought to tap inner wisdom and nurture love. Pearls are also believed to signify innocence and faith. Practitioners use pearls to enhance personal integrity, bring truth forward, grow sincerity, inhibit immodest behavior and advance in wisdom.";
       
     }
     if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
         result = ("Ruby");
        document.getElementById("photo").innerHTML="<img src='https://i.ebayimg.com/images/g/KAUAAOSwCTRkA0Ru/s-l1600.jpg'width=20%>";
             document.getElementById("characteristic").innerHTML="Ruby is believed to promote loving, nurturing, health, knowledge and wealth. It has been associated with improved energy and concentration, creativity, loyalty, honor and compassion. Ruby is thought to be protective of home, possessions and family.";
       
     }
     if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
         result = ("Peridot");
        document.getElementById("photo").innerHTML="<img src='https://www.earthyard.com.au/cdn/shop/products/8418-EarthYard256_1200x1200.jpg?v=1646614121'width=20%>";
         document.getElementById("characteristic").innerHTML="Peridot is associated with strength and balance, it is believed to bring peace, health and rest - by harmonizing the mind and body. It is also thought to boost creativity and improve your mood.";
     }
     if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
       result = ("Opal");
        document.getElementById("photo").innerHTML="<img src='https://brahmagems-media.s3.ap-south-1.amazonaws.com/95/edc4ca29f45e122a5d57e8ceedf8a7c8.png'width=20%>";
         document.getElementById("characteristic").innerHTML="Opal has always been associated with love and passion, as well as desire and eroticism. It is a seductive stone that intensifies emotional states and releases inhibitions. It can also act as an emotional stabilizer. Wearing an opal is said to bring about loyalty and faithfulness.";
     }
     if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
        result = ("Citrine ");
        document.getElementById("photo").innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TZsCOQueQyPT-e6N7BvA4SwKcy6_6HraXC6IaPVZQN8HYuINB3Hdy2YmFb6LwNTVq94&usqp=CAU'width=20%>";
         document.getElementById("characteristic").innerHTML="Citrine has a hexagonal crystal system and has a cloudy or smoky appearance in its natural form. Also known as the merchant's stone, citrine meaning is associated with prosperity and joy and is thought to bring positive energy to the wearer's life.";
     }
     if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
         result = ("Turquoise");
        document.getElementById("photo").innerHTML="<img src='https://cdn.shopify.com/s/files/1/0133/1209/8368/files/turquoise_colour_variations_480x480.jpg?v=1661775325'width=20%>";
         document.getElementById("characteristic").innerHTML="The deep blue hues of the turquoise crystal call upon the powerful yet infinitely gentle energy of the ocean and the most expansive skies. It symbolises wisdom, prosperity, tranquillity, and protection. In plainer and more scientific terms, the turquoise crystal is a hydrous phosphate of aluminium and copper.";
     }
   
   if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
  
         result = ("Garnet");
      document.getElementById("photo").innerHTML="<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Garnet_Andradite20.jpg/640px-Garnet_Andradite20.jpg'width=20%>";
      document.getElementById("characteristic").innerHTML="Love and Friendship. With associations with the heart, blood, inner fire, and life force, garnets have long been considered symbols of love.";
     }else if (birthmonth>12||birthday>31){
        alert("Please enter an accurate date ! ");
     }
  document.getElementById("output").innerHTML= result;
 }