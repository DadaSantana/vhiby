import Image from 'next/image';

type Props = {
    src: string,
    title: string
}

const Card = ({src, title}: Props) => {
    return(
        <span className="flex flex-col flex-1 mx-4 border-4 rounded-3xl">
            <img className='rounded-3xl' src={src} alt={title} />
            <h3>{title}</h3>
        </span>
    )
}

export default Card;