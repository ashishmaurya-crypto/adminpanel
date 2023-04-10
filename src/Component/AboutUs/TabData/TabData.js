import React from "react";
import { Assest } from "../../../ReusableComponent/Assest/Assest";


export const TabData = [
    {
        title: 'Contact',
        path: '/',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.ContactsBook fill="gray" />,
        email: ['ashish@gmail.com', 'kumar@gmail.com'],
        phone: [],
        cName: 'nav-text'
    },
    {
        title: 'Address',
        path: '/orders',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.MapMarker fill="gray" />,
        address: "Office Number-691, Unitech Signature Tower 2, Tower B, Gurgaon Sector 15 Part 2, Gurgaon - 122001 (Near 32 Mile Stone,Jaipur Expressway)",
        cName: 'nav-text'
    },
    {
        title: 'Hours of operations',
        path: '/team-members',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.WorkHistory fill="gray" />,
        timing: "Mon - Sun Open 24 Hrs",
        cName: 'nav-text'
    },
    {
        title: 'Socia Media & Links',
        path: '/partners',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.LinkAlt fill="gray" />,
        social: [
            {'Instagram' : <Assest.Instagram fill="gray" />},
            {'Linkedin' : <Assest.Linkedin fill="gray" />},
            {'Google' : <Assest.Google fill="gray" />},
            {'Twitter' : <Assest.Twitter fill="gray" />}
        ],
        cName: 'nav-text'
    },
    {
        title: 'Statemnt',
        path: '/product-listings',
        pencil: <Assest.HiPencil fill="red" />,
        icon: <Assest.QuoteLeft fill="gray" />,
        statement: "One of the best company ",
        cName: 'nav-text'
    }
];
