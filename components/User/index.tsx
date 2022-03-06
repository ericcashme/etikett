import React, { FC, memo } from 'react'
import Image from 'next/image'
import { Avatar } from '../Avatar'
import { Tag } from '../Tag'
import * as S from './styles'
import { UserProps } from './types'

const initialUser = {
  id: '221',
  name: 'Eric Vasconcelos',
  roles: ['Prepress']
}

export const User: FC<UserProps> = memo(
  ({
    size = 'medium',
    image = 'http://gdurl.com/6aII',
    user = initialUser,
    hasRole = false,
    isAvailable = true,
    unavailableImage,
    removeUser,
    ...rest
  }) => {
    const avatarSize = size === 'medium' ? 'lg' : 'xl'

    return (
      <S.UserContainer size={size} {...rest}>
        <S.WrapImage>
          {removeUser && <S.ButtonRemove onClick={() => removeUser(user)}>×</S.ButtonRemove>}
          <Avatar size={avatarSize} image={image} alt={user.name} />
          {!isAvailable && (
            <S.UserSleeping>{unavailableImage && <Image src={unavailableImage} alt="User" />}</S.UserSleeping>
          )}
        </S.WrapImage>
        <S.UserName>{user.name}</S.UserName>
        {hasRole && <Tag size={size === 'large' ? 'large' : 'default'}>{user.roles[0]}</Tag>}
      </S.UserContainer>
    )
  }
)

User.displayName = 'User'
