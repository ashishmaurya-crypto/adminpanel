import React from "react";
import { Assest } from "../../../ReusableComponent/Assest/Assest";


export const TabData = [
    {
        title: 'Contact',
        path: '/',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.ContactsBook fill="#b8b6b6" />,
        email: ['salesteam@br.in', 'salesteam2@br.in'],
        phone: ['+91 9350435646', '8324561342'],
        cName: 'nav-text'
    },
    {
        title: 'Address',
        path: '/orders',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.MapMarker fill="#b8b6b6" />,
        address: "C-1 / 351 / 4 , GIDC Makarpur, Vadodara - 390010, Gujarat, India.",
        cName: 'nav-text'
    },
    {
        title: 'Hours of operations',
        path: '/team-members',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.WorkHistory fill="#b8b6b6" />,
        timing: "Mon - Sun Open 24 Hrs",
        cName: 'nav-text'
    },
    {
        title: 'Socia Media & Links',
        path: '/partners',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.LinkAlt fill="#b8b6b6" />,
        social: [
            {'Website' : <Assest.FaGlobe fill="#b8b6b6" />},
            {'Instagram' : <Assest.Instagram fill="#b8b6b6" />},
            {'Facebook' : <Assest.AiFillFacebook fill="#b8b6b6" />},
            {'Twitter' : <Assest.Twitter fill="#b8b6b6" />}
        ],
        cName: 'nav-text'
    },
    {
        title: 'Statement',
        path: '/product-listings',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.QuoteLeft fill="#b8b6b6" />,
        statement: "One of the best company ",
        cName: 'nav-text'
    }
];
