import data from "../utils/dummydata.json"
import { useState } from "react";
import SortableTable from "./table/SortableTable";

export default function ArticleWrapper({ form: boolean, headers: any}) {
    const [ _, setData ] = useState([data.articles]);

    const pushData  = ( save: any ) => {
      data.articles.push(save)
      setData([data.articles])
      console.log(data);
    }


    return (
        <div>
            {(form) 
                : 
                ? <SortableTable headers={headers} data={articles} />}
            
        </div>
    )
}