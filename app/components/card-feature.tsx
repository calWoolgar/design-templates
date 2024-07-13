import React from "react";
import Image from 'next/image';

export default function CardFeature({text}) {
    return (
        <span className="py-1">
            <Image className="inline pr-1" src='/images/checkbox-circle-svgrepo-com.svg' alt='checkbox' width={20} height={20}/>
            {text}
        </span>
    )
}