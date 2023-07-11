import React, { useEffect, useState } from "react";
import { getNationality } from "../../services/nationalize.service";

interface INationalityProps
{
    name: string
}
const NationalityComponent = (props: INationalityProps) =>{ // porps == PROPERTIES
    const [nationality , setNationality] = useState<string>('');

    useEffect(()=>{
        console.log(props.name)
        // getNationality(props.name).then((res)=>{console.log(res)})
    },[])
    return(
        <div>
            {nationality}
        </div>
    )
}

export default NationalityComponent;