// 리액트 기반 컴포넌트는 .tsx로 생성
// .ts는 리액트 컴포넌트 안됨(jsx문법 사용 불가)

import { useState } from "react"

export default function Profile(props : {name:string, age:string}) : JSX.Element{
    
    // state는 일반적으로 타입을 명시x (자동적용)
    let[myState, setMyState] = useState(0);


    return(
        <>
            <p>{props.name} 입니다.</p>
        </>
    )
}