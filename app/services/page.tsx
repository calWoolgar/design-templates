import React from "react";
import ServiceCard from "../components/service-card";

export default function Services() {
    return (
        <div className="flex justify-center items-center h-screen bg-zinc-200 gap-4">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    );
}