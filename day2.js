var p=document.getElementById('paragraph');
var image1=document.getElementById('first_img');
var image2=document.getElementById('sec_img');
var image3=document.getElementById('third_img');
function changeimage(number)
{
    if(number ==1)
    {
        image1.setAttribute('src','red.png');
        image2.setAttribute('src','gray.png');
        image3.setAttribute('src','gray.png');
        p.innerHTML='ready';
        p.style.color='red'
    }
    else if(number ==2)
    {
        image1.setAttribute('src','gray.png');
        image2.setAttribute('src','orange.png');
        image3.setAttribute('src','gray.png');
        p.innerHTML='steady';
        p.style.color='orange'
    }
    else if(number ==3)
    {
        image1.setAttribute('src','gray.png');
        image2.setAttribute('src','gray.png');
        image3.setAttribute('src','green.png');
        p.innerHTML='go';
        p.style.color='green';
    }
    else
    {
        console.log('please enter number betwwen 1 or 2 or 3');
    }

}
 ////////////////////// lab3 problem 1 ///////////////////////////////
 function changeagain(){
var img_array=["red.png","orange.png","green.png"]
        fixed_image="gray.png",
        index=0;

 setInterval(function(){
     if(index==0)
     {
        image1.setAttribute("src",img_array[index]);
        image2.setAttribute('src',"gray.png");
        image3.setAttribute('src',"gray.png");
        p.innerHTML='ready';
        p.style.color='red';
        
     }
     
     else if(index==1)
     {
        image1.setAttribute("src","gray.png");
        image2.setAttribute('src',img_array[index]);
        image3.setAttribute('src',"gray.png");
        p.innerHTML='steady';
        p.style.color='orange';
        
     }
     else if(index==2)
     {
        image1.setAttribute("src","gray.png");
        image2.setAttribute('src',"gray.png");
        image3.setAttribute('src',img_array[index]);
        p.innerHTML='go';
        p.style.color='green';
    }

 index++;

        if(index>img_array.length)
        {
            index=0;
        }
   },2000);
}