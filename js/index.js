$(window).load(function(){
    mainMenuDrop();
    tmenuDrop();
    visualSlide();
    symbolRotate();
})
//$(window).resize(function(){
   // visualSlide();
//})

function mainMenuDrop(){
   
    var $subMenu;
    var $subBg;
    var $headerWrap;
    var $mainMenu;

    init();
    inEvent();
    //alert(9);

    function init(){
       
        $subMenu=$('.submenu');
        $subBg=$('.sub_bg');
        $headerWrap=$('#header_inner');
        $mainMenu=$('#gnb > ul > li > a');

       
        $subMenu.slideUp();
        $subBg.slideUp();
    }
    function inEvent(){
       

        $mainMenu.on('mouseenter focus', dropMenu);
        $headerWrap.on('mouseleave', foldMenu);
    }
    
    function dropMenu(){
        // $headerWrap.css('height', 400);
        $subBg.stop();
        $subBg.slideDown(500);
        $subMenu.stop();
        $subMenu.slideDown(500);
    }
    function foldMenu(){
        $subBg.stop();
        $subBg.slideUp(500);
        $subMenu.stop();
        $subMenu.slideUp(500);
    }

}//mainMenuDrop

function tmenuDrop(){
    var $tMenu;
    var $mNavBtn;
    var $tGnb;
    var $tmainMenu;
    var $tsubMenu;
    var showMainMenu=false;
    var menuOpen=false;

    init();
    inEvent();

    function init(){
        $tMenu=$('#tmenu');
        $mNavBtn=$('#mnav_btn');
        $tGnb=$('#tgnb');
        $tmainMenu=$('#tgnb > ul > li > a');
        $tsubMenu=$('.tsubmenu');


        $tMenu.css('height',70);
        $tGnb.slideUp();
        $tsubMenu.slideUp();
        
    }
    function inEvent(){
        $mNavBtn.bind('click', showTGnb);
        
        $tmainMenu.on('click focus', openTMenu);
    }
    function showTGnb(){
        if(showMainMenu==false){
            $tMenu.css('height',2000);
            $tGnb.stop();
            $tGnb.slideDown(0);
            $('.line03').fadeOut(0);
            $('.line03').removeClass('on01');
            $('.line01').addClass('on01');
            $('.line02').removeClass('on02');
            $('.line02').addClass('on02');

            showMainMenu=true;
            
        }else{
            $tMenu.css('height',70);
            $tGnb.stop();
            $tGnb.slideUp(0);

            $('.line03').fadeIn(0);
            $('.line01').removeClass('on01');
        
            $('.line02').removeClass('on02');
            

            showMainMenu=false;
            
        }
       return false;
    }
    function openTMenu(){
//        $(this).next().toggle();
        if($(this).next().is(':hidden')){
//           $(this).next().stop();
//            $(this).next().toggle();
            $tsubMenu.stop();
            $(this).next().slideDown(500);

            
//            menuOpen=true;
            return false;  
            
            
        }else{
            $tsubMenu.stop();
           $tsubMenu.slideUp(500);
            
            
//            menuOpen=false;            
            return false; 
            
        }
//        return false;
    }

    
}//tmenuDrop()

function visualSlide(){
    var bgImgArray;
    var $imgList;
    var $imgListIn;
    var $imgSize;
    var $imgListWidth;
    var $visualDot;
    var imgNum=0;
    var timer;
    var $nextBtn;
    var $prevBtn;
    var clickNum=0;
    var windowWidth;

    init();
    reset();
    inEvent();
   
    showDot(0);
    
    
    //timer;

    function init(){
        bgImgArray=["../images/visual/garden.png", "../images/visual/images/mainvisual02_01.png", "../images/visual/observatory.png"];
        $imgList=$('#img_list');
        $imgListIn=$imgList.children();
        $imgListIn.eq(0).css('background-image', 'url("'+bgImgArray[0]+'")');
        $imgListIn.eq(1).css('background-image', 'url("'+bgImgArray[1]+'")');
        $imgListIn.eq(2).css('background-image', 'url("'+bgImgArray[2]+'")');
        $imgSize=bgImgArray.length;
        //alert($imgSize);
       
        //alert($imgListWidth);
       
        //alert($imgListWidth*$imgSize);
        $visualDot=$('#visual_dots').find('a');
        timer=setInterval(autoPlay,3000);
//        $nextBtn=$('.next_btn > a');
//        $prevBtn=$('.prev_btn > a');
        
        //alert(windowWidth);
        
        
         
        
       
    }
    
     function inEvent(){
        //$(window).on("resize", reset())
        //$(window).on("resize", onVisualReset())
        $visualDot.on('click focus', btnEvent);
//       $nextBtn.on('click focus', nextSlide);
//         $prevBtn.on('click focus', prevSlide);
        
        
        $(window).on("resize", reset);   
         
         
         


    }
    function reset(){
        $windowWidth = $(window).innerWidth();
       $imgListIn.css({'width':$windowWidth});
        //alert($imgListIn.innerWidth())
        $imgList.css({'width':$windowWidth*$imgSize});
        $imgList.css({'left':$imgListWidth});
         $imgListWidth=$imgList.children().innerWidth();
       
//        
//        if($(window).width() <= 1200){
//           
//          onStop();
//            
//        }else{
//            onPlay();
//        }
//        
        
       
       
       
        
    }
    
//    if($(window).width() <= 1200){
//           
//          
//            $('#visual').off('mouseleave', onPlay);
//            $('#visual').off('mouseenter', onStop);
//            $nextBtn.on('click focus', nextSlide);
//        $prevBtn.on('click focus', prevSlide);
//            
//        }else if($(window).width() > 1200){
//             $('#visual').on('mouseleave', onPlay);
//            $('#visual').on('mouseenter', onStop);
//        }
//   

    
    function btnEvent(){
        imgNum=$visualDot.index($(this));
       

        showDot(imgNum);
        slideEvent(imgNum);
        
        return false;
    }
    function showDot(slideNum){
        $visualDot.parent().removeClass('on');
        $visualDot.eq(slideNum).parent().addClass('on');
    }
    
    function slideEvent(newNum){
        $imgList.animate({'left':-$imgListWidth*newNum}, 300, "easeOutCubic");
    }
    
    function autoPlay(){
        imgNum++;

        if(imgNum >= $imgSize){
            imgNum=0;
        }
        showDot(imgNum);
        slideEvent(imgNum);
       
        
    }
    
    function onStop(){
        clearInterval(timer);
    }
    function onPlay(){
        timer=setInterval(autoPlay,3000);
    }
   
    

         function nextSlide(){
          clickNum++;
             
             if(clickNum >= $imgSize){
                 clickNum=0;
             }else{
                 $imgList.stop();
              $imgList.animate({'left':-$imgListWidth*clickNum}, 300, "easeOutCubic");
             }
           
              
             return false;
       
             
             
     }
     function prevSlide(){
         clickNum--;
         
         if(clickNum < 0){
             clickNum=0;
         }else{
              $imgList.stop();
         $imgList.animate({'left':$imgListWidth*clickNum}, 300, "easeOutCubic");
         }
        return false;
        
     }
    }
    

//visualSlide

//function visualSlide(){
//   
//   var bgImgArray; //백그라운드 이미지 어레이
//   var $imgList;// ul
//   var $imgListIn; //li
//   var $imgSize; //li 갯수
//   var $imgListWidth; //li가로 크기
//   var $visualDot; //도트 리스트
//   var imgNum=0; //첫 이미지 순번
//   var timer; //오토플렝;
//   var $nextBtn; //넥스트
//   var $prevBtn; //이전
//   var clickNum=0; //첫 클릭한 이미지 순번
//   var windowWidth;  //윈도우 리사이즈
//   var resizeTime;
//   var isAuto = true;
//   
//   init();
//   visualReset();
//   inEvent();
//   showDot(0);
//   
//   
//     
//   
//   
//   function init(){
//       bgImgArray=["../images/visual/garden.png", "../images/visual/images/mainvisual02_01.png", "../images/visual/observatory.png"];
//       $imgList=$('#img_list');
//       $imgListIn=$imgList.children();
//       $imgListIn.eq(0).css('background-image', 'url("'+bgImgArray[0]+'")');
//       $imgListIn.eq(1).css('background-image', 'url("'+bgImgArray[1]+'")');
//       $imgListIn.eq(2).css('background-image', 'url("'+bgImgArray[2]+'")');
//       $imgSize=$imgListIn.size();
//      // alert($imgSize);
//     
//       //alert($imgListWidth);
//     
//       //alert($imgListWidth*$imgSize);
//       $visualDot=$('#visual_dots').find('a');
//       //timer=setInterval(autoPlay,3000);
//       $nextBtn=$('.next_btn > a');
//       $prevBtn=$('.prev_btn > a');
//       
//       //alert(windowWidth);
//   }
//   
//   function visualReset(){
//       
//       $windowWidth = $(window).innerWidth();
//       $imgListIn.css({"width":$windowWidth}) //li 크기 재설정
//       $imgList.css({"width":$windowWidth * $imgSize})
//       //$imgList.css({"left": $windowWidth * imgNum});
//       $imgList.css({"left":0})
//       
//     
//       
//       
//       
// 
//   }
//   function inEvent(){
//       //$(window).on("resize", reset())
//       //$(window).on("resize", onVisualReset())
//       $visualDot.on('click focus', btnEvent);
//      $nextBtn.on('click focus', nextSlide);
//        //$prevBtn.on('click focus', prevSlide);
//       
//       
//       $(window).on("resize",function(){
//           
//           visualReset();
//           slideReset();
//           
//           
//       })
//   }
//   
//   function slideReset(){
//       if($(window).width() < 768 && isAuto == true){
//       onStop()
//           isAuto = false;
//           
//         
//       }else{
//           onPlay();
//           isAuto = true
//       }
//       
//       
//   
//   }
//   function btnEvent(){
//       imgNum= $visualDot.index($(this));
//       //alert(imgNum)
//       showDot(imgNum);
//       onSlide(imgNum);
//       
//       return false;
//   }
//   
//   function onSlide(imgIdx){
//       
//       $imgList.stop();
//       $imgList.animate({"left":-$windowWidth * imgIdx}, 500,"easeOutCubic");
//       
//       return false;
//   }
//   function showDot(imgIdx){
//       $visualDot.parent().removeClass('on');
//       $visualDot.eq(imgIdx).parent().addClass('on');
//   }
//   
//   function onPlay(){
//       timer = setInterval(autoSlide, 1000)
//   }
//   function onStop(){		      
//     
//     clearInterval(timer);
//     
//   }
//   function autoSlide(){
//       imgNum ++;
//       if(imgNum >= $imgSize){
//           imgNum = 0;
//       }
//       showDot(imgNum);
//       onSlide(imgNum);
//   }
//   
//   function nextSlide(){
//       clickNum++;
//       
//           
//            if(clickNum >= $imgSize){
//                clickNum=0;
//            }$imgList.stop();
//             $imgList.animate({'left':-$windowWidth*clickNum},300, "easeOutCubic");
//
//            return false;
//       
//   }
//   
//   
// 
//   
//   
//}


function symbolRotate(){
    
    var autoSlide = setInterval(autoplay, 2000);

            var $ul = $("#pattern_list > ul");
            var $list = $ul.children();
    

            var listNum = 0;
            var totalList = $list.length; // li 의 총 개수
    
            //$ul.css({"width":$list.innerWidth() * totalList})
            //$list.css({"width": $("#pattern_list").outerWidth(true) / 3})
    //alert($ul.innerWidth())
    
            //alert(totalList);
            function autoplay(){
                var liView = $(this).width() > 768 ? 3 : 1; // 화면에 보여질 li 개수
                var liWidth = $list.outerWidth(true); // li 의 크기를 구함

              $ul.stop().animate({"left": -liWidth*listNum}, 500, "easeOutCubic"); // ul 슬라이드

              listNum++; // listNum 1씩 증가

              if( listNum > totalList-liView ) // listNum 이 totalList - 보여질 개수 보다 커지면 리셋
                listNum = 0;
            }


            $(window).on("resize", function(){  
                autoSlide;
            }).trigger("resize");
//    var $patternDots;
//    var $imgList;
//    var $imgListWidth;
//    var $moveList;
//    var dotNum=0;
//    
//    init();
//    inEvent();
//    
//    
//    function init(){
//        $patternDots=$('#pattern_dots > li > a');
//        $imgList=$('#pattern_list_inner').children().size();
//        //alert($imgList);
//        $imgListWidth=$('#pattern_list_inner').children().innerWidth();
//        //alert($imgListWidth);
//        $moveList=$('#pattern_list_inner');
//        $moveList.css({'width':$imgListWidth*$imgList});
//       // alert($imgListWidth*$imgList);
//        $moveList.css('left',0);
//        
//         if($(window).innerWidth <= 1200){
//        reset();
//    }
//    
//    }
//     function reset(){
//        var $windowWidth = $(window).innerWidth();
////       $moveList.children().css({'width':$windowWidth});
//        //alert($moveList.children().innerWidth())
//        $moveList.css({'width':$windowWidth});
////        $moveList.css({'left':$imgListWidth});
//        $imgListWidth=$moveList.children().innerWidth();
//       
//    }
//    function inEvent(){
//        $patternDots.on('click focus', btnIndex);
//    }
//   
//    function btnIndex(){
//        dotNum=$patternDots.index($(this));
//        //alert(dotNum);
//        showSlide(dotNum);
//        
//        return false;
//    }
//    function showSlide(clickNum){
//        
//        clickNum;
//        
//        $moveList.stop();
//        $moveList.animate({'left':-$imgListWidth*clickNum},300,"easeOutCubic");
//        
//        return false;
//    }
//   

}//symbolRotate






//function brandRotate(){
//    var $brandList;
//    var $brandWrap;
//    var $brandListWidth;
//    
//    init();
//    
//    function init(){
//        $brandList
//    }
//}