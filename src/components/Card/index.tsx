import Image from 'next/image';

type Props = {
    src: string,
    title: string
}

const Card = ({src, title}: Props) => {
    return(
        <span className="flex flex-col flex-1 mx-7 rounded-3xl shadow-2xl border p-3 divide-y">
            <img className='rounded-t-3xl' src={src} alt={title} />
            <h3 className='font-bold text-3xl text-center pt-3'>{title}</h3>
        </span>
    )
}

export default Card;