// "use client"

// import { useSession } from "next-auth/react";




// const AuthStatus = () => {
//     const { data: session, status } = useSession();
//     const role = session?.user?.role
//     if (status === "loading")
//         return <Skeleton.Avatar active="true" size={"default"} shape={"circle"} />;
//     return (
//         <>
//             {status === "authenticated" ? (
//                 <Flex align="center" gap={6}>
//                     {role === "user" &&
//                         <MessageStatus />
//                     }
//                     <div className="flex flex-row items-center ">
//                         {role === "admin" || role === "superAdmin" &&
//                             <UserTagRole role={role} />
//                         }
//                         <Navbar session={session} />

//                     </div>
//                 </Flex>
//             ) : (
//                 <div className="mt-1">
//                     <button>ورود یا ثبت نام</button>
//                 </div>
//             )}
//         </>
//     );
// };

// export default AuthStatus;


"use client"


import { useSession } from "next-auth/react";
import Link from "next/link";
import DropDownHeader from "./DropDownHeader";




const AuthStatus = () => {
    const { data: session, status } = useSession();


    if (status === "loading")
        return <div className="avatar-skeleton" />
    return (
        <>
            {status === "authenticated" ? (





                <div className="h-10">

                    <DropDownHeader session={session} />



                </div>
            ) : (
                <div className="mt-1">
                    <Link href={"/auth/register"}>ورود یا ثبت نام</Link>
                </div>
            )}
        </>
    );
};

export default AuthStatus;
