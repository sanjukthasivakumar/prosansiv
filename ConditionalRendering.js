import { useState } from "react";

const Login = () => {
    return (
        <div>
            <h2>Return if False!</h2>
        </div>
    );
};

const Logout = () => {
    return (
        <div>
            <h2>Return if True!</h2>
        </div>
    );
};
export default function ConditionalRendering(){
    const[isTrue, setIsTrue] = useState(false);
    // 1) using if-else
    if(isTrue){
        return (
            <div>
                <Logout/>
                <button onClick={()=>setIsTrue(!isTrue)}>Logout</button>
            </div>
        )
    } else{
        return (
            <div>
                <Login />
                <button onClick={()=>setIsTrue(!isTrue)}>Login</button>
            </div>
        );
    }

    // 2) using ternary operator
    // return (
    //     <div>
    //         {isTrue ? (
    //             <div>
    //                 <Logout/>
    //                 <button onClick={()=>setIsTrue(!isTrue)}>Login</button>
    //                 </div>
    //         ) : (
    //             <div>
    //                 <Login />
    //                 <button onClick={()=>setIsTrue(!isTrue)}>Logout</button>
    //             </div>
    //         )}
    //     </div>
    //     );
    
// using AND operator
// return (
//     <div>
//         {isTrue && (
//             <div>
//                 <Logout/>
//                 <button onClick={()=>setIsTrue(!isTrue)}>Login</button>
//                 </div>
//         )}
//     </div>
// );
}