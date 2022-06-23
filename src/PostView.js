import React from 'react'
import { Link, useParams } from 'react-router-dom';


const PostView = () => {
    const { rId } = useParams();
    let elem = {id:0,content:""};
    console.log("PostView id: ",rId);

    const loadJson = async (id) => {

        try {
          const response = await fetch(process.env.REACT_APP_POSTS_URL);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
//          let obj = data.map(o => { if(o.id === id) return o }).content;
            console.log("data:",data,"id:",id,"type",typeof(id),"parseint",Number(id))
// !!! Здесь у меня не получилось выбрать элемент из массива data по id

           for(var i=0;i<data.length;i++){
             if(data[i].id.toString()===id){
             console.log("Yess!!!")
             }

           }
           //console.log("obj",obj)

         // elem = data[id:rId];
         // console.log(data[{id:rId}])
         // console.log("Elem:",elem,data)
        } catch (e) {
          console.error(e);
        }
      }
    
      loadJson(rId);

    return (
        <div>
            <p>Id:{rId} {elem.content}</p>
            
        </div>
    )
}

export default PostView;