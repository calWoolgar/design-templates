import React from "react";
import Image from 'next/image';
import CardFeature from "./card-feature";

export default function ServiceCard() {
    return (
        <div className="flex flex-col justify-between w-3/12 h-1/2 rounded-lg bg-white shadow-lg p-4">
            <div className="flex justify-start uppercase font-bold">
                Web Package 1
            </div>
            <div>
                <div className="flex flex-col justify-start">
                    <h2 className="uppercase font-bold text-3xl pb-2">Personal Site</h2>
                    <p>Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered.</p>
                </div>
                <div className="flex flex-col">
                    <CardFeature text='Amazing Website'/>
                    <CardFeature text='Great SEO'/>
                    <CardFeature text='Fantastic Price'/>
                    <CardFeature text='New Animations'/>
                    <CardFeature text='Stunning Visuals'/>
                    <CardFeature text='Built with you in mind'/>
                </div>
            </div>
            <div className="flex justify-start">
                <button className="rounded-lg px-4 py-2 bg-cyan-800 text-white">Order Now</button>
            </div>
        </div>
    )
}