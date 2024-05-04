"use client";
import React, { useState } from "react";
import {
    PlaylistAddCheck,
    Person,
    Diversity1,
    Widgets,
} from "@mui/icons-material/";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const MasterSidebar: React.FC = () => {
    const todoListGroup = [
        {
            icon: <Person />,
            name: "Personal",
        },
        {
            icon: <Diversity1 />,
            name: "Family",
        },
        {
            icon: <Widgets />,
            name: "Other",
        },
    ];

    const todoLists = {
        Personal: [
            {
                title: "Some List",
                desc: "Some desc",
                done: false,
                createdAt: "2024-04-23 11:11:11",
            },
            {
                title: "Some List",
                desc: "Some desc",
                done: false,
                createdAt: "2024-04-23 11:11:11",
            },
        ],
    };
    const [todoGroup, setTodoGroup] = useState<String>("Personal");
    const pathName = usePathname()

    console.log(todoGroup, pathName.slice(1));



    return (
        <div>
            {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button> */}

            <aside
                id="default-sidebar"
                // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                className="w-100 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            // style={{ display: "none" }}
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {todoListGroup.map((el, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={el.name}
                                        className={pathName.slice(1) === el.name ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                                        // className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                        onClick={() => setTodoGroup(el.name)}
                                    >
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            aria-hidden="true"
                                        >
                                            {el.icon}
                                        </svg>
                                        <span className="ms-3">{el.name} List</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>

            {/* <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {todoGroup}
                </div>
            </div> */}
        </div>
    );
};

export default MasterSidebar;
