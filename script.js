
const addbttn=document.getElementById("addbtn");
const subject=new Set();
   let totalattended=0;
        let totalcounducted=0;
      let allpercbox=document.getElementById("allperc");

addbttn.addEventListener("click",()=>{

    const sub=document.getElementById("subject").value.trim().toLowerCase();
    const atnd=Number(document.getElementById("attended").value);
    const cndctd=Number(document.getElementById("conducted").value);

    if(sub!=""&&(atnd>=0&&cndctd>0)&&(cndctd>atnd)){

         if(subject.has(sub)){
        alert("already added");
        return;
        }

        const card=document.createElement("div");
        card.className="card";

        const subbox=document.createElement("div");
        subbox.innerText=sub;
        const atnbox=document.createElement("div");
        atnbox.innerText=Number(atnd);
        const condbox=document.createElement("div");
        condbox.innerText=Number(cndctd);
       
        let attended=atnd;
        let conducted=cndctd;
        const percbox = document.createElement("div");
        percbox.innerText = percentage(attended, conducted) + "%";

     
        totalattended+=attended;
        totalcounducted+=conducted;
       // allperc(totalattended,totalcounducted);
                allpercbox.innerText=Number(allperc(totalattended,totalcounducted))+"%";

        

        const atnpls=document.createElement("button");
                atnpls.innerText="+";
        const atnmins=document.createElement("button");
                atnmins.innerText="-";
        const conpls=document.createElement("button");
                conpls.innerText="+";
        const conmins=document.createElement("button");
                conmins.innerText="-";
        const delbtn=document.createElement("button");
                delbtn.innerText="delete";


        atnpls.addEventListener("click",()=>{
                attended++;
                if(attended>conducted){
                        if(attended > 0){
                          attended--;
                        }
                        alert("seriously???");
                        return;
                }
                totalattended++;
               // allperc(totalattended,totalcounducted);
                atnbox.innerText=attended;
                percbox.innerText=percentage(attended,conducted)+"%";
                                allpercbox.innerText=Number(allperc(totalattended,totalcounducted))+"%";

        })    
        atnmins.addEventListener("click",()=>{
                attended--;
                atnbox.innerText=attended;
                  totalattended--;
               // allperc(totalattended,totalcounducted);
                 percbox.innerText=percentage(attended,conducted)+"%";
                                 allpercbox.innerText=Number(allperc(totalattended,totalcounducted))+"%";

        })   
        conpls.addEventListener("click",()=>{
                conducted++;
                condbox.innerText=conducted;
                  totalcounducted++;
                //allperc(totalattended,totalcounducted);
                percbox.innerText=percentage(attended,conducted)+"%";
                                allpercbox.innerText=Number(allperc(totalattended,totalcounducted))+"%";

        }) 
         conmins.addEventListener("click",()=>{
                 conducted--;
                 if(conducted<attended){
                        alert("study math first");
                        return;
                 }
                   totalcounducted--;
                //allperc(totalattended,totalcounducted);
                condbox.innerText=conducted;
                percbox.innerText=percentage(attended,conducted)+"%";
                                allpercbox.innerText=Number(allperc(totalattended,totalcounducted))+"%";

        })       
       

                card.appendChild(subbox);
                                card.appendChild(atnpls);
                card.appendChild(atnbox);
                                card.appendChild(atnmins);
                                card.appendChild(conpls);
                card.appendChild(condbox);
                                card.appendChild(conmins);
                card.appendChild(percbox);
                card.appendChild(delbtn);

        const show=document.getElementById("show");
        show.appendChild(card);     
        
        
            subject.add(sub);
            document.getElementById("subject").value = "";
            document.getElementById("attended").value = "";
            document.getElementById("conducted").value = "";

        delbtn.addEventListener("click",()=>{
                card.remove();
                subject.delete(sub);
                totalattended -= attended;
                totalcounducted -= conducted;
               // allperc(totalattended,totalcounducted);
                                allpercbox.innerText=Number(allperc(totalattended,totalcounducted))+"%";

        })

    }
    else if(cndctd<atnd){
        alert("dude do u know math?");
    }
    else
        alert("fill the stuff first");
})

function percentage (attended,conducted){
        return Math.round((attended/conducted)*100);
}
function allperc(x,y){
        if(y === 0) return 0;
        return Math.round((x/y)*100);
}