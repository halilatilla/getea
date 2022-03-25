import React, { FC } from 'react';
import {
  EmptyAvatar1,
  EmptyAvatar2,
  EmptyAvatar3,
  EmptyAvatar4,
  EmptyAvatar5,
} from './avatars';
export interface Props {
  size?: number;
  bgColor?: string;
  border?: {
    size?: number;
    color?: string;
    radius?: number;
    style?: string;
  };
}

export const GetEmptyAvatar: FC<Props> = ({
  size = 72,
  bgColor = '#E5E5E5',
  border = {
    size: 2,
    color: '#eeeeee',
    radius: 50,
    style: 'solid',
  },
}) => {
  const getAvatar = [
    EmptyAvatar1,
    EmptyAvatar2,
    EmptyAvatar3,
    EmptyAvatar4,
    EmptyAvatar5,
  ];
  const getRandomAvatar = () =>
    Math.floor(Math.random() * Math.floor(getAvatar?.length)) + 1;

  const Avatar = getAvatar[getRandomAvatar() - 1];

  return (
    <Avatar
      style={{
        width: `${size}px`,
        height: `${size}px`,
        color: bgColor,
        border: `${border.size}px ${border.style} ${border.color}`,
        borderRadius: `${border.radius}%`,
      }}
    />
  );
};
