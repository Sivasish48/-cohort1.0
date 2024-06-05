// "use client";

// import React, { forwardRef, useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";


// import { cn } from "@/lib/utils";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
  
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";


// import { useNavigate } from "react-router-dom";

// const components = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

// export default function Appbar() {

//     const [userEmail,setUserEmail]=useState(null)
//     const navigate = useNavigate()

//     useEffect(() => {
//         fetch("http://localhost:4000/admin/me", {
//           method: "GET",
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         })
//           .then((resp) => {
//             if (!resp.ok) {
//               // Handle non-OK responses
//               throw new Error(`HTTP error! status: ${resp.status}`);
//             }
//             return resp.json();
//           })
//           .then((data) => {
//             console.log(data);
//             setUserEmail(data.username)
//           })
//           .catch((error) => {
//             // Handle errors
//             console.error("There was an error!", error);
//           });
//       }, []);
    

 
//     if (userEmail){
//       return (
//         <div className="flex justify-end">
//        <NavigationMenu> 
//     <NavigationMenuList>
//         <div>
//         <NavigationMenuItem>
         
//         <NavigationMenuLink className={navigationMenuTriggerStyle()}
//          onClick={()=>{
//           navigate('/courses')
//        }}>
//          Courses
//          </NavigationMenuLink>
           
//          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//            {userEmail}
//          </NavigationMenuLink>
       
//      </NavigationMenuItem>  
//         </div>
//        <div>
//        <NavigationMenuItem>
      
//        <NavigationMenuLink 
//       className={navigationMenuTriggerStyle()} 
//       onClick={() => {
//         //localStorage.setItem("token", null);
//         localStorage.removeItem("token")
//         setUserEmail(null)
//         navigate("/signup");
//       }}
//     >
//       Logout
//     </NavigationMenuLink>
    
//   </NavigationMenuItem>
//        </div>
//       </NavigationMenuList>
//     </NavigationMenu>
//     </div>
   
//   );
//     }
//     else{
//     return(
//       <div className="flex justify-end">
//        <NavigationMenu> 
//     <NavigationMenuList>
//         <div>
//         <NavigationMenuItem>
         
//          <NavigationMenuLink className={navigationMenuTriggerStyle()}
//          onClick={()=>{
//             navigate("/signup")
//          }}>
//            Signup
//          </NavigationMenuLink>
       
//      </NavigationMenuItem>  
//         </div>
//        <div>
//        <NavigationMenuItem>
      
//       <NavigationMenuLink  className={navigationMenuTriggerStyle()} 
//       >
//         Signin
//       </NavigationMenuLink>
    
//   </NavigationMenuItem>
//        </div>
//       </NavigationMenuList>
//     </NavigationMenu>
//     </div>
//     )
    
// }
// }

// const ListItem = forwardRef(
//   ({ className, title, children, ...props }, ref) => {
//     return (
//       <li>
//         <NavigationMenuLink asChild>
//           <a
//             ref={ref}
//             className={cn(
//               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//               {children}
//             </p>
//           </a>
//         </NavigationMenuLink>
//       </li>
//     );
//   }
// );
// ListItem.displayName = "ListItem";


"use client";

import React, { forwardRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useNavigate } from "react-router-dom";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Appbar() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setUserEmail(response.data.username);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex justify-end">
      <NavigationMenu>
        <NavigationMenuList>
          {userEmail ? (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={() => {
                    navigate('/courses');
                  }}
                >
                  Courses
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {userEmail}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUserEmail(null);
                    navigate("/signup");
                  }}
                >
                  Logout
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          ) : (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Signin
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
