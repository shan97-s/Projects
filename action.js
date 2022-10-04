        var size=8;
        var dec=(size<=8) ? 0.75:0.5;
        var ships=(size*size)*dec;
        var r=document.querySelector("#in");
        var r1;
        var frame=document.querySelector(".o");
        var bxnm;
        let arr = [];
        
        while(arr.length < ships){
        let r = Math.floor(Math.random() * size*size) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
              }
        console.log(arr);
        for(let f=0;f<size;f++){
             
        r1=document.createElement("div");
        r1.className="r1";
        r1.style.height=(size>8)?"6.25%":"12.9%";
            frame.appendChild(r1);
          for(let i=1;i<=size;i++){
              bxnm=i+(f*size);
              var x=0;
            while(x<arr.length){
            if(arr[x]==bxnm){
            r1.innerHTML+=`<form class="box${bxnm}"><i class="fa-light fa-ship">${bxnm}</i></form>`
            break;
            }
           
            x++;
          }
          if( arr[x]!=bxnm){
            r1.innerHTML+=`<form class="box${bxnm}"></form>`
            }
        }
           if(f==size-1){
               alert(document.querySelector(".box64").innerHTML);
           }
          //r.innerHTML+=`<div class="break"><div/>`
        }
        // functioning of the game
        document.querySelectorAll("form").forEach(form => form.addEventListener('click',clickfunc))
        function clickfunc(event){
          if(event.target.innerHTML!=""){
            console.log(event.target.innerHTML)
            console.log(event.target.i.sytle.visibility)
          }
        console.log("missed the hit");
        }