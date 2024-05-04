import Image from 'next/image'
import React from 'react'

const page: React.FC = () => {
    return (
        <div>
            <Image
                src="https://qph.cf2.quoracdn.net/main-qimg-ffa249116a934add1aec9ee997cd95c7"
                width={500}
                height={500}
                alt="Family"
                unoptimized
            />

        </div>
    )
}

export default page