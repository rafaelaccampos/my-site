import Image from 'next/image'
import * as S from './styled'

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <Image 
                src="/assets/profile-photo.jpg"
                alt="Uma foto minha com uma blusa preta"
                width={64}
                height={64}
            />
        </S.AvatarWrapper>
    )
};

export default Avatar